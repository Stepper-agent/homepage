import { join } from 'node:path'
import type { UpdateLogChange, UpdateLogEntry, UpdateLogGroup } from '../entities/update-log/update-log.type'

const OWNER = process.env.STEPPER_OWNER ?? 'Stepper-agent'
const REPO = process.env.STEPPER_REPO_NAME ?? 'stepper'
const API = `https://api.github.com/repos/${OWNER}/${REPO}`
const RAW = `https://raw.githubusercontent.com/${OWNER}/${REPO}`
const OUT = join(import.meta.dir, '..', 'entities', 'update-log', 'update-log.content.ts')

const TYPE_LABEL: Record<string, string> = {
    feat: 'Features',
    fix: 'Bug fixes',
    perf: 'Performance',
    refactor: 'Refactors',
    docs: 'Documentation',
    build: 'Build & CI',
    ci: 'Build & CI',
    test: 'Tests',
    chore: 'Chores',
    style: 'Chores',
    revert: 'Reverts',
}
const GROUP_ORDER = [
    'Features',
    'Bug fixes',
    'Performance',
    'Refactors',
    'Documentation',
    'Build & CI',
    'Tests',
    'Chores',
    'Reverts',
    'Other changes',
]

type GhTag = { name: string; commit: { sha: string } }
type GhCommit = { sha: string; commit: { message: string; committer: { date: string } } }
type GhCompare = { commits: GhCommit[] }
type GhRepo = { default_branch: string }

const ghHeaders = (): Record<string, string> => {
    const base: Record<string, string> = {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'stepper-web',
    }
    const token = process.env.GITHUB_TOKEN
    return token ? { ...base, Authorization: `Bearer ${token}` } : base
}

const gh = async <T>(path: string): Promise<T> => {
    const response = await fetch(`${API}${path}`, { headers: ghHeaders() })
    if (!response.ok) throw new Error(`GitHub API ${path} → ${response.status} ${response.statusText}`)
    return (await response.json()) as T
}

// Automated housekeeping commits (the post-release README sync) carry a CI-skip
// marker; keep them out of the user-facing changelog.
const isAutomated = (message: string) => /\[(skip ci|ci skip|no ci|skip actions|actions skip)\]/i.test(message)

// Release/version-bump chores are housekeeping, not a user-facing change — drop
// them so the changelog shows only real features and fixes.
const isReleaseChore = (subject: string) => /^chore(\([^)]*\))?:\s*(release\b|bump\b|v?\d+\.\d+)/i.test(subject)

const subjectOf = (message: string) => message.split('\n', 1)[0]

const parseSubject = (sha: string, message: string): UpdateLogChange => {
    const subject = subjectOf(message)
    const matched = subject.match(/^(\w+)(?:\(([^)]+)\))?(!)?:\s*(.+)$/)
    if (matched) return { type: matched[1].toLowerCase(), scope: matched[2], subject: matched[4], hash: sha.slice(0, 7) }
    return { type: 'other', subject, hash: sha.slice(0, 7) }
}

const group = (commits: UpdateLogChange[]): UpdateLogGroup[] => {
    const buckets = new Map<string, UpdateLogChange[]>()
    for (const change of commits) {
        const label = TYPE_LABEL[change.type] ?? 'Other changes'
        if (!buckets.has(label)) buckets.set(label, [])
        buckets.get(label)!.push(change)
    }
    return GROUP_ORDER.filter((label) => buckets.has(label)).map((label) => ({ label, items: buckets.get(label)! }))
}

// Commits reachable from `head` but not `base` (newest first). With `base = null`
// it is every commit up to `head` (used for the very first tag).
const commitsInRange = async (base: string | null, head: string): Promise<UpdateLogChange[]> => {
    const raw = base
        ? (await gh<GhCompare>(`/compare/${base}...${head}?per_page=100`)).commits.slice().reverse()
        : await gh<GhCommit[]>(`/commits?sha=${head}&per_page=100`)
    return raw
        .filter((commit) => !isAutomated(commit.commit.message) && !isReleaseChore(subjectOf(commit.commit.message)))
        .map((commit) => parseSubject(commit.sha, commit.commit.message))
}

const semverDesc = (a: string, b: string) => {
    const parse = (tag: string) => tag.replace(/^v/, '').split(/[.-]/).map((part) => Number.parseInt(part, 10) || 0)
    const [a1 = 0, a2 = 0, a3 = 0] = parse(a)
    const [b1 = 0, b2 = 0, b3 = 0] = parse(b)
    return b1 - a1 || b2 - a2 || b3 - a3
}

const cargoVersion = async (branch: string) => {
    try {
        const response = await fetch(`${RAW}/${branch}/Cargo.toml`)
        const toml = response.ok ? await response.text() : ''
        return toml.match(/version\s*=\s*"([^"]+)"/)?.[1] ?? '0.0.0'
    } catch {
        return '0.0.0'
    }
}

const main = async () => {
    const branch = (await gh<GhRepo>('')).default_branch
    const tags = (await gh<GhTag[]>('/tags?per_page=100')).sort((a, b) => semverDesc(a.name, b.name))
    const version = await cargoVersion(branch)
    const entries: UpdateLogEntry[] = []

    if (tags.length === 0) {
        entries.push({ version, groups: group(await commitsInRange(null, branch)) })
    } else {
        const unreleased = await commitsInRange(tags[0].name, branch)
        if (unreleased.length) entries.push({ version: `${version} (unreleased)`, groups: group(unreleased) })
        for (let i = 0; i < tags.length; i++) {
            const commits = await commitsInRange(tags[i + 1]?.name ?? null, tags[i].name)
            const meta = await gh<GhCommit>(`/commits/${tags[i].commit.sha}`)
            entries.push({
                version: tags[i].name.replace(/^v/, ''),
                tag: tags[i].name,
                date: meta.commit.committer.date,
                groups: group(commits),
            })
        }
    }

    const body = `import type { UpdateLogEntry } from '@entities/update-log/update-log.type'\n\nexport const UPDATE_LOG: UpdateLogEntry[] = ${JSON.stringify(entries, null, 4)}\n`
    await Bun.write(OUT, body)
    console.log(`✓ wrote ${entries.length} version entr${entries.length === 1 ? 'y' : 'ies'} from ${OWNER}/${REPO} (GitHub API) → ${OUT}`)
}

// Never fail the build on a transient API/network error: keep the committed
// snapshot of update-log.content.ts as the fallback.
main().catch((error) => console.warn(`⚠ update-log generation skipped (kept existing file): ${error}`))
