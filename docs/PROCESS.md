# PROCESS — stepper-web (소개/문서 사이트)

> stepper CLI/TUI AI 코딩 에이전트의 공식 소개·문서 웹사이트. Vercel 배포 → `https://stepper.gumyo.net`.
> 이 문서는 ai-process.md 컨벤션의 **현황 정본**이다. 매 스텝 상태를 체크하고 다음으로 넘어간다.

## 베이스 룰 (작업 전 항상 인지)

- 글로벌 컨벤션: `~/.claude/CLAUDE.md` + `~/.claude/convention/*` (common·frontend·fsd·query·comments·ai-process)
- 핵심 제약:
    - **Bun** 런타임(`bun`/`bunx`, npm/node 금지), Next.js App Router, TypeScript strict
    - **변형 FSD** (app→pages→widgets→features→entities→shared, 의존성 top→down), alias=레이어
    - 1파일 1컴포넌트(`FC<Props>`), arrow function만, named export(페이지만 default), **코드 주석 금지**(설명은 `docs/`)
    - Tailwind v4 + shadcn/ui(new-york) + CVA + `cn()`, **React Compiler 활성화** → `useCallback`/`useMemo` 금지
    - 디자인: BBlog DESIGN.md(모노크롬, OKLCH C=0) 토큰 그대로 이식. globals.css는 BBlog 참조.
- 참고 자료(로컬):
    - 메인 레포 `/Users/hyunseokbyun/stepper` (README·docs/USAGE.md·assets/icon — 콘텐츠/아이콘 정본)
    - 디자인 레퍼런스 `/Users/hyunseokbyun/BBlog` (ui/ 컴포넌트·globals.css·설정)

## 확보한 핵심 사실 (acknowledge)

- 버전: `v0.1.0` (Cargo.toml workspace.version). GitHub 릴리스 API는 **현재 404**(공개 릴리스 없음) → 폴백 필수.
- 릴리스 에셋(version-less, install 스크립트가 받는 것):
  `stepper-aarch64-apple-darwin.tar.gz` · `stepper-x86_64-unknown-linux-gnu.tar.gz` · `stepper-x86_64-pc-windows-msvc.zip`
- 10 crates: protocol·tui·cli·provider·providers·config·permission·tools·core·mcp (Rust 1.95, edition 2024, MIT)
- 5 providers: Anthropic · OpenAI · ollama-cloud · oMLX(로컬 MLX) · Codex(ChatGPT OAuth)
- 아이콘 SVG: `viewBox="0 0 300 300"`, `<rect 300x300 #000/>` + `<path d="M0 0 H200 V100 H100 V200 H0 Z" #fff/>`

## 결정 (Q0 — 사용자 확정)

- 콘텐츠 언어: **한/영/일 i18n, 영어 기본 + 폴백**
- 기본 테마: **system** (BBlog 동적 테마 컴포넌트 재사용)
- 버전 폴백: API 실패 시 **버전 미표시**
- **배포 타깃 변경: Vercel → GitHub Pages** (`Stepper-agent/homepage`, dev/prod 브랜치, Actions). 정적 export.
- 커밋: **co-author 트레일러 절대 금지**, author = Hyunseok Byun 단독.

## 작업 체크리스트

- [x] **1. 스캐폴드** — Bun + Next 16 + TS strict + Tailwind v4 + FSD + React Compiler + prettier + 디자인 토큰
- [x] **2. 레이아웃 / 디자인** — 헤더·푸터·Hero·What(파이프라인 다이어그램)·Features·Install·Quickstart·Docs, 브랜드 마크, 모노크롬
- [x] **3. 설치 섹션 + 스크립트 서빙** — install.sh/ps1 verbatim, OS 탭 원라이너 + 복사, OS별 다운로드 + env
- [x] **4. 릴리스 버전 fetch** — GitHub releases/latest + 폴백(미표시). (export에선 빌드타임 fetch)
- [x] **5. i18n 실번역** — ko/ja 실제 번역 완료(영어 base의 `as const` 제거 → 구조적 타입). 언어 전환 라이브 확인.
- [x] **6. Next 컴포넌트 전수조사** — `<a>`→`<Link>`(전수), `<img>` 없음(아이콘 inline SVG), viewport export, robots.ts, sitemap.ts, not-found, /docs
- [x] **7. 스크롤 UX** — 네이티브 스크롤바 숨김(스크롤 유지), install 원라이너 flex-col, BBlog VirtualScroll 커스텀 스크롤 이식
- [x] **8. 모션 / 글로우** — motion@12 + Reveal(스크롤 페이드업)·MotionConfig(reduced-motion), tiny-razer식 커서 추적 글로우(모노크롬, spring)
- [x] **9. 반응형 / a11y** — 모바일 반응형, focus-visible 3px ring, 스킵링크, `break-keep`(한글 단어 안 쪼개짐), 다크모드
- [x] **10. GitHub Pages 배포** — `output: export`, public/index.html 로케일 리다이렉트, .nojekyll, CNAME, deploy.yml(prod→Pages)·ci.yml(dev), dev/prod 푸시
- [x] **11. 온사이트 docs(추가)** — USAGE.md/ARCHITECTURE.md 워크플로 분석 → 10개 `/docs/<slug>` 정적 페이지(사이드바·Shiki vitesse 하이라이팅·복사)
- [x] **12. 브랜드(추가)** — BrandMark 테마 적응형(border·round 제거), 헤더 GitHub 아이콘 ghost(무border)

## 라운드 2 (스텝별 commit+push dev, 3단계 후 prod)

- [x] **R2-1. 헤더 Docs 링크** — header·footer Docs → `/[lang]/docs`. (라이브 `href="/en/docs/"` 확인)
- [x] **R2-2. 업데이트 로그** — `bun run gen:update-log`(STEPPER_REPO git tag/commit·Cargo.toml → conventional-commit 그룹화) → `entities/update-log/*` → `/[lang]/docs/update-log`(사이드바 포함, 커밋 해시 링크). tsconfig에서 `scripts` 제외(Bun 전용).
- [x] **R2-3. 그리드 글로우** — `whereismycursor`(docs/index.html) 효과 포팅: 정적 마스크 그리드(`.cursor-grid`) + 커서 추적 스포트라이트(`.cursor-spotlight`, CSS `--mx/--my` + 120ms). 글로우 라이트 0.05→0.09·다크 0.07→0.08 강화. motion 제거.
- 배포: dev에 스텝별 커밋·푸시 후 prod fast-forward → 푸시 → Pages 배포 성공. 라이브 검증 완료.

## 상세

### 1. 스캐폴드

- `bun init` 대신 수동 구성(또는 create-next-app 후 정리). 의존성 최신 버전.
- FSD: `@app @widgets @features @entities @shared` alias = tsconfig paths. (Next App Router라 `pages` 레이어 생략)
- shadcn 컴포넌트는 BBlog ui/ 패턴을 그대로 차용(button·badge 등 필요한 것만).
- globals.css: DESIGN.md §16 토큰 + BBlog globals.css 구조 이식. `next-themes` 사용 시 `attribute='class'` + `.dark` variant.

### 2. 레이아웃 / 디자인

- 브랜드 마크 = 흑백 2단 계단 SVG(`shared/ui`). favicon/아이콘은 메인 repo `assets/icon/`에서 복사.
- 섹션: Hero(원라이너·복사·버전배지·GitHub) → What it is(다이어그램) → Features(카드 그리드) → Install(OS별) → Quickstart → Footer.
- 위젯(비즈니스 로직/데이터 fetch 포함)은 `widgets`, 순수 컴포넌트는 `features`, 데이터는 `entities`.

### 3. 설치 스크립트 서빙

- `public/install-files/`에 부록 A·B 스크립트 **그대로** 배치.
- `next.config`/`vercel.json` headers로 `/install-files/*.sh` → `text/x-sh`, `*.ps1` → `text/plain` (curl|bash 안전).
- 검증: 빌드 후 해당 경로가 평문 응답하는지 확인.

### 4. 릴리스 버전 fetch

- `entities/release/*` (api·type). server fetch + `next: { revalidate: 3600 }`.
- `https://api.github.com/repos/Stepper-agent/stepper/releases/latest` → `tag_name`·`assets[].name/browser_download_url`.
- 404/실패 → 폴백(버전 미표시 또는 하드코딩 — Q0 결정). 페이지는 안 깨짐.

### 5. 반응형 / a11y

- 모바일 우선, focus-visible 3px ring, alt 텍스트, 시맨틱 HTML, 대비. 다크모드 토글.

### 6. 빌드 / 배포

- `bun run build` green. `vercel.json` 또는 `next.config` headers. git init(작업 브랜치). 배포는 사용자 영역(Vercel git 연동) — 가이드만 docs/에.

## 로그

- 2026-06-13: 환경 파악 완료(빈 폴더·bun 1.3.11·메인 레포 로컬 존재·릴리스 API 404·BBlog 참조 가능). 핵심 사실 수집·PROCESS.md 작성. → Q0(모호점) 질문 단계.
- 2026-06-13: 전 항목 완료 + 라이브 배포. 세션 중 추가 요청 반영: 한/영/일 i18n(영어 기본·폴백), Next 전수조사(`<a>`→`<Link>`), 스크롤바 숨김 + VirtualScroll, motion + 커서 글로우, BrandMark 개선(border·round 제거·테마 적응형), GitHub 아이콘 무border, 온사이트 docs 10페이지(Shiki 하이라이팅). **배포 타깃 Vercel→GitHub Pages 전환**: `github-pages` 환경에 prod 브랜치 정책 추가 후 배포 성공. 라이브 검증: `https://stepper.gumyo.net/`(브라우저 언어 감지 리다이렉트)·`/install-files/install.sh`(200, application/x-sh)·`/en/docs/*`·robots·sitemap 모두 200. 커밋 author=Hyunseok Byun 단독, co-author 트레일러 없음.
