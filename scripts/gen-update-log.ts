import { $ } from 'bun'
import { join } from 'node:path'
import type { UpdateLogChange, UpdateLogEntry, UpdateLogGroup } from '../entities/update-log/update-log.type'

const REPO = process.env.STEPPER_REPO ?? '/Users/hyunseokbyun/stepper'
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

const sh = async (cmd: string) => {
    try {
        return (await $`${{ raw: cmd }}`.quiet().text()).trim()
    } catch {
        return ''
    }
}

const parseCommits = (out: string): UpdateLogChange[] =>
    out
        .split('\n')
        .filter(Boolean)
        .map((line) => {
            const [hash, , ...rest] = line.split('\t')
            const subject = rest.join('\t')
            const matched = subject.match(/^(\w+)(?:\(([^)]+)\))?(!)?:\s*(.+)$/)
            if (matched) return { type: matched[1].toLowerCase(), scope: matched[2], subject: matched[4], hash: hash.slice(0, 7) }
            return { type: 'other', subject, hash: hash.slice(0, 7) }
        })

const group = (commits: UpdateLogChange[]): UpdateLogGroup[] => {
    const buckets = new Map<string, UpdateLogChange[]>()
    for (const change of commits) {
        const label = TYPE_LABEL[change.type] ?? 'Other changes'
        if (!buckets.has(label)) buckets.set(label, [])
        buckets.get(label)!.push(change)
    }
    return GROUP_ORDER.filter((label) => buckets.has(label)).map((label) => ({ label, items: buckets.get(label)! }))
}

const cargoVersion = async () => {
    const toml = await Bun.file(join(REPO, 'Cargo.toml'))
        .text()
        .catch(() => '')
    return toml.match(/version\s*=\s*"([^"]+)"/)?.[1] ?? '0.0.0'
}

const LOG_FORMAT = '--format=%H%x09%aI%x09%s'

const main = async () => {
    const isRepo = await sh(`git -C ${REPO} rev-parse --is-inside-work-tree`)
    if (isRepo !== 'true') throw new Error(`not a git repo: ${REPO} (set STEPPER_REPO)`)

    const tags = (await sh(`git -C ${REPO} tag --sort=-v:refname`)).split('\n').filter(Boolean)
    const version = await cargoVersion()
    const entries: UpdateLogEntry[] = []

    if (tags.length === 0) {
        const commits = parseCommits(await sh(`git -C ${REPO} log ${LOG_FORMAT}`))
        entries.push({ version, date: await sh(`git -C ${REPO} log -1 --format=%aI`), groups: group(commits) })
    } else {
        const unreleased = parseCommits(await sh(`git -C ${REPO} log ${tags[0]}..HEAD ${LOG_FORMAT}`))
        if (unreleased.length) entries.push({ version: `${version} (unreleased)`, groups: group(unreleased) })
        for (let i = 0; i < tags.length; i++) {
            const range = tags[i + 1] ? `${tags[i + 1]}..${tags[i]}` : tags[i]
            const commits = parseCommits(await sh(`git -C ${REPO} log ${range} ${LOG_FORMAT}`))
            entries.push({
                version: tags[i].replace(/^v/, ''),
                tag: tags[i],
                date: await sh(`git -C ${REPO} log -1 --format=%aI ${tags[i]}`),
                groups: group(commits),
            })
        }
    }

    const body = `import type { UpdateLogEntry } from '@entities/update-log/update-log.type'\n\nexport const UPDATE_LOG: UpdateLogEntry[] = ${JSON.stringify(entries, null, 4)}\n`
    await Bun.write(OUT, body)
    console.log(`✓ wrote ${entries.length} version entr${entries.length === 1 ? 'y' : 'ies'} from ${REPO} → ${OUT}`)
}

await main()
