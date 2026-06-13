# stepper-web

The official intro / docs site for [**stepper**](https://github.com/Stepper-agent/stepper) — a layered CLI/TUI AI coding agent.

Live at **[stepper.gumyo.net](https://stepper.gumyo.net)**.

## Stack

- **Bun** + **Next.js 16** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** + shadcn/ui tokens + **React Compiler**
- **motion** (animations), **next-themes** (system / light / dark)
- Variant **FSD** layout: `app → widgets → features → entities → shared`
- i18n: English (default + fallback), Korean, Japanese — `/[lang]` static routes
- **Static export** (`output: 'export'`) → **GitHub Pages**

## Develop

```sh
bun install
bun run dev      # http://localhost:3000 → redirects to /en
bun run build    # static export to ./out
bun run format   # prettier
```

## Deploy (GitHub Pages)

Hosted from this repository (`Stepper-agent/homepage`) on GitHub Pages with the custom domain `stepper.gumyo.net`.

- **Branches**: work on `dev`, release from `prod`.
    - Push / PR to `dev` → `.github/workflows/ci.yml` builds the static export (no deploy).
    - Push to `prod` (or daily cron / manual dispatch) → `.github/workflows/deploy.yml` builds and publishes to Pages.
- **One-time setup** (repo → Settings):
    1. **Pages → Build and deployment → Source: GitHub Actions**.
    2. **Pages → Custom domain: `stepper.gumyo.net`** (the `public/CNAME` file is included in the build output).
    3. DNS: a `CNAME` record for `stepper` → `stepper-agent.github.io`.
- The daily `schedule` rebuild keeps the "latest release" badge current (a static export has no ISR).

## What it serves

- `/{en,ko,ja}` — the localized landing page.
- `/install-files/install.sh` · `/install-files/install.ps1` — the install one-liners (`curl … | bash`, `irm … | iex`).
- `/robots.txt`, `/sitemap.xml`, `/404.html`, and a root `/` that redirects to the visitor's language.

Content notes and decisions live in [`docs/`](./docs).
