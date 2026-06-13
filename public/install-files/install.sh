#!/usr/bin/env bash
# stepper installer — download a prebuilt binary and put `stepper` on your PATH.
#   curl -fsSL https://stepper.gumyo.net/install-files/install.sh | bash
set -euo pipefail

REPO="Stepper-agent/stepper"
BASE_URL="${STEPPER_DOWNLOAD_BASE_URL:-https://github.com/${REPO}/releases/latest/download}"
INSTALL_DIR="${STEPPER_INSTALL_DIR:-$HOME/.local/bin}"

tmpdir=""
cleanup() { [ -n "$tmpdir" ] && rm -rf "$tmpdir"; }

main() {
    need_cmd uname; need_cmd mktemp; need_cmd tar
    local target asset
    target="$(detect_target)"
    asset="stepper-${target}.tar.gz"
    tmpdir="$(mktemp -d)"
    say "downloading ${asset}"
    download "${BASE_URL}/${asset}" "${tmpdir}/${asset}"
    say "unpacking"
    tar -xzf "${tmpdir}/${asset}" -C "$tmpdir"
    local bin
    bin="$(find "$tmpdir" -type f -name stepper | head -n1)"
    [ -n "$bin" ] || err "could not find the 'stepper' binary inside ${asset}"
    mkdir -p "$INSTALL_DIR"; cp "$bin" "$INSTALL_DIR/stepper"; chmod 0755 "$INSTALL_DIR/stepper"
    say "installed ${INSTALL_DIR}/stepper"
    ensure_on_path
    "$INSTALL_DIR/stepper" --version || true
    printf '\n  stepper is installed. Run `stepper` in a project to get started.\n'
}

detect_target() {
    local os arch target
    case "$(uname -s)" in
        Darwin) os="apple-darwin" ;;
        Linux) os="unknown-linux-gnu" ;;
        *) err "unsupported OS: $(uname -s) (on Windows use install.ps1)" ;;
    esac
    case "$(uname -m)" in
        arm64 | aarch64) arch="aarch64" ;;
        x86_64 | amd64) arch="x86_64" ;;
        *) err "unsupported architecture: $(uname -m)" ;;
    esac
    target="${arch}-${os}"
    case "$target" in
        aarch64-apple-darwin | x86_64-unknown-linux-gnu) printf '%s' "$target" ;;
        x86_64-apple-darwin) err "Intel macOS is not built; use an Apple Silicon Mac or build from source." ;;
        aarch64-unknown-linux-gnu) err "linux-arm64 is not built yet; build from source." ;;
        *) err "no prebuilt binary for ${target}" ;;
    esac
}

download() {
    local url="$1" out="$2"
    case "$url" in https://*) ;; *) err "refusing to download over a non-https URL: $url" ;; esac
    if command -v curl >/dev/null 2>&1; then
        curl -fsSL --proto '=https' --tlsv1.2 "$url" -o "$out"
    elif command -v wget >/dev/null 2>&1; then
        wget -q --https-only "$url" -O "$out"
    else
        err "need curl or wget to download"
    fi
}

ensure_on_path() {
    case ":$PATH:" in *":$INSTALL_DIR:"*) return 0 ;; esac
    local shell_name rc line
    shell_name="$(basename "${SHELL:-bash}")"
    case "$shell_name" in
        fish) rc="$HOME/.config/fish/config.fish"; line="fish_add_path $INSTALL_DIR" ;;
        zsh)  rc="${ZDOTDIR:-$HOME}/.zshrc"; line="export PATH=\"$INSTALL_DIR:\$PATH\"" ;;
        *)    rc="$HOME/.bashrc"; line="export PATH=\"$INSTALL_DIR:\$PATH\"" ;;
    esac
    mkdir -p "$(dirname "$rc")"
    if ! { [ -f "$rc" ] && grep -qF -- "$line" "$rc"; }; then
        printf '\n# added by stepper installer\n%s\n' "$line" >>"$rc"
        say "added ${INSTALL_DIR} to PATH in ${rc}"
    fi
    printf '  open a new terminal, or run: source %s\n' "$rc"
}

need_cmd() { command -v "$1" >/dev/null 2>&1 || err "missing required command: $1"; }
say() { printf '==> %s\n' "$1"; }
err() { printf 'error: %s\n' "$1" >&2; exit 1; }

trap cleanup EXIT
main "$@"
