#Requires -Version 5
# stepper installer (Windows) — download stepper.exe and add it to your PATH.
#   irm https://stepper.gumyo.net/install-files/install.ps1 | iex
$ErrorActionPreference = 'Stop'

$Repo = 'Stepper-agent/stepper'
$BaseUrl = if ($env:STEPPER_DOWNLOAD_BASE_URL) { $env:STEPPER_DOWNLOAD_BASE_URL } else { "https://github.com/$Repo/releases/latest/download" }
$InstallDir = if ($env:STEPPER_INSTALL_DIR) { $env:STEPPER_INSTALL_DIR } else { Join-Path $env:USERPROFILE '.local\bin' }

$nativeArch = if ($env:PROCESSOR_ARCHITEW6432) { $env:PROCESSOR_ARCHITEW6432 } else { $env:PROCESSOR_ARCHITECTURE }
if ($nativeArch -eq 'ARM64') { throw 'Windows arm64 is not built yet; build from source.' }
$asset = 'stepper-x86_64-pc-windows-msvc.zip'

$tmp = Join-Path $env:TEMP ('stepper-' + [guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Force -Path $tmp | Out-Null
try {
    Write-Host "==> downloading $asset"
    Invoke-WebRequest -Uri "$BaseUrl/$asset" -OutFile (Join-Path $tmp $asset)
    Write-Host '==> unpacking'
    Expand-Archive -Path (Join-Path $tmp $asset) -DestinationPath $tmp -Force
    $bin = Get-ChildItem -Path $tmp -Recurse -Filter 'stepper.exe' | Select-Object -First 1
    if (-not $bin) { throw "could not find stepper.exe inside $asset" }
    New-Item -ItemType Directory -Force -Path $InstallDir | Out-Null
    $exe = Join-Path $InstallDir 'stepper.exe'
    Copy-Item $bin.FullName $exe -Force
    Write-Host "==> installed $exe"
    & $exe --version | Out-Null
    if ($LASTEXITCODE -ne 0) { throw "the installed stepper.exe failed to run (exit $LASTEXITCODE)" }
    $userPath = [Environment]::GetEnvironmentVariable('Path', 'User')
    $entries = @($userPath -split ';' | ForEach-Object { $_.Trim() } | Where-Object { $_ })
    if ($entries -notcontains $InstallDir) {
        $newPath = if ([string]::IsNullOrEmpty($userPath)) { $InstallDir } else { "$userPath;$InstallDir" }
        [Environment]::SetEnvironmentVariable('Path', $newPath, 'User')
        Write-Host "==> added $InstallDir to your User PATH"
    }
    Write-Host ''
    Write-Host '  stepper is installed. Reopen PowerShell, then run `stepper`.'
}
finally {
    Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
}
