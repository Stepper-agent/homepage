export const STEPPER = {
    repo: 'Stepper-agent/stepper',
    githubUrl: 'https://github.com/Stepper-agent/stepper',
    siteUrl: 'https://stepper.gumyo.net',
    releasesLatestApi: 'https://api.github.com/repos/Stepper-agent/stepper/releases/latest',
    releasesLatestDownload: 'https://github.com/Stepper-agent/stepper/releases/latest/download',
    license: 'MIT',
    cratesCount: 10,
} as const

export const INSTALL_COMMAND = {
    unix: 'curl -fsSL https://stepper.gumyo.net/install-files/install.sh | bash',
    windows: 'irm https://stepper.gumyo.net/install-files/install.ps1 | iex',
} as const

export type OsKey = 'macos' | 'linux' | 'windows'

export type OsTarget = {
    key: OsKey
    target: string
    archive: string
    archiveExt: 'tar.gz' | 'zip'
}

export const OS_TARGETS: readonly OsTarget[] = [
    { key: 'macos', target: 'aarch64-apple-darwin', archive: 'stepper-aarch64-apple-darwin.tar.gz', archiveExt: 'tar.gz' },
    { key: 'linux', target: 'x86_64-unknown-linux-gnu', archive: 'stepper-x86_64-unknown-linux-gnu.tar.gz', archiveExt: 'tar.gz' },
    { key: 'windows', target: 'x86_64-pc-windows-msvc', archive: 'stepper-x86_64-pc-windows-msvc.zip', archiveExt: 'zip' },
] as const

export const downloadUrlForArchive = (archive: string) => `${STEPPER.releasesLatestDownload}/${archive}`
