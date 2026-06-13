import { STEPPER, downloadUrlForArchive } from '@shared/constants/stepper'
import type { GithubRelease, LatestRelease } from '@entities/release/release.type'

const REVALIDATE_SECONDS = 3600

export const getLatestRelease = async (): Promise<LatestRelease | null> => {
    try {
        const response = await fetch(STEPPER.releasesLatestApi, {
            headers: {
                'Accept': 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28',
                'User-Agent': 'stepper-web',
            },
            next: { revalidate: REVALIDATE_SECONDS },
        })
        if (!response.ok) return null
        const data = (await response.json()) as GithubRelease
        if (!data?.tag_name) return null
        return {
            tagName: data.tag_name,
            htmlUrl: data.html_url,
            publishedAt: data.published_at,
            assets: (data.assets ?? []).map((asset) => ({ name: asset.name, url: asset.browser_download_url, size: asset.size })),
        }
    } catch {
        return null
    }
}

export const resolveAssetUrl = (release: LatestRelease | null, archive: string) => {
    const matched = release?.assets.find((asset) => asset.name === archive)
    return matched?.url ?? downloadUrlForArchive(archive)
}
