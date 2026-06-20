import type { Dictionary } from '@shared/i18n/dictionaries/en'

export const ko: Dictionary = {
    meta: {
        title: 'stepper — 레이어형 CLI/TUI AI 코딩 에이전트',
        description:
            'stepper는 레이어형 CLI/TUI AI 코딩 에이전트입니다. 오케스트레이터가 각자의 provider·모델과 새 컨텍스트 윈도우를 가진 sub-agent 레이어 파이프라인에 작업을 위임합니다.',
    },
    nav: {
        features: '기능',
        install: '설치',
        quickstart: '빠른 시작',
        docs: '문서',
        github: 'GitHub',
        themeToggle: '테마 전환',
        languageLabel: '언어',
        skipToContent: '본문으로 건너뛰기',
    },
    hero: {
        badge: '레이어형 AI 코딩 에이전트',
        title: '하나의 에이전트, 여러 지성의 파이프라인.',
        subtitle:
            'stepper는 레이어형 CLI/TUI 코딩 에이전트입니다. 오케스트레이터가 작업을 순서가 정해진 sub-agent 레이어 파이프라인으로 위임합니다 — 각 레이어는 자신만의 provider·모델과 새 컨텍스트 윈도우를 가집니다.',
        latestVersion: '최신',
        unreleased: '출시 전',
        copy: '복사',
        copied: '복사됨',
        viewOnGithub: 'GitHub에서 보기',
        readDocs: '문서 보기',
        osTab: {
            unix: 'macOS / Linux',
            windows: 'Windows',
        },
        installNote: 'OS와 아키텍처를 감지해 바이너리를 PATH에 설치합니다.',
    },
    what: {
        heading: '동작 방식',
        lead: '오케스트레이터가 base 레이어입니다. setting.json의 step을 순서대로 실행하며, 각 레이어의 자유 텍스트 결과를 다음 레이어로 넘깁니다. 모든 레이어는 자신만의 모델·도구·시스템 프롬프트와 새 컨텍스트 윈도우를 가진 독립 sub-agent입니다.',
        orchestrator: '오케스트레이터',
        orchestratorNote: 'base 레이어 · setting.json 읽기 · 파이프라인 라우팅',
        handoff: '자유 텍스트 전달',
        layerModel: '모델',
        layerContext: '새 컨텍스트',
        parallelLabel: 'parallel: true',
        parallelNote: '레이어는 fan-out 할 수 있습니다 — 서브태스크마다 워커 하나가 각자 새 컨텍스트 윈도우로 실행되고, 다음 step 전에 합쳐집니다.',
        steps: [
            { name: 'plan', model: 'anthropic/claude-sonnet-4', note: '저장소를 읽고 접근 방식을 설계합니다' },
            { name: 'implement', model: 'omlx/deepseek-coder', note: '도구로 파일을 수정합니다' },
            { name: 'test', model: 'ollama-cloud/qwen3-coder', note: '실행하고 검증합니다' },
        ],
    },
    features: {
        heading: '기능',
        lead: '모든 것이 레이어로 나뉘고, 범위가 한정되며, 기본은 fail-closed입니다.',
        items: [
            {
                title: '레이어 파이프라인',
                description:
                    '각 step은 자신만의 모델·도구·시스템 프롬프트를 가진 독립 sub-agent입니다. 기본은 순차 실행이며, 레이어에 parallel: true를 지정하면 서브태스크마다 워커 하나로 fan-out 합니다. #agent나 task 도구로 이름이 지정된 sub-agent를 인라인으로 디스패치할 수 있습니다.',
            },
            {
                title: '멀티 프로바이더',
                description:
                    'Anthropic, OpenAI, ollama-cloud, oMLX(로컬 Apple Silicon MLX), Codex(ChatGPT OAuth). /connect로 models.dev 카탈로그에서 아무 provider나 검색·추가할 수 있고(지원하지 않는 항목은 비활성으로 표시되어 키가 잘못 라우팅되지 않습니다), 모든 레이어가 자신의 provider와 모델을 고르며 모델별 컨텍스트·가격 재정의도 선택적으로 적용할 수 있습니다.',
            },
            {
                title: '편집 & 코드 인텔리전스',
                description:
                    '전체 파일 도구에 더해 다중 파일 구조화 편집을 위한 apply_patch, 기본 제공 포매터 카탈로그를 사용하는 선택형 편집 시 자동 포맷, 그리고 설치된 language server에서 나온 LSP 진단을 매 편집 후 에이전트에게 다시 전달합니다.',
            },
            {
                title: '권한 시스템',
                description:
                    '모드(auto / plan / accept-edits)에 더해 allow / ask / deny 규칙과 영속 approvals. 헤드리스 -p는 기본 deny — fail-closed입니다.',
            },
            {
                title: 'TUI',
                description:
                    'ratatui 터미널 UI: 라이브 마크다운, 상태 푸터(활성 레이어 · 모델 · 토큰 · ctx% 게이지 · 비용), diff 승인 오버레이, 13개 기본 팔레트를 갖춘 /theme 편집기, 입력으로 거르는 /models 피커, /connect, /effort 추론 강도 조절, /undo · /redo, 그리고 선택형 터미널 벨 알림. 또는 -p, --agent, --file, --format json으로 헤드리스 실행.',
            },
            {
                title: '세션 & 제어',
                description:
                    '세션 resume, list / delete 및 --fork, checkpoint + /rewind, /undo · /redo, 자동 컨텍스트 압축, hooks, progressive disclosure 방식의 skills, 슬래시 커맨드, MCP 서버(stdio/http, 서버별 설정 + OAuth), 그리고 stepper stats를 통한 세션 간 사용량 통계.',
            },
            {
                title: '설정 & 엔터프라이즈',
                description:
                    '{env:} / {file:} 치환과 STEPPER_CONFIG 재정의를 지원하는 JSONC setting.json, 기업 네트워크를 위한 명시적 HTTP(S) 프록시와 사설 CA 지원, 그리고 원격 MCP 서버를 위한 OAuth.',
            },
        ],
    },
    install: {
        heading: '설치',
        lead: '미리 빌드된 바이너리를 받으세요 — Rust 툴체인이 필요 없습니다.',
        oneLinerLabel: '원라이너',
        downloadLabel: '직접 다운로드',
        os: {
            macos: { name: 'macOS', sub: 'Apple Silicon' },
            linux: { name: 'Linux', sub: 'x86_64' },
            windows: { name: 'Windows', sub: 'x86_64' },
        },
        envHeading: '환경 변수 오버라이드',
        env: [
            { name: 'STEPPER_INSTALL_DIR', value: '~/.local/bin', meaning: '바이너리가 설치되는 위치.' },
            { name: 'STEPPER_DOWNLOAD_BASE_URL', value: 'releases/latest/download', meaning: '아카이브가 호스팅되는 위치.' },
        ],
        sourceHeading: '소스에서 빌드',
        sourceNote: 'Rust 1.95 툴체인이 있는 컨트리뷰터는 직접 빌드할 수 있습니다:',
        sourceCommand: 'cargo install --path crates/stepper-cli',
    },
    quickstart: {
        heading: '빠른 시작',
        lead: '프로젝트에서 stepper를 실행하고 가이드 설정을 따르세요.',
        steps: [
            { title: '실행하기', body: '.stepper/ 가 없는 프로젝트에서 stepper는 짧은 가이드 설정을 실행합니다.', command: 'stepper' },
            {
                title: '모델 & 모드 선택',
                body: '기본 모델과 권한 모드를 고릅니다. stepper가 .stepper/setting.json을 작성합니다.',
                command: 'stepper config --validate',
            },
            {
                title: '헤드리스로',
                body: '원샷 출력을 stdout으로 스트리밍하고 프로젝트 내 작업을 자동 승인합니다.',
                command: 'stepper -p "add a README badge" --mode auto',
            },
        ],
        settingTitle: '.stepper/setting.json',
        settingNote: '레이어 파이프라인, 기본 모델, provider별 설정 — camelCase이며 사용자 레벨 base 위에 deep-merge 됩니다.',
    },
    docs: {
        heading: '문서',
        lead: '전체 사용법·설정·providers·레이어·권한·CI를 여기에서 바로 읽어보세요.',
        overview: '개요',
        updateLog: '업데이트 로그',
        updateLogLead: '저장소에서 생성된 stepper의 버전별 변경 사항입니다.',
        usageCard: { title: 'USAGE.md', body: '설치, CLI 레퍼런스, setting.json, providers, 레이어, 권한, MCP, CI.' },
        architectureCard: { title: 'ARCHITECTURE.md', body: '11개 크레이트 워크스페이스 맵, 데이터 흐름, 격리 불변식.' },
        cta: '전체 문서 보기',
    },
    footer: {
        tagline: '레이어형 CLI/TUI AI 코딩 에이전트.',
        builtWith: 'Rust로 제작. macOS · Linux · Windows.',
        product: '제품',
        resources: '리소스',
        license: '라이선스',
        version: '버전',
        rights: 'MIT 라이선스로 배포됩니다.',
    },
    notFound: {
        title: '찾을 수 없음',
        body: '해당 페이지가 존재하지 않습니다.',
        home: '홈으로',
    },
}
