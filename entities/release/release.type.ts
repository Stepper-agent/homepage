export type GithubReleaseAsset = {
    name: string
    browser_download_url: string
    size: number
}

export type GithubRelease = {
    tag_name: string
    html_url: string
    published_at: string
    assets: GithubReleaseAsset[]
}

export type ReleaseAsset = {
    name: string
    url: string
    size: number
}

export type LatestRelease = {
    tagName: string
    htmlUrl: string
    publishedAt: string
    assets: ReleaseAsset[]
}
