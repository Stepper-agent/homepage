import type { DocPage } from '@entities/docs/docs.type'

export const DOC_PAGES_KO: DocPage[] = [
    {
        slug: 'installation',
        title: '설치',
        description: '사전 빌드된 바이너리로 stepper를 설치하거나, 소스에서 빌드하고, 가이드 설정 또는 환경 변수 재정의를 통해 첫 실행을 구성하세요.',
        blocks: [
            {
                kind: 'paragraph',
                text: '사전 빌드된 바이너리를 사용하거나, 개발용으로 소스에서 빌드하거나, 설치 디렉터리와 다운로드 위치를 직접 지정해 stepper를 시작하세요. 첫 실행 시 제공되는 가이드 설정은 기본 모델과 권한 모드를 구성하는 데 도움을 줍니다.',
            },
            {
                kind: 'heading',
                text: '사전 빌드된 바이너리',
            },
            {
                kind: 'paragraph',
                text: 'Rust 툴체인이 없는 최종 사용자가 stepper를 가장 빠르게 설치하는 방법입니다. 설치 프로그램은 OS와 아키텍처를 감지하여 적절한 아카이브를 다운로드하고, stepper를 PATH에 추가합니다.',
            },
            {
                kind: 'subheading',
                text: '설치 명령어',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: '# macOS / Linux\ncurl -fsSL https://stepper.gumyo.net/install-files/install.sh | bash\n# Windows (PowerShell)\nirm https://stepper.gumyo.net/install-files/install.ps1 | iex',
            },
            {
                kind: 'paragraph',
                text: '설치 프로그램은 `stepper` 바이너리를 `~/.local/bin`(Windows에서는 `%USERPROFILE%\\.local\\bin`)에 배치하고, 해당 디렉터리를 PATH에 추가하도록 셸 설정을 업데이트합니다.',
            },
            {
                kind: 'subheading',
                text: '환경 변수',
            },
            {
                kind: 'paragraph',
                text: '다음 환경 변수로 다운로드 위치와 설치 디렉터리를 사용자 지정할 수 있습니다:',
            },
            {
                kind: 'table',
                head: ['환경 변수', '기본값', '용도'],
                rows: [
                    ['`STEPPER_DOWNLOAD_BASE_URL`', '`https://stepper.gumyo.net/install-files`', '릴리스 아카이브가 호스팅되는 위치'],
                    ['`STEPPER_INSTALL_DIR`', '`~/.local/bin`', '설치 디렉터리'],
                ],
            },
            {
                kind: 'subheading',
                text: '릴리스 아카이브',
            },
            {
                kind: 'paragraph',
                text: '설치 스크립트는 시스템에 맞는 적절한 아카이브를 다운로드합니다. 다음 아카이브들은 모든 `prod` 릴리스에서 버전이 명시된 형태와 버전이 없는 형태로 모두 게시됩니다:',
            },
            {
                kind: 'list',
                items: [
                    '`stepper-aarch64-apple-darwin.tar.gz` — macOS (Apple Silicon)',
                    '`stepper-x86_64-unknown-linux-gnu.tar.gz` — Linux x86_64',
                    '`stepper-x86_64-pc-windows-msvc.zip` — Windows x86_64',
                ],
            },
            {
                kind: 'note',
                text: '설치 스크립트와 바이너리는 이 저장소와는 별도의 프로젝트에 호스팅됩니다. `STEPPER_DOWNLOAD_BASE_URL`을 다른 위치로 지정하여 직접 호스팅하는 아카이브에서 다운로드할 수 있습니다.',
            },
            {
                kind: 'heading',
                text: '소스에서 빌드',
            },
            {
                kind: 'paragraph',
                text: '기여자와 개발자는 Rust 1.95 stable(edition 2024)을 사용해 stepper를 소스에서 빌드합니다.',
            },
            {
                kind: 'subheading',
                text: '빌드 명령어',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'scripts/install.sh                                  # cargo build + install to ~/.local/bin\nSTEPPER_INSTALL_DIR=/usr/local/bin sudo -E scripts/install.sh\ncargo install --path crates/stepper-cli             # installs `stepper`\ncargo build --release --bin stepper                 # binary at target/release/stepper\ncargo run                                           # run from source (interactive TUI)',
            },
            {
                kind: 'subheading',
                text: '품질 게이트',
            },
            {
                kind: 'paragraph',
                text: '빌드를 검증하려면 다음 검사를 로컬에서 실행하세요. CI에서도 동일한 게이트가 실행됩니다:',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'cargo build --workspace\ncargo clippy --workspace --all-targets -- -D warnings\ncargo test --workspace            # live tests are #[ignore]/env-gated, so skipped',
            },
            {
                kind: 'heading',
                text: '첫 실행',
            },
            {
                kind: 'paragraph',
                text: '`.stepper/` 디렉터리가 없는 프로젝트에서 stepper를 실행하면, 시작을 돕기 위해 짧은 가이드 설정이 진행됩니다. 이 대화형 과정에서 구성 파일이 생성됩니다.',
            },
            {
                kind: 'subheading',
                text: '가이드 설정',
            },
            {
                kind: 'paragraph',
                text: '첫 실행 시 stepper는 다음을 묻습니다:',
            },
            {
                kind: 'list',
                items: ['기본 모델 선택', '권한 모드 선택'],
            },
            {
                kind: 'paragraph',
                text: '그런 다음 설정 과정은 `.stepper/setting.json`과 `.stepper/stepper.md`를 작성하여 프로젝트를 구성합니다.',
            },
            {
                kind: 'subheading',
                text: '설정 건너뛰기 또는 사용자 지정',
            },
            {
                kind: 'paragraph',
                text: '`--no-init` 플래그나 `STEPPER_NO_INIT=1` 환경 변수로 대화형 가이드 설정을 건너뛸 수 있습니다. `stepper init`을 실행하면 비대화형으로 구성 파일을 스캐폴딩합니다:',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: '# Skip interactive setup\nstepper --no-init\n\n# Or set the environment variable\nSTEPPER_NO_INIT=1 stepper\n\n# Scaffold non-interactively\nstepper init',
            },
            {
                kind: 'paragraph',
                text: '헤드리스 모드(`-p` 플래그 사용)는 프롬프트를 완전히 건너뛰고 기본값으로 실행하며, 구성 파일을 생성하지 않습니다.',
            },
        ],
    },
    {
        slug: 'quickstart',
        title: '퀵스타트 & CLI',
        description: 'stepper를 시작하고 CLI 명령어, 플래그, 모드를 참조하세요.',
        blocks: [
            {
                kind: 'paragraph',
                text: '단 몇 분 만에 stepper를 실행해 보세요. CLI는 에이전트를 사용하는 세 가지 방법을 제공합니다. 대화형 TUI, 헤드리스 원샷 프롬프트, 또는 이전 세션 재개입니다. 각 방식마다 고유한 명령어와 플래그가 있습니다.',
            },
            {
                kind: 'heading',
                text: '빠른 예시',
            },
            {
                kind: 'paragraph',
                text: '다음 예시들은 stepper를 호출하는 가장 일반적인 방법을 보여줍니다.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: '# Interactive TUI (needs a real terminal + an API key in the env):\nSTEPPER_ANTHROPIC_API_KEY=sk-... stepper --model anthropic/claude-sonnet-4\n\n# Headless one-shot (streams assistant text to stdout, auto-approves actions):\nstepper -p "add a README badge" --model ollama-cloud/qwen3-coder --mode auto\n\n# Resume a previous session:\nstepper --resume <session-id>',
            },
            {
                kind: 'paragraph',
                text: '프로젝트에 `.stepper/` 디렉터리가 있으면 인자 없이 `stepper`를 실행할 수 있으며, 이때 설정된 파이프라인, 모델, 모드를 사용합니다.',
            },
            {
                kind: 'heading',
                text: 'CLI 레퍼런스',
            },
            {
                kind: 'paragraph',
                text: '전체 사용법 한 줄과 사용 가능한 모든 명령어 및 전역 옵션입니다.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper [OPTIONS] [COMMAND]',
            },
            {
                kind: 'subheading',
                text: '명령어',
            },
            {
                kind: 'table',
                head: ['Command', '동작'],
                rows: [
                    ['run', '대화형 TUI를 실행합니다(서브커맨드가 없을 때의 기본값).'],
                    ['auth login --codex', 'Codex 백엔드를 위해 ChatGPT에 로그인합니다(OAuth/PKCE).'],
                    ['auth set-key <provider>', '프로바이더 API 키를 OS 키링에 저장합니다(stdin에서 읽음).'],
                    ['auth delete-key <provider>', 'OS 키링에서 프로바이더 키를 제거합니다.'],
                    ['config --schema', '`setting.json`의 JSON 스키마를 출력합니다.'],
                    ['config --validate', '프로젝트의 `setting.json`을 검증합니다.'],
                    ['doctor', '통합 진단 실행 — 설정·provider 키·모델 resolve·MCP·카탈로그·최신 릴리스를 한 번에 점검.'],
                    ['session rename <id> <name>', '저장된 세션 이름을 커맨드라인에서 변경합니다.'],
                    ['init', '`.stepper/`를 스캐폴딩합니다(스택 감지 → `stepper.md` + `setting.json`).'],
                ],
            },
            {
                kind: 'subheading',
                text: '전역 옵션',
            },
            {
                kind: 'table',
                head: ['Flag', '의미'],
                rows: [
                    ['--model <provider/model-id>', '기본 모델, 예: `anthropic/claude-sonnet-4`, `ollama-cloud/qwen3-coder`, `omlx/deepseek-coder`.'],
                    ['--mode <auto|plan|accept-edits>', '권한 모드(우선순위: 플래그 > `setting.json`의 `mode` > `accept-edits`).'],
                    ['-p, --print <prompt>', '헤드리스 원샷: 프롬프트를 실행하고 stdout으로 스트리밍하며 자동 승인합니다.'],
                    ['--resume <session-id>', '저장된 세션을 이어갑니다(이전 컨텍스트를 시드로 사용).'],
                    ['--fallback-model <a,b,c>', '주 모델 실패 시 순서대로 시도할 쉼표 구분 모델 체인(CLI가 `setting.json`보다 우선).'],
                    ['--output-schema <inline|file>', '헤드리스: 최종 응답을 JSON Schema에 맞게 강제(`--output-schema-retries`, 기본 2).'],
                    ['--cwd <dir>', '다른 디렉터리를 대상으로 실행합니다.'],
                ],
            },
            {
                kind: 'heading',
                text: '시작 프롬프트 & stdin',
            },
            {
                kind: 'paragraph',
                text: 'positional 프롬프트를 넘기면 그 프롬프트로 시드된 대화형 TUI가 바로 열립니다. 프롬프트를 stdin으로 파이프할 수도 있습니다 — `cat task.md | stepper`(또는 헤드리스 원샷은 `| stepper -p`). `-p`는 값이 없어도 stdin을 프롬프트로 읽습니다.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper "fix the failing test"\ncat task.md | stepper\ncat task.md | stepper -p',
            },
        ],
    },
    {
        slug: 'configuration',
        title: '구성',
        description:
            'camelCase JSON으로 stepper를 구성합니다. 사용자 레벨의 기본 설정에 프로젝트 설정이 병합되며, 프로바이더, 레이어, 권한, MCP 서버를 다룹니다.',
        blocks: [
            {
                kind: 'paragraph',
                text: '`.stepper/setting.json` 파일은 stepper의 동작과 기본값을 구성합니다. 설정은 camelCase를 사용하며 상위 호환성을 보장합니다(알 수 없는 키는 무시됨). 사용자 레벨의 `~/.stepper/setting.json`이 기본 구성 역할을 하며, 그 위에 프로젝트 구성이 깊은 병합(deep-merge)됩니다. 이때 객체는 병합되고 배열은 대체됩니다.',
            },
            {
                kind: 'subheading',
                text: '구성 스키마',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '{\n  "mode": "auto",                         // auto | plan | accept-edits (CLI --mode wins)\n  "defaultModel": "anthropic/claude-sonnet-4",\n  "step": ["plan", "implement"],          // the layer pipeline, in order\n\n  "providers": {\n    "anthropic": { "kind": "anthropic" },\n    "ollama-cloud": { "kind": "openai-compat", "baseUrl": "https://ollama.com/v1" },\n    "omlx": {\n      "kind": "openai-compat",\n      "baseUrl": "http://localhost:8000/v1",\n      "contextWindow": 128000             // override ctx% gauge for unlisted models\n    },\n    "codex": { "kind": "openai-responses", "auth": "codex-oauth" }\n  },\n\n  "orchestrator": { "model": "anthropic/claude-sonnet-4", "temperature": 0.2 },\n\n  "permissions": {                        // global rules (deny > ask > allow > mode)\n    "allow": ["Read(**)", "Bash(cargo *)"],\n    "ask":   ["Write(**)"],\n    "deny":  ["Bash(rm -rf *)", "Read(//etc/**)"]  \n  },\n  "approvals": [{ "rule": "Bash(npm run build)" }],   // persisted "always allow"\n\n  "mcpServers": {\n    "context7": {\n      "type": "stdio",\n      "command": "npx",\n      "args": ["-y", "@upstash/context7-mcp", "--api-key", "{env:CONTEXT7_KEY}"],\n      "alwaysLoad": true                  // visible to every layer regardless of mcp.allow\n    },\n    "my-http": {\n      "type": "http",\n      "url": "https://example/mcp",\n      "headers": { "Authorization": "Bearer {env:MY_TOKEN}" }\n    }\n  },\n\n  "hooks": {\n    "PreToolUse": [{ "matcher": "write_file", "command": "echo blocked >&2; exit 2" }]\n  },\n\n  "compaction": { "provider": "anthropic/claude-haiku-4" },  // model-summarize folded history\n  "dispatch":   { "enabled": true }       // expose the model-callable `dispatch` tool\n}',
            },
            {
                kind: 'subheading',
                text: '스키마 검증',
            },
            {
                kind: 'paragraph',
                text: '`stepper config --schema`를 실행하면 `setting.json`의 전체 JSON Schema가 출력됩니다. `stepper config --validate`를 사용하면 프로젝트 구성을 스키마와 대조하여 검증할 수 있습니다.',
            },
            {
                kind: 'subheading',
                text: '주요 구성 필드',
            },
            {
                kind: 'list',
                items: [
                    '`mode` — 권한 모드: `auto`(프로젝트 내 작업은 실행되고, 프로젝트 외부 쓰기는 확인을 요청), `plan`(읽기 전용; 편집 차단), `accept-edits`(프로젝트 내 편집은 자동 승인; 외부 읽기는 확인을 요청). CLI `--mode`가 우선합니다.',
                    '`defaultModel` — 기본 모델 프로바이더 및 ID(예: `anthropic/claude-sonnet-4`).',
                    '`step` — 파이프라인을 구성하는 레이어 이름 배열로, 순서대로 실행됩니다.',
                    '`providers` — `kind`(anthropic, openai-compat, openai-responses)와 연결 세부 정보를 포함하는 프로바이더 정의입니다. 선택적인 `contextWindow`는 목록에 없는 모델의 컨텍스트 게이지를 재정의합니다.',
                    '`orchestrator` — `model`과 `temperature`를 포함한 orchestrator 레이어의 구성입니다.',
                    '`permissions` — `allow`, `ask`, `deny` 목록을 갖는 전역 권한 규칙입니다. 규칙은 `Bash(npm run *)`, `Read(/path)`, `Write(**)`, `Mcp(server, tool)` 같은 지정자를 사용합니다.',
                    '`approvals` — 영속화된 승인 규칙("항상 허용" 결정)의 배열입니다.',
                    '`mcpServers` — MCP 서버 구성입니다. 각 서버는 `type`(stdio 또는 http), 연결 세부 정보, 그리고 레이어 범위 필터링을 우회하는 선택적 `alwaysLoad`를 지정합니다.',
                    '`hooks` — 도구 실행을 가로채는 `PreToolUse` 같은 이벤트 훅입니다.',
                    '`compaction` — 히스토리 접기(folding) 구성으로, 접힌 부분을 요약할 (저렴한) `provider` 모델을 지정합니다.',
                    '`dispatch` — 병렬 서브에이전트를 위해 모델이 호출할 수 있는 `dispatch` 도구를 활성화합니다.',
                ],
            },
        ],
    },
    {
        slug: 'providers',
        title: '프로바이더 및 키',
        description: '환경 변수, OS 키링, 또는 명시적 설정으로 다섯 가지 AI 프로바이더의 API 키를 구성합니다.',
        blocks: [
            {
                kind: 'paragraph',
                text: 'stepper는 다섯 가지 AI 프로바이더를 지원합니다. API 키는 명시적 설정, 환경 변수, 또는 OS 키링을 통해 구성할 수 있습니다. 우선순위가 중요하며, 각 프로바이더마다 인증 요구 사항이 다릅니다.',
            },
            {
                kind: 'subheading',
                text: '지원하는 프로바이더',
            },
            {
                kind: 'list',
                items: [
                    '`ollama-cloud` — Ollama 클라우드 모델',
                    '`oMLX` — `localhost:8000/v1`에서 동작하는 로컬 Apple-Silicon MLX. 인증은 선택 사항입니다',
                    '`OpenAI` — OpenAI API',
                    '`Anthropic` — Anthropic Claude 모델',
                    '`Codex` — OAuth를 통한 ChatGPT',
                ],
            },
            {
                kind: 'subheading',
                text: '키 우선순위',
            },
            {
                kind: 'paragraph',
                text: 'stepper는 다음 순서로 API 키를 찾습니다: 설정의 명시적 `apiKey` → `STEPPER_<PROVIDER>_API_KEY` 환경 변수 → well-known 벤더 환경 변수(예: `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`) → OS 키링. 가장 먼저 일치하는 것이 적용됩니다.',
            },
            {
                kind: 'subheading',
                text: '환경 변수로 키 설정하기',
            },
            {
                kind: 'paragraph',
                text: '`STEPPER_<PROVIDER>_API_KEY` 규칙을 사용합니다. 여기서 프로바이더 이름은 대문자로 바꾸고 하이픈은 밑줄로 대체합니다.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: "# Env var: STEPPER_<PROVIDER>_API_KEY  (provider uppercased, '-' → '_')\nexport STEPPER_ANTHROPIC_API_KEY=sk-ant-...\nexport STEPPER_OLLAMA_CLOUD_API_KEY=...",
            },
            {
                kind: 'subheading',
                text: 'well-known 벤더 키',
            },
            {
                kind: 'paragraph',
                text: 'stepper는 표준 벤더 환경 변수도 인식하므로 Claude Code(또는 다른 도구)에서 이주한 사용자가 keyless로 바로 시작할 수 있습니다. 인식되는 키에는 `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `GROQ_API_KEY`, `GEMINI_API_KEY`, `MISTRAL_API_KEY`, `XAI_API_KEY`, `DEEPSEEK_API_KEY`, `OPENROUTER_API_KEY`가 있습니다. 같은 프로바이더에 대해 `STEPPER_<PROVIDER>_API_KEY`가 있으면 well-known 변수보다 우선합니다.',
            },
            {
                kind: 'subheading',
                text: 'OS 키링에 키 저장하기',
            },
            {
                kind: 'paragraph',
                text: 'keyring 명령으로 키를 안전하게 저장하고 관리합니다. 키링은 시스템의 자격 증명 관리자(macOS의 Keychain, Linux의 secret-service, Windows의 Credential Manager)에 키를 저장합니다.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: '# Store a key (prompts for the key on stdin):\nstepper auth set-key <provider>\n\n# Remove a key:\nstepper auth delete-key <provider>',
            },
            {
                kind: 'subheading',
                text: 'Codex (ChatGPT) OAuth',
            },
            {
                kind: 'paragraph',
                text: 'Codex 프로바이더(ChatGPT)를 사용하려면 OAuth로 인증합니다. 이 과정에서 브라우저가 열리고 자격 증명이 로컬에 저장됩니다.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: '# Codex (ChatGPT) OAuth — opens a browser, stores ~/.stepper/codex-auth.json (0600):\nstepper auth login --codex',
            },
            {
                kind: 'subheading',
                text: 'oMLX 로컬 설정',
            },
            {
                kind: 'paragraph',
                text: 'localhost에서 동작하는 oMLX는 보통 API 키가 필요 없어, 외부 의존성 없는 로컬 개발에 이상적입니다.',
            },
            {
                kind: 'subheading',
                text: '커스텀 프로바이더',
            },
            {
                kind: 'paragraph',
                text: '카탈로그에 없는 어떤 엔드포인트든 stepper에 연결할 수 있습니다 — 로컬 LLM 서버, 사내 게이트웨이, OpenAI 호환 프록시 등. TUI에서 `/connect`는 항상 첫 행으로 **add custom provider**를 제공하며(models.dev에 접속할 수 없을 때도), 이름과 base URL(예: `https://localhost:11111/v1`), 그리고 타입 — `openai`(OpenAI 호환 chat/completions), `claude`(Anthropic Messages), `custom` — 을 입력하는 폼이 열립니다. API 타입은 프로바이더를 라이브로 등록하고 `setting.json`에 영속한 뒤 키를 묻습니다(Esc로 생략 — 로컬 서버는 보통 키가 필요 없습니다). `custom` 타입은 `openai-compat`으로 시작하되, 대신 직접 편집할 `setting.json` 항목을 안내합니다. `kind`에는 `openai-compat` | `anthropic` | `openai-responses`를 쓸 수 있습니다:',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '{\n    "providers": {\n        "my-local": {\n            "kind": "openai-compat",                  // or anthropic | openai-responses\n            "baseUrl": "https://localhost:11111/v1",\n            "apiKey": "{env:MY_LOCAL_KEY}",           // optional — literal or {env:VAR}\n            "defaultModel": "my-model"\n        }\n    }\n}',
            },
            {
                kind: 'paragraph',
                text: '기존 이름으로 폼을 다시 제출하면 `kind`와 `baseUrl`만 갱신되고 키·기본 모델·모델별 override는 보존됩니다. 키는 나중에 `/login <name>`으로 저장할 수 있습니다.',
            },
            {
                kind: 'note',
                text: '키 우선순위는 설정의 명시적 `apiKey` > `STEPPER_<PROVIDER>_API_KEY` > well-known 벤더 환경 변수 > OS 키링 순입니다. stepper를 실행하기 전에 항상 키를 설정하세요. 그렇지 않으면 어떤 레이어가 구성되지 않은 프로바이더의 모델을 요구할 때 런타임에 실패합니다.',
            },
        ],
    },
    {
        slug: 'layers',
        title: '레이어',
        description: '레이어별 모델, 권한, 도구, 스킬을 구성하고, 레이어를 순차적으로 실행하거나 작업 할당과 함께 병렬 팬아웃으로 실행합니다.',
        blocks: [
            {
                kind: 'paragraph',
                text: '레이어는 파이프라인을 구성하는 개별 단계 에이전트로, 각각 자체 하위 프로세스에서 고유한 프로바이더, 모델, 그리고 새로운 컨텍스트 윈도우를 가지고 실행됩니다. 레이어는 `setting.json`의 `step` 배열에 지정된 순서대로 실행됩니다. 각 레이어에서는 자유 텍스트 요약만 다음 레이어로 전달되며, 전체 대화 기록이나 도구 출력은 전달되지 않습니다.',
            },
            {
                kind: 'heading',
                text: '레이어 파일 구조',
            },
            {
                kind: 'paragraph',
                text: '`step`에 있는 각 이름은 `.stepper/layer/<name>/index.md` 경로에 레이어 파일을 가질 수 있습니다. 이 파일은 YAML frontmatter 블록(설정) 다음에 레이어의 시스템 프롬프트 본문이 이어지는 구조입니다.',
            },
            {
                kind: 'code',
                lang: 'markdown',
                code: '---\ndescription: implementation layer        # required\nmodel: omlx/deepseek-coder               # or provider: + the default model\ntemperature: 0.2                         # sampling overrides → the request\ntop_p: 0.9\ntools:\n  allow: [read_file, write_file, edit_file, bash]\n  deny:  [web_fetch]\npermission:                              # per-layer overrides (tighten-only)\n  Bash(rm *): deny\n  Write(**): ask\nmcp:\n  allow: [context7]                      # which MCP servers this layer sees\nskills: [rust-style]                     # skill bodies injected into the system prompt\nsteps: 40                                # step cap (ReAct iterations)\non-failure: skip                         # stop (default) | skip the layer and continue\nretries: 1                               # extra attempts before applying on-failure\ncolor: green\n---\nYou are the implementation layer. Carry out the plan using the tools.',
            },
            {
                kind: 'subheading',
                text: 'Frontmatter 필드',
            },
            {
                kind: 'list',
                items: [
                    '`description` (필수) — 레이어의 역할에 대한 간략한 설명입니다.',
                    '`model` 또는 `provider` — 이 레이어에서 기본 모델을 재정의합니다. `provider/model-id` 형식을 사용합니다(예: `omlx/deepseek-coder`).',
                    '`temperature` 및 `top_p` — API 요청에 전달되는 샘플링 파라미터입니다.',
                    '`tools.allow` 및 `tools.deny` — 이 레이어가 호출할 수 있는 도구(예: `read_file`, `write_file`, `bash`)를 제어합니다.',
                    '`permission` — 전역 규칙과 병합되는 레이어별 권한 규칙으로, 제한을 강화할 수만 있습니다(아래 섹션 참조).',
                    '`mcp.allow` — 이 레이어가 접근할 수 있는 MCP 서버 목록입니다(예: `[context7]`).',
                    '`skills` — 이 레이어에서 사용할 수 있는 스킬 이름의 배열로, 본문은 필요할 때 지연 로드됩니다.',
                    '`steps` — 레이어가 중단되기 전까지의 최대 ReAct 반복 횟수입니다.',
                    '`on-failure` — `stop`(기본값; 파이프라인 중단) 또는 `skip`(다음 레이어로 계속) 중 하나입니다.',
                    '`retries` — `on-failure`가 적용되기 전 추가로 시도하는 횟수입니다.',
                    '`color` — 레이어에 대한 선택적 TUI 색상 레이블입니다.',
                ],
            },
            {
                kind: 'subheading',
                text: '권한 강화',
            },
            {
                kind: 'paragraph',
                text: '레이어별 `permission` 규칙은 전역 규칙 위에 병합되며 `deny > ask > allow` 해결 순서를 따릅니다. 즉, 레이어는 제한을 **강화**할 수만 있으며, 기본 `deny` 규칙을 완화할 수는 없습니다. 예를 들어 전역 설정이 `Bash(rm *)`를 거부하는 경우 레이어가 이를 허용할 수는 없지만, 전역적으로 허용된 도구에 대해 레이어가 확인을 요청하도록 만들 수는 있습니다.',
            },
            {
                kind: 'heading',
                text: '병렬 레이어(팬아웃)',
            },
            {
                kind: 'paragraph',
                text: '레이어는 팬아웃으로 실행될 수 있습니다. 하위 작업당 하나의 동시 워커가 각각 자체적인 새로운 컨텍스트 윈도우와 동일한 레이어 구성을 가지고 실행되며, 다음 레이어가 결과를 처리하기 전에 모두 합쳐집니다. 병렬 실행을 활성화하려면 레이어에 `parallel: true`를 표시합니다.',
            },
            {
                kind: 'subheading',
                text: '작업 할당',
            },
            {
                kind: 'paragraph',
                text: '병렬 레이어 **바로 앞** 레이어에는 `assign_tasks` 도구가 제공됩니다. 이 레이어는 `assign_tasks({ tasks: [{label, prompt}, …] })`를 호출하여 작업을 하위 작업으로 나눕니다. 각 하위 작업은 병렬 레이어의 하나의 워커가 됩니다. 앞 레이어가 작업을 할당하지 않으면 병렬 레이어는 작업 컨텍스트 없이 한 번만 실행됩니다.',
            },
            {
                kind: 'subheading',
                text: '동시성과 워커 패널',
            },
            {
                kind: 'paragraph',
                text: '`parallel-max`를 사용하면 동시에 실행되는 워커 수를 제한할 수 있습니다(예: `parallel-max: 4`). 이는 동시성을 제한할 뿐 작업을 버리지는 않습니다. 작업은 대기열에 들어가고 워커가 끝나는 대로 실행됩니다. TUI는 워커마다 한 행을 보여주는 실시간 **워커 패널**을 표시하며, 현재 상태, 마지막으로 호출한 도구, 토큰 수를 보여줍니다. 모든 워커가 끝나면 각 요약이 다음 레이어를 위한 단일 핸드오프로 수렴됩니다.',
            },
            {
                kind: 'code',
                lang: 'markdown',
                code: '---\ndescription: implementation layer\nparallel: true            # fan out — one worker per assigned subtask\nparallel-max: 4           # max workers running AT ONCE (concurrency cap; no task is dropped)\nmodel: omlx/deepseek-coder\ntools:\n  allow: [read_file, write_file, edit_file, bash]\n---\nYou are one implementation worker. Complete only your assigned subtask, then\nend with a concise summary of what you changed.',
            },
            {
                kind: 'subheading',
                text: '워크플로 예시',
            },
            {
                kind: 'paragraph',
                text: '`step: ["plan", "implement", "test"]`에서 `implement`에 `parallel:`이 표시된 경우, `plan` 레이어는 요약을 출력하고 `assign_tasks`를 호출하여 작업을 구현 하위 작업으로 나눕니다. 각 하위 작업은 전체 레이어 구성을 가진 하나의 `implement` 워커를 생성합니다. 모든 워커가 완료되면 `test`는 모든 워커 변경 사항이 병합된 요약을 받습니다. 모델이 호출할 수 있는 `dispatch` 도구(`dispatch.enabled: true`인 경우)는 서브에이전트에 동일한 워커 패널을 사용합니다.',
            },
            {
                kind: 'heading',
                text: '레이어 만들기',
            },
            {
                kind: 'paragraph',
                text: '`/layer <name>`(빈 레이어 하나)이나 `/scaffold-layer`(기본 plan → implement → review 파이프라인)로 직접 스캐폴딩할 수도 있고, 원하는 것을 설명해 모델에게 맡길 수도 있습니다: `/create-layer implement 뒤에 security-review 레이어 추가`는 이 페이지의 레이어 레퍼런스와 현재 `setting.json`·레이어 목록을 실은 에이전트 턴을 실행해, 모델이 레이어 파일을 작성하고 요청한 `step` 위치에 이름을 삽입합니다. 모든 쓰기는 권한 게이트를 그대로 거치며, 레이어는 다음 실행 시 로드됩니다.',
            },
        ],
    },
    {
        slug: 'permissions',
        title: '권한',
        description: '에이전트의 도구 접근을 제어하는 권한 모드와 규칙 지정자.',
        blocks: [
            {
                kind: 'paragraph',
                text: '권한 모드는 일치하는 명시적 규칙이 없을 때 에이전트가 도구 사용을 어떻게 처리할지 제어합니다. 규칙은 어떤 명령, 파일 경로, MCP 도구를 허용·확인·거부할지 지정하며, 와일드카드, 복합 명령, 리다이렉션을 지원합니다.',
            },
            {
                kind: 'heading',
                text: '권한 모드',
            },
            {
                kind: 'list',
                items: [
                    '`auto` — 기본 모드. 읽기 전용 도구는 어디서나 확인 없이 실행되고, 프로젝트 내 편집은 자동 적용되며, 프로젝트 외부 쓰기만 확인을 요청합니다.',
                    '`plan` — 읽기 전용이며, 편집은 차단됩니다.',
                    '`accept-edits` — 프로젝트 내 편집은 자동으로 수락되고, 외부 읽기는 확인을 요청합니다.',
                ],
            },
            {
                kind: 'heading',
                text: '규칙 지정자',
            },
            {
                kind: 'paragraph',
                text: '규칙은 전역 `permissions` 객체와 레이어별 `permission` 재정의에서 사용됩니다. 리졸버는 deny > ask > allow > 모드 기본값 순서로 규칙을 적용합니다.',
            },
            {
                kind: 'table',
                head: ['형식', '일치 대상'],
                rows: [
                    ['`Bash(npm run *)`', 'bash 명령 (`*` 와일드카드, 끝의 `:*` = 접두사).'],
                    ['`Read(//etc/**)`', '파일 읽기 경로 (`/`=프로젝트 루트, `//`=절대 경로, `~/`=홈).'],
                    ['`Write(**)`', '파일 쓰기 경로 (동일한 경로 구문).'],
                    ['`Edit(**)`', '파일 편집 경로 (동일한 경로 구문).'],
                    ['`Mcp(server, tool)`', 'MCP 도구 (`tool`은 선택 사항 / 모든 도구는 `*`).'],
                    ['`Bash` (인자 없음)', '해당 도구의 모든 bash 명령.'],
                    ['`Web*`, `*`', '도구 이름 glob — 도구 계열(`Web*`)이나 모든 도구(`*`)를 매칭.'],
                ],
            },
            {
                kind: 'heading',
                text: '복합 bash 에스컬레이션',
            },
            {
                kind: 'note',
                text: '복합 bash(`a && b`)는 구성 요소별로 게이팅되며(가장 제한적인 규칙이 우선), 리다이렉션 / `$()` / 백틱 / `&`가 포함된 bash 명령은 `allow`를 `ask`로 에스컬레이션합니다.',
            },
            {
                kind: 'heading',
                text: '프로세스 래퍼 strip',
            },
            {
                kind: 'paragraph',
                text: '규칙을 매칭하기 전에 stepper는 흔한 명령 래퍼를 벗겨 내부 명령까지 게이팅합니다. `sudo rm`, `timeout 5 rm`, `env X=1 rm`, `nice`, `nohup`, `xargs`는 모두 감싸진 명령으로 환원되므로, `rm`에 대한 `deny`가 래퍼로 우회되지 않고 이들 전부를 잡아냅니다.',
            },
            {
                kind: 'heading',
                text: '실행 닷파일 보호',
            },
            {
                kind: 'paragraph',
                text: '`auto` / `accept-edits` 모드에서도 실행되거나 소싱되는 설정 파일 — `.bashrc`, `.zshenv`, `.profile`, `.envrc`, `.gitconfig`, `.git/hooks/*` — 의 편집은 절대 자동 승인되지 않고 명시적 Ask로 격상됩니다(bypass 모드에서는 완전히 Deny). 시크릿 파일(`.env`, `id_rsa`, `*.pem`)은 읽기·쓰기 모두 여전히 완전 차단됩니다.',
            },
        ],
    },
    {
        slug: 'extensibility',
        title: '슬래시 커맨드, 스킬 & MCP',
        description: '기본 제공 슬래시 커맨드, 권한으로 게이팅되는 치환을 지원하는 커스텀 커맨드, 점진적 공개 방식의 스킬, 그리고 MCP 서버 통합.',
        blocks: [
            {
                kind: 'paragraph',
                text: 'stepper의 기능은 세 가지 메커니즘으로 확장합니다. 인프로세스로 실행되는 기본 제공 및 커스텀 슬래시 커맨드, 컨텍스트를 가볍게 유지하기 위해 필요할 때 로드되는 스킬, 그리고 샌드박스화된 도구 접근을 제공하는 MCP 서버입니다. 모든 커스텀 콘텐츠는 fail-closed 시맨틱으로 권한 게이팅되며, 민감한 작업에는 명시적인 allow 규칙이 필요합니다.',
            },
            {
                kind: 'heading',
                text: '기본 제공 슬래시 커맨드',
            },
            {
                kind: 'paragraph',
                text: '다음 커맨드는 인프로세스로 처리되며 에이전트 턴을 실행하지 않습니다:',
            },
            {
                kind: 'list',
                items: [
                    '`/help` — 사용 가능한 모든 커맨드 나열',
                    '`/clear` — 대화/세션 초기화',
                    '`/model [provider/model-id]` — 활성 모델을 표시하거나 새 모델로 전환(모든 레이어에 적용하기 전에 검증됨)',
                    '`/context` — 활성 모델의 컨텍스트 윈도우 표시',
                    '`/rename <name>` — 현재 세션 이름 변경(세션 파일에 영속)',
                    '`/export [path]` — 세션 대화를 Markdown 전사로 저장(기본 `.stepper/exports/<id>.md`)',
                    '`/rewind [code|conversation]` — 이전 스냅샷 복원; 파일 트리/대화로 범위를 좁히거나 인자 없이 둘 다 복원',
                    '`/copy` — 마지막 어시스턴트 응답을 OS 클립보드로 복사',
                    '`/code-review [ref | #pr] [--fix]` — diff를 단일 패스로 리뷰(기본은 uncommitted 변경); `--fix`는 확정 findings를 적용',
                ],
            },
            {
                kind: 'heading',
                text: '커스텀 슬래시 커맨드',
            },
            {
                kind: 'paragraph',
                text: '커스텀 커맨드는 `.stepper/commands/<name>.md` 파일에 위치합니다. 각 파일은 YAML frontmatter(메타데이터)와 그 뒤에 치환을 지원하는 템플릿 본문으로 구성됩니다.',
            },
            {
                kind: 'subheading',
                text: '파일 형식과 호출',
            },
            {
                kind: 'paragraph',
                text: 'TUI에서 `/`를 입력하면 팔레트가 열리며, 여기서 항목을 선택하고 ↑↓로 이동하고 Tab으로 자동 완성하고 Enter로 실행할 수 있습니다. `/name args` 형태로 호출합니다. 기본 제공 커맨드는 같은 이름의 커스텀 커맨드 파일보다 우선합니다.',
            },
            {
                kind: 'subheading',
                text: '치환 구문',
            },
            {
                kind: 'paragraph',
                text: '커맨드 템플릿은 다음 치환을 지원합니다:',
            },
            {
                kind: 'list',
                items: [
                    '`!`shell`` — 인라인 셸 코드 블록',
                    '`$1`, `$2`, … — 커맨드 호출 시 전달된 위치 인자',
                    '`{file:path}` 또는 `@include path` — 주어진 경로의 파일 읽기',
                    '`{env:VAR}` — 환경 변수 확장',
                ],
            },
            {
                kind: 'subheading',
                text: '권한 게이팅(fail-closed)',
            },
            {
                kind: 'note',
                text: '모든 치환은 fail-closed 시맨틱으로 권한 게이팅됩니다. 이는 심어진 커맨드 파일이 검증되지 않은 셸, 파일, 시크릿 접근을 프롬프트에 몰래 끼워 넣는 것을 방지합니다.',
            },
            {
                kind: 'list',
                items: [
                    '`!`shell`` 블록은 명시적인 `allow` 규칙이 일치할 때만 실행됩니다(예: `"allow": ["Bash(git diff)"]`)',
                    '`{file:…}` 및 `@include` 읽기는 `Read` 규칙으로 게이팅됩니다',
                    '시크릿 패턴(`*_API_KEY`, `*_TOKEN`, `AWS_*`, …)과 일치하는 환경 변수는 `{env:…}`로 절대 확장되지 않습니다',
                    '`.stepper/` 아래로의 쓰기는 `accept-edits` 모드에서도 항상 명시적인 승인이 필요합니다 — 이 디렉터리가 에이전트 자체의 보안을 제어하기 때문입니다',
                ],
            },
            {
                kind: 'heading',
                text: '스킬',
            },
            {
                kind: 'paragraph',
                text: '스킬은 Claude-Code 방식의 점진적 공개 패턴을 따릅니다. 시스템 프롬프트는 스킬의 이름과 설명만 노출하고, 모델은 필요할 때 전체 본문을 로드합니다. 이를 통해 기본 컨텍스트 윈도우를 가볍게 유지합니다.',
            },
            {
                kind: 'subheading',
                text: '파일 형식',
            },
            {
                kind: 'paragraph',
                text: '스킬은 `.stepper/skills/<name>/SKILL.md`에 저장되며, `name`과 `description` 키를 담은 YAML frontmatter와 그 뒤의 스킬 본문으로 구성됩니다.',
            },
            {
                kind: 'subheading',
                text: '스킬 선언 및 사용',
            },
            {
                kind: 'paragraph',
                text: '레이어는 자신의 frontmatter `skills:` 목록에 사용할 수 있는 스킬을 선언합니다. 모델이 스킬이 필요할 때 `{"name":"<skill>"}`와 함께 `skill` 도구를 호출하여 전체 본문을 로드합니다. skill 도구는 레이어별로 범위가 지정되며 해당 레이어가 선언한 스킬만 제공합니다. 스킬은 팬아웃 워커에서도 사용할 수 있습니다.',
            },
            {
                kind: 'heading',
                text: 'MCP(Model Context Protocol) 서버',
            },
            {
                kind: 'paragraph',
                text: 'MCP 서버는 stepper 레이어에 도구와 리소스를 제공합니다. `setting.json`의 `mcpServers` 아래에서 전역으로 구성하며, stdio 또는 HTTP 서버로 실행할 수 있습니다.',
            },
            {
                kind: 'subheading',
                text: '구성',
            },
            {
                kind: 'paragraph',
                text: '`.stepper/setting.json`에서 MCP 서버를 정의합니다:',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"mcpServers": {\n  "context7": {\n    "type": "stdio",\n    "command": "npx",\n    "args": ["-y", "@upstash/context7-mcp", "--api-key", "{env:CONTEXT7_KEY}"],\n    "alwaysLoad": true                  // visible to every layer regardless of mcp.allow\n  },\n  "my-http": {\n    "type": "http",\n    "url": "https://example/mcp",\n    "headers": { "Authorization": "Bearer {env:MY_TOKEN}" }\n  }\n}',
            },
            {
                kind: 'subheading',
                text: '도구 네임스페이스와 범위 지정',
            },
            {
                kind: 'list',
                items: [
                    'MCP 서버의 도구는 `mcp__<server>__<tool>` 형태로 네임스페이스가 지정됩니다',
                    '모든 MCP 도구 사용은 권한 규칙으로 게이팅됩니다',
                    '레이어별 범위 지정: 레이어는 자신의 레이어 구성에 있는 `mcp.allow` 목록을 통해 사용할 수 있는 MCP 서버를 선언합니다',
                    '`alwaysLoad: true` — 레이어별 범위 지정을 우회하여, `mcp.allow`와 관계없이 모든 레이어에서 서버를 볼 수 있게 합니다',
                ],
            },
            {
                kind: 'subheading',
                text: 'HTTP 서버 헤더',
            },
            {
                kind: 'paragraph',
                text: 'HTTP 서버는 `headers` 객체를 지원합니다. `Authorization` 헤더는 특별하게 라우팅되며, 다른 헤더는 서버로 보내는 요청에 포함됩니다.',
            },
        ],
    },
    {
        slug: 'features',
        title: '세션 및 기타 기능',
        description: '레이어드 AI 코딩 워크플로를 위한 dispatch, 컴팩션, 체크포인트, 세션, 훅, 인터럽트, 프롬프트 캐싱 기능.',
        blocks: [
            {
                kind: 'paragraph',
                text: 'stepper는 레이어드 AI 에이전트의 동작을 확장하고 다듬기 위한 고급 세션 관리, 컨텍스트 최적화, 워크플로 제어 기능을 제공합니다.',
            },
            {
                kind: 'heading',
                text: 'Dispatch 도구',
            },
            {
                kind: 'paragraph',
                text: '설정에서 `dispatch`를 활성화하면 모델이 병렬 서브에이전트를 팬아웃할 수 있습니다. 각 서브에이전트는 자체 컨텍스트 윈도우에서 실행되며, 그 요약 결과가 호출자에게 반환됩니다. 팬아웃이 실행되는 동안 TUI는 실시간 **워커 패널**을 표시합니다(워커당 한 행: 상태, 마지막 도구, 토큰 수).',
            },
            {
                kind: 'paragraph',
                text: '`.stepper/setting.json`에서 설정합니다:',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"dispatch": { "enabled": true }',
            },
            {
                kind: 'heading',
                text: '컴팩션',
            },
            {
                kind: 'paragraph',
                text: '대화 기록이 컨텍스트 윈도우의 약 70%를 넘으면, stepper는 공간을 확보하기 위해 이전 메시지를 자동으로 접어 넣습니다. `compaction.provider`가 설정되어 있으면 지정된(일반적으로 저렴한) 모델이 접힌 부분을 요약하고, 그렇지 않으면 휴리스틱 마커가 사용됩니다.',
            },
            {
                kind: 'paragraph',
                text: '컴팩션 모델을 설정합니다:',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"compaction": { "provider": "anthropic/claude-haiku-4" }',
            },
            {
                kind: 'heading',
                text: '체크포인트와 되감기',
            },
            {
                kind: 'paragraph',
                text: '매 턴마다 작업 트리 상태가 자동으로 스냅샷됩니다. `/rewind` 커맨드를 사용하면 이전 스냅샷을 복원하고 그 지점에서 세션을 잘라낼 수 있어, 변경을 되돌리고 더 이른 상태에서 분기할 수 있습니다. 복원 범위는 `/rewind code`(파일 트리만) 또는 `/rewind conversation`(대화만)으로 좁힐 수 있으며, 인자 없는 `/rewind`(및 Esc-Esc)는 둘 다 복원합니다.',
            },
            {
                kind: 'heading',
                text: '세션과 재개',
            },
            {
                kind: 'paragraph',
                text: '세션 상태는 `.stepper/sessions/<id>.json`에 영속됩니다. `--resume` 플래그로 이전 세션을 재개하면, 이전 세션의 컨텍스트로 새 실행을 시드합니다:',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper --resume <session-id>',
            },
            {
                kind: 'heading',
                text: '훅',
            },
            {
                kind: 'paragraph',
                text: '세션의 주요 시점에서 셸 명령을 실행하도록 라이프사이클 훅을 설정할 수 있습니다. 훅은 `.stepper/setting.json`의 `hooks` 키 아래에 이벤트별로 정의하며, 일치한 페이로드가 JSON으로 stdin에 전달됩니다. 종료 코드가 0이 아니면 해당 작업이 차단됩니다(예: `PreToolUse`). 라이프사이클은 9가지 이벤트를 다룹니다:',
            },
            {
                kind: 'list',
                items: [
                    '`SessionStart` — 세션이 시작될 때 실행됩니다',
                    '`UserPromptSubmit` — 프롬프트를 제출할 때 실행됩니다',
                    '`PreToolUse` — 도구가 호출되기 전에 실행되며, 0이 아닌 종료 코드는 도구를 차단합니다',
                    '`PostToolUse` — 도구가 완료된 후에 실행됩니다',
                    '`PreCompact` — 기록이 접히기 전에 실행됩니다',
                    '`SubagentStop` — 병렬 레이어 워커 또는 `task` / `dispatch` sub-agent가 끝날 때 실행됩니다',
                    '`Notification` — 알림 이벤트 시 실행됩니다',
                    '`Stop` — 턴이 멈출 때 실행됩니다',
                    '`SessionEnd` — 세션이 종료될 때 실행됩니다',
                ],
            },
            {
                kind: 'paragraph',
                text: '훅 설정 예시:',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"hooks": {\n  "PreToolUse": [{ "matcher": "write_file", "command": "echo blocked >&2; exit 2" }]\n}',
            },
            {
                kind: 'paragraph',
                text: '각 훅은 `timeout`(초)을 설정해 기본 30초 상한을 늘릴 수 있습니다 — `Stop` 훅의 포매터나 테스트 실행에 유용합니다. 훅 프로세스에는 환경 변수로 `$STEPPER_PROJECT_DIR`와 `$CLAUDE_PROJECT_DIR`(둘 다 프로젝트 루트)가 주입됩니다. `PreToolUse`를 제외한 모든 이벤트는 한 훅이 non-zero로 종료해도 매칭된 나머지 훅을 전부 실행하며, `PreToolUse`만 첫 차단 종료에서 단락됩니다.',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"hooks": {\n  "Stop": [{ "matcher": "*", "command": "cargo fmt && cargo test", "timeout": 120 }]\n}',
            },
            {
                kind: 'heading',
                text: '인터럽트',
            },
            {
                kind: 'paragraph',
                text: '실행 중인 턴 동안 `Esc`를 누르면 실행을 취소합니다. 이는 세션을 종료하지 않고 스트림과 진행 중인 모든 도구 호출을 중단하며, 프롬프트는 즉시 다음 입력을 받을 준비가 됩니다.',
            },
            {
                kind: 'heading',
                text: '프롬프트 캐싱',
            },
            {
                kind: 'paragraph',
                text: '레이어별 시스템 프롬프트와 도구 프리픽스는 Anthropic API 호출에 대해 캐시 가능으로 표시되므로, ReAct 루프에서 반복되는 요청은 캐시 읽기 가격의 이점을 누립니다. OpenAI 및 Responses 호환 프로바이더는 프리픽스 단위로 자동 캐싱합니다.',
            },
            {
                kind: 'heading',
                text: 'TUI 키보드 단축키',
            },
            {
                kind: 'table',
                head: ['키', '동작'],
                rows: [
                    ['`Enter`', '현재 프롬프트 제출'],
                    ['`Shift+Enter`', '제출하지 않고 줄바꿈 삽입'],
                    ['`Shift+Tab`', '권한 모드 순환(`auto` → `plan` → `accept-edits` → `auto`)'],
                    ['`Esc`', '현재 턴 인터럽트(스트림과 진행 중인 도구 중단)'],
                    ['`Ctrl+C`', 'TUI 종료'],
                    ['`Ctrl+E`', '외부 에디터에서 프롬프트 작성'],
                    ['`↑` / `↓`', '명령 히스토리에서 이전/다음 프롬프트 recall(첫/끝 줄에서)'],
                    ['`Ctrl+R`', '역방향 히스토리 검색 오버레이 열기'],
                    ['`!cmd`', '셸 명령 실행'],
                    ['`@`', '파일 선택기 열기'],
                    ['`/`', '커맨드 팔레트 열기'],
                    ['`y` (승인 오버레이)', '이번 한 번만 동작 허용'],
                    ['`a` (승인 오버레이)', '이 동작 항상 허용'],
                    ['`n` (승인 오버레이)', '동작 거부'],
                ],
            },
            {
                kind: 'heading',
                text: 'apply_patch 도구',
            },
            {
                kind: 'paragraph',
                text: '`apply_patch` 도구는 구조화된 다중 파일 패치(Add / Update / Delete / Move, `@@` 컨텍스트 헝크와 퍼지 매칭 지원)를 원자적으로 적용합니다. 모든 변경을 먼저 검증하며, 어느 한 헝크라도 실패하거나 게이트가 거부되면 아무것도 쓰지 않습니다.',
            },
            {
                kind: 'heading',
                text: '편집 시 포맷 & LSP',
            },
            {
                kind: 'paragraph',
                text: '선택형 편집 시 자동 포맷은 파일 편집 도구가 실행된 뒤 기본 제공 카탈로그(rustfmt, gofmt, prettier, ruff, biome, …)에서 일치하는 포매터를 실행합니다. 설치된 language server의 LSP 진단은 편집 후에 수집되어 도구 결과에 덧붙여집니다. 둘 다 기본은 꺼져 있으며 `setting.json`의 `formatter` / `lsp` 키로 활성화합니다.',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"formatter": true,\n"lsp": true',
            },
            {
                kind: 'heading',
                text: '이름이 지정된 sub-agent',
            },
            {
                kind: 'paragraph',
                text: '재사용 가능한 sub-agent를 `.stepper/agents/<name>/index.md`(모델, 도구, 시스템 프롬프트)에 정의합니다. `task` 도구로 호출하거나, 프롬프트에서 `#<name>`으로 인라인 호출할 수 있습니다(타입어헤드 피커가 목록을 보여줍니다). 각 sub-agent는 새로운 컨텍스트를 가진 자체 sub-agent로 실행되며, Task 권한 규칙으로 게이팅됩니다.',
            },
            {
                kind: 'heading',
                text: 'Undo / Redo',
            },
            {
                kind: 'paragraph',
                text: '`/undo`는 마지막 턴을 되돌립니다 — 작업 트리를 그 턴 직전의 체크포인트로 복원하고 해당 턴을 제거합니다 — 그리고 먼저 스냅샷을 떠 두어 `/redo`로 다시 적용할 수 있게 합니다(둘 다 멀티 스텝). 새 턴을 시작하면(또는 `/rewind`, `/resume`, `/clear`, `/compact`) 타임라인이 분기되고 redo 스택이 무효화됩니다.',
            },
            {
                kind: 'heading',
                text: '알림',
            },
            {
                kind: 'paragraph',
                text: '`setting.json`에 `notification`을 설정하면 턴이 완료되거나, 승인 대기 중이거나, 턴에서 오류가 났을 때 터미널 벨이 울립니다 — 세 가지 모두에 대해 `true`로 켜거나, 객체로 트리거를 골라 지정할 수 있습니다. 기본은 꺼져 있으며, 이식성 있는 터미널 벨만 사용합니다(OS 알림 없음).',
            },
            {
                kind: 'heading',
                text: '프록시 & 사설 CA',
            },
            {
                kind: 'paragraph',
                text: '아웃바운드 HTTP는 표준 `HTTP(S)_PROXY` / `NO_PROXY` 환경 변수를 따릅니다. 환경 변수가 없는 환경에서는 `setting.json`에 프록시를 명시적으로 설정합니다(`http` / `https` / `all` / `noProxy` / `disabled`). 기업용 / 자체 서명 루트는 `STEPPER_EXTRA_CA_CERTS`(PEM 번들, 시스템 신뢰에 추가되며 fail-open)로 추가합니다. provider 호출, `web_fetch`, http MCP에 적용됩니다.',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"proxy": { "https": "http://proxy.corp:3128", "noProxy": "localhost" }',
            },
            {
                kind: 'heading',
                text: 'MCP 서버 OAuth',
            },
            {
                kind: 'paragraph',
                text: 'OAuth가 필요한 원격(http) MCP 서버는 `stepper mcp auth <name>`(브라우저 플로, PKCE, 동적 클라이언트 등록)으로 인증합니다. 토큰은 `~/.stepper/mcp-auth.json`(0600)에 저장되며 자동으로 갱신됩니다. `stepper mcp logout` / `status`로 관리합니다. `mcpServers`에서 서버별로 `oauth` 키로 활성화합니다.',
            },
            {
                kind: 'heading',
                text: '세션 간 통계',
            },
            {
                kind: 'paragraph',
                text: '`stepper stats`는 저장된 모든 세션에 걸쳐 토큰, 비용, 턴, 모델별·도구별 사용량을 집계합니다. `--days`로 필터링하고, `--models` / `--tools`로 분해하며, `--json`으로 JSON을 출력하거나 `--export`(.csv 또는 .json)로 파일에 기록합니다. 도구별 분해는 정규화된 막대와 퍼센트를 곁들인 막대 차트로 그려져, 가장 많이 쓰인 도구가 한눈에 드러납니다. 사용량은 앞으로 턴마다 기록됩니다.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper stats --models --tools\nstepper stats --days 7 --json',
            },
            {
                kind: 'heading',
                text: '자동 메모리',
            },
            {
                kind: 'paragraph',
                text: '에이전트는 `memory_write` 도구를 호출해 지속적인 학습 내용 — 빌드 / 테스트 명령, 컨벤션, 디버깅 인사이트 — 을 `.stepper/memory/MEMORY.md`에 추가할 수 있습니다. 이 파일은 이후 모든 세션이 시작될 때 base 컨텍스트로 로드되어(가장 최근 약 32 KB), 학습 내용이 수작업 없이 세션을 넘나들며 이어집니다.',
            },
            {
                kind: 'heading',
                text: '추론 강도',
            },
            {
                kind: 'paragraph',
                text: '세션의 추론 강도는 `/effort` 또는 `--effort` 플래그(`off` / `low` / `medium` / `high` / `xhigh` / `max`)로 설정합니다. 인자 없는 `/effort`는 현재 레벨을 강조한 피커를 열고, 푸터에 현재 값이 표시됩니다. 최신 Claude(Opus ≥ 4.6 / Sonnet ≥ 4.6 / Fable·Mythos 5)는 적응형 사고와 `output_config.effort`로, OpenAI는 `reasoning_effort`(`xhigh` / `max`는 `high`로 클램프)로, 구형 Claude는 레거시 사고 예산 단계로 매핑됩니다.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper --effort xhigh\n# 또는 TUI 안에서:  /effort max',
            },
            {
                kind: 'heading',
                text: '외부 에디터',
            },
            {
                kind: 'paragraph',
                text: '`/editor`를 실행(또는 `Ctrl+E`)하면 프롬프트를 자신의 에디터에서 작성할 수 있습니다 — stepper가 임시 파일로 `$VISUAL` / `$EDITOR`를 열고, 저장한 내용을 입력란으로 불러옵니다. 인라인으로 입력하기 번거로운 길고 여러 문단짜리 프롬프트에 유용합니다.',
            },
            {
                kind: 'heading',
                text: '설정 개요',
            },
            {
                kind: 'paragraph',
                text: '`/settings`는 통합된 탭형 개요를 엽니다 — General · Model · Permissions · Theme · MCP · Notifications. `←` / `→`(또는 `Tab`)로 탭을 전환하고, `Enter`로 포커스된 탭의 편집기(`/permissions`, `/theme`, `/model`)로 바로 이동하며, `Esc`로 닫습니다.',
            },
            {
                kind: 'heading',
                text: 'MCP 관리 CLI',
            },
            {
                kind: 'paragraph',
                text: '`setting.json`을 직접 손대지 않고도 커맨드라인에서 MCP 서버를 관리할 수 있습니다: `stepper mcp list`는 설정된 서버를 보여주고, `stepper mcp get <name>`은 서버에 연결해 그 도구 / 리소스 / 프롬프트를 나열하며, `stepper mcp add <name>`은 stdio 또는 http 서버를 등록하고, `stepper mcp remove <name>`은 삭제합니다.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper mcp list\nstepper mcp get context7\nstepper mcp add my-tool --command my-mcp --arg --stdio',
            },
            {
                kind: 'heading',
                text: '모델 CLI',
            },
            {
                kind: 'paragraph',
                text: '`stepper models [provider]`는 선택 가능한 모델(각 provider의 라이브 목록과 models.dev 카탈로그를 병합한 것)을 헤드리스로 나열합니다 — 기본은 일반 텍스트, 스크립트용으로는 `--json`, 모델별 컨텍스트 윈도우와 가격에는 `--verbose`.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper models\nstepper models anthropic --verbose\nstepper models --json',
            },
            {
                kind: 'heading',
                text: '헤드리스 시스템 프롬프트 재정의',
            },
            {
                kind: 'paragraph',
                text: 'stepper를 헤드리스 린터나 리뷰어로 감쌀 때, `--system-prompt` / `--system-prompt-file`는 실행 동안 프로젝트 base 컨텍스트를 교체하고(dispatch된 sub-agent에도 적용됩니다), `--append-system-prompt` / `--append-system-prompt-file`는 각 레이어 시스템 메시지의 역할 뒤에 추가 지시를 덧붙입니다.',
            },
            {
                kind: 'heading',
                text: '파일 로깅',
            },
            {
                kind: 'paragraph',
                text: '로깅은 선택형입니다: `--log-level`을 넘기면 `~/.stepper/logs/stepper.log`에 기록합니다(`RUST_LOG` 환경 변수가 설정되어 있으면 그쪽이 우선합니다). TUI를 어지럽히지 않고 헤드리스 실행이나 오작동하는 provider를 디버깅할 때 유용합니다.',
            },
            {
                kind: 'heading',
                text: '명령 히스토리 & 역검색',
            },
            {
                kind: 'paragraph',
                text: '제출한 프롬프트는 `~/.stepper/history/<project>.json`에 영속됩니다(최근 500개, 연속 중복 제거). 입력의 첫/끝 줄에서 `↑` / `↓`를 누르면 이전/다음 프롬프트를 recall하며, 입력 중이던 draft는 보존되어 끝으로 돌아오면 복원됩니다. `Ctrl+R`은 부분 문자열을 최근순으로 매칭하는 역검색 오버레이를 엽니다.',
            },
            {
                kind: 'heading',
                text: 'fallback 모델 체인',
            },
            {
                kind: 'paragraph',
                text: '`--fallback-model a,b,c`(쉼표 구분) 또는 `fallbackModel` 설정(문자열 또는 배열)으로 폴백 체인을 지정합니다. 주 모델이 재시도 불가 실패를 만나거나 재시도를 소진하면 stepper는 체인의 모델을 순서대로 시도합니다. CLI 플래그가 설정보다 우선하며, 항목은 공백 trim·중복 제거 후 최대 3개로 제한됩니다.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper --fallback-model anthropic/claude-haiku-4,openai/gpt-5',
            },
            {
                kind: 'heading',
                text: '통합 진단',
            },
            {
                kind: 'paragraph',
                text: '`stepper doctor`는 한 번에 모두 점검합니다: 설정 검증, provider API 키, 기본/폴백 모델 resolve, 실제 MCP 서버 연결, models.dev 카탈로그, 그리고 GitHub 최신 릴리스 버전(네트워크 포함). 키 누락이나 연결 실패는 경고이며(exit 0), 무효 설정이나 해석 불가한 기본 모델만 실패합니다.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper doctor',
            },
            {
                kind: 'heading',
                text: 'structured outputs (헤드리스)',
            },
            {
                kind: 'paragraph',
                text: '헤드리스 모드에서 `-p --output-schema <inline|file>`는 최종 응답을 JSON Schema에 맞게 강제합니다. 위반 시 검증 오류를 담아 재프롬프트하며(`--output-schema-retries`, 기본 2), 끝내 충족하지 못하면 non-zero로 종료합니다. 검증된 JSON은 재직렬화되어 출력됩니다(코드 펜스 허용).',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper -p "list the open TODOs" --output-schema ./todos.schema.json',
            },
            {
                kind: 'heading',
                text: 'tool-search (도구 지연 노출)',
            },
            {
                kind: 'paragraph',
                text: '한 레이어의 도구가 40개를 넘고 MCP 도구가 존재하면, stepper는 MCP 도구 정의를 프롬프트에서 숨기고 `tool_search` 메타도구만 노출합니다. 모델이 검색하면 매칭된 도구를 그 턴 동안만 노출(reveal)합니다 — base 컨텍스트를 가볍게 유지하면서도 필요할 때 모든 도구에 도달합니다.',
            },
            {
                kind: 'heading',
                text: '커스텀 statusline',
            },
            {
                kind: 'paragraph',
                text: '`setting.json`에 `statusLine: { command: [...] }`를 설정하면 stepper가 그 명령을 백그라운드에서 주기적으로 실행하며(5s 타임아웃), 모델 / 모드 / cwd / 토큰 / 비용을 JSON으로 stdin에 넘깁니다. stdout의 첫 줄이 푸터에 렌더링되며 — UI를 막지 않습니다.',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"statusLine": { "command": ["my-statusline.sh"] }',
            },
            {
                kind: 'heading',
                text: '커스터마이즈 키바인드',
            },
            {
                kind: 'paragraph',
                text: '`~/.stepper/keybindings.json`(및 프로젝트 `.stepper/keybindings.json`)에 `{"action":"chord"}` 형태로 바인딩을 추가합니다. 바인딩은 가산식입니다 — 기본 키는 항상 동작합니다. 바인딩 가능: `newline`, `cycle-mode`, `external-editor`, `history-search`, `scroll-up`, `scroll-down`(chord 예: `ctrl+t`, `alt+k`). submit / quit / interrupt는 비바인딩입니다.',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '{ "external-editor": "ctrl+t", "history-search": "alt+k" }',
            },
            {
                kind: 'heading',
                text: '계층 누적 CLAUDE.md',
            },
            {
                kind: 'paragraph',
                text: '프로젝트 루트부터 현재 작업 디렉터리까지, 각 서브디렉터리의 `CLAUDE.md`가 base 컨텍스트에 누적됩니다(가장 구체적인 것이 마지막). 이는 기존 프로젝트 base(`.stepper/stepper.md` 등 first-found 파일)에 가산되며, 기존 동작은 그대로 유지됩니다.',
            },
            {
                kind: 'heading',
                text: 'AGENTS.md base 컨텍스트',
            },
            {
                kind: 'paragraph',
                text: 'stepper는 프로젝트 루트의 `./AGENTS.md`(크로스에이전트 표준)와 `~/.config/AGENTS.md`도 base 컨텍스트 후보로 인식합니다. 전체 우선순위는 `.stepper/stepper.md` → `./CLAUDE.md` → `./AGENTS.md` → `~/.stepper/stepper.md` → `~/.claude/CLAUDE.md` → `~/.config/AGENTS.md`입니다.',
            },
            {
                kind: 'heading',
                text: '세션 rename & export',
            },
            {
                kind: 'paragraph',
                text: '`/rename <name>`은 현재 세션의 이름을 변경하고 영속합니다(`stepper session rename <id> <name>`으로도 가능). `/export [path]`는 세션 대화를 Markdown 전사로 저장하며, 기본 경로는 `.stepper/exports/<id>.md`입니다.',
            },
            {
                kind: 'heading',
                text: 'path-scoped rules',
            },
            {
                kind: 'paragraph',
                text: '`.stepper/rules/*.md`에 frontmatter `paths:` 글롭을 둔 규칙 파일을 배치합니다. 규칙은 현재 작업 디렉터리가 그 글롭에 매칭될 때에만 base 컨텍스트에 로드됩니다 — 디렉터리별 규칙이 해당 위치에서만 적용됩니다.',
            },
            {
                kind: 'heading',
                text: 'microcompaction',
            },
            {
                kind: 'paragraph',
                text: '풀 압축이 작동하기 전에, microcompaction은 가장 오래되고 큰 도구 결과만 접어 컨텍스트를 회수합니다 — 대화 턴은 그대로 보존합니다. 대화를 요약하지 않고도 여유 공간을 확보합니다.',
            },
            {
                kind: 'heading',
                text: 'ask-user-question 도구',
            },
            {
                kind: 'paragraph',
                text: '모델은 내장 `ask_user_question` 도구로 객관식 명확화 질문을 띄울 수 있습니다. TUI는 이를 선택 오버레이로 표시하며(숫자 또는 `↑` / `↓` + `Enter`로 선택), 선택을 모델에 반환합니다. 헤드리스 / 무UI 실행에서는 "미응답"으로 진행합니다.',
            },
            {
                kind: 'heading',
                text: '마지막 응답 복사',
            },
            {
                kind: 'paragraph',
                text: '`/copy`는 가장 최근 어시스턴트 응답을 OS 클립보드로 복사합니다 — 인자도, 에이전트 턴도 없습니다.',
            },
            {
                kind: 'heading',
                text: '코드 리뷰 커맨드',
            },
            {
                kind: 'paragraph',
                text: '`/code-review`는 diff를 단일 패스로 리뷰합니다. 인자가 없으면 uncommitted 작업 변경을 리뷰하며(트리가 깨끗하면 `origin/main` 같은 기준 브랜치와의 diff로 폴백), git ref나 `<a>..<b>` 범위는 그 범위를, `#123`은 `gh pr diff`로 GitHub 풀 리퀘스트를 리뷰합니다. `--fix`를 붙이면 findings를 리포트한 뒤 확정된 것을 적용합니다. 약 96KB를 초과하는 diff는 파일 목록 리뷰로 폴백합니다.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: '/code-review\n/code-review origin/main..HEAD\n/code-review #123 --fix',
            },
            {
                kind: 'heading',
                text: '전체 높이 터미널 UI',
            },
            {
                kind: 'paragraph',
                text: 'TUI가 터미널 전체를 차지하고 창 크기 조절·전체화면 전환을 실시간으로 따라갑니다. 완료된 턴은 계속 터미널의 native scrollback에 커밋되므로 — alternate screen이 아니라서 — 마우스 휠 스크롤과 텍스트 선택이 그대로 동작합니다. 턴의 마지막 응답은 읽는 동안 화면에 유지되다가 다음 프롬프트와 함께 커밋되며, 종료 시 패널이 정리되어 전체 대화가 scrollback에 정확히 한 번 남습니다.',
            },
            {
                kind: 'heading',
                text: '커스텀 프로바이더 연결',
            },
            {
                kind: 'paragraph',
                text: '`/connect` 피커의 첫 행이 **add custom provider**입니다: 작은 폼(이름 · base URL · 타입)으로 로컬 LLM 서버나 OpenAI/Anthropic 호환 엔드포인트를 설정 파일 편집 없이 등록합니다. `custom` 타입은 와이어 포맷을 조정할 정확한 `setting.json` 항목을 안내합니다. 자세한 내용은 프로바이더 & 키 문서를 참고하세요.',
            },
            {
                kind: 'heading',
                text: '레이어 작성 커맨드',
            },
            {
                kind: 'paragraph',
                text: '`/create-layer <설명>`은 모델이 파이프라인 레이어를 대신 작성하게 합니다: 임베드된 레이어 레퍼런스와 현재 유효한 파이프라인 설정을 실은 턴이 실행되어, `.stepper/layer/<name>/index.md`를 작성하고 요청한 위치에 `step` 배열 항목을 배치한 뒤 최종 순서를 보고합니다 — 전부 일반 권한 게이트를 거칩니다.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: '/create-layer implement 뒤에 security-review 레이어 추가',
            },
        ],
    },
    {
        slug: 'ci',
        title: 'CI 및 릴리스',
        description: 'GitHub Actions를 통한 자동화된 CI 파이프라인, 수동 워크플로 실행, 크로스 플랫폼 릴리스 바이너리.',
        blocks: [
            {
                kind: 'paragraph',
                text: 'stepper 저장소는 지속적 통합, 수동 워크플로 실행, 자동화된 릴리스 배포에 GitHub Actions를 사용합니다. 세 개의 워크플로가 여러 플랫폼에서 빌드, 테스트, 바이너리 게시를 담당합니다.',
            },
            {
                kind: 'heading',
                text: 'ci.yml — push 시 빌드 및 테스트',
            },
            {
                kind: 'paragraph',
                text: '코드베이스를 검증하기 위해 모든 push와 pull request에서 실행됩니다. 이 워크플로는 다음 품질 게이트를 수행합니다:',
            },
            {
                kind: 'list',
                items: [
                    '`build` — `cargo build --workspace`로 워크스페이스를 컴파일합니다',
                    '`clippy -D warnings` — 경고를 오류로 취급하는 모드로 clippy 린터를 실행하여 코드 품질을 강제합니다',
                    '`test` — `cargo test --workspace`를 실행합니다(`#[ignore]`로 표시되었거나 환경에 의해 게이트되는 라이브 테스트는 건너뜁니다)',
                    '`install` — `scripts/install.sh`를 실행하여 설치 스크립트가 정상 동작하는지 검증하는 스모크 테스트입니다',
                ],
            },
            {
                kind: 'heading',
                text: 'run.yml — 수동 헤드리스 실행',
            },
            {
                kind: 'paragraph',
                text: '온디맨드 테스트 실행을 위해 `workflow_dispatch`로 트리거되는 수동 워크플로입니다. 이 워크플로는 stepper를 빌드 및 설치한 뒤, 사용자가 제공한 입력으로 헤드리스 실행합니다.',
            },
            {
                kind: 'list',
                items: [
                    '세 가지 워크플로 입력을 받습니다: `prompt`(헤드리스 프롬프트), `model`(사용할 모델 ID), `mode`(권한 모드)',
                    '프로바이더 인증을 위해 `STEPPER_<PROVIDER>_API_KEY` 형식의 저장소 시크릿을 사용합니다(예: `STEPPER_ANTHROPIC_API_KEY`)',
                ],
            },
            {
                kind: 'heading',
                text: 'release.yml — 크로스 플랫폼 게시',
            },
            {
                kind: 'paragraph',
                text: '`prod` 브랜치로의 push 또는 수동 워크플로 dispatch로 트리거됩니다. 이 워크플로는 품질 검사 통과를 게이트로 삼아 최적화된 릴리스 바이너리를 빌드하고 GitHub Release에 게시합니다.',
            },
            {
                kind: 'subheading',
                text: '품질 게이트',
            },
            {
                kind: 'list',
                items: [
                    '`build` — `cargo build --workspace`로 컴파일합니다',
                    '`clippy -D warnings` — 경고 0개를 강제합니다',
                    '`test` — 전체 테스트 스위트를 실행합니다',
                ],
            },
            {
                kind: 'subheading',
                text: '릴리스 아티팩트',
            },
            {
                kind: 'paragraph',
                text: '이 워크플로는 세 가지 타깃 플랫폼용 바이너리를 빌드하고 게시합니다:',
            },
            {
                kind: 'list',
                items: ['macOS arm64 (Apple Silicon)', 'Linux x86_64', 'Windows x86_64'],
            },
            {
                kind: 'paragraph',
                text: '각 타깃에 대해 버전이 포함된 아카이브와 버전이 없는 아카이브를 모두 게시합니다:',
            },
            {
                kind: 'list',
                items: [
                    '버전 포함: `stepper-<version>-<target>.tar.gz` 또는 `.zip`(이름에 버전 포함)',
                    '버전 없음: `stepper-<target>.tar.gz` 또는 `.zip`(정적 호스팅을 위한 안정적인 URL)',
                ],
            },
            {
                kind: 'paragraph',
                text: '아카이브는 `v<version>` 태그가 붙은 GitHub Release에 게시되며, 버전은 `Cargo.toml`의 워크스페이스 버전에서 읽어옵니다. 새 릴리스를 만들려면 `Cargo.toml`의 버전을 올리면 됩니다. 동일한 버전을 다시 push하면 릴리스 에셋이 업데이트됩니다.',
            },
            {
                kind: 'subheading',
                text: '배포',
            },
            {
                kind: 'paragraph',
                text: '저장소가 공개되어 있으므로 최종 사용자는 최신 GitHub 릴리스에서 바이너리를 직접 다운로드합니다. §1에서 언급된 설치 스크립트(별도의 stepper.gumyo.net 사이트에 호스팅됨)는 `releases/latest/download`에서 플랫폼별 아카이브를 가져와 압축을 해제하고 `stepper` 바이너리를 `~/.local/bin`에 설치합니다.',
            },
        ],
    },
    {
        slug: 'architecture',
        title: '아키텍처',
        description:
            '10개 크레이트로 구성된 Cargo 워크스페이스 설계: 크레이트 역할, 격리 불변식, 그리고 CLI 부트스트랩부터 멀티 레이어 에이전트 오케스트레이션을 거쳐 TUI까지 이어지는 데이터 흐름.',
        blocks: [
            {
                kind: 'paragraph',
                text: 'stepper는 Rust로 작성된 레이어드 CLI/TUI AI 코딩 에이전트로, 10개 크레이트로 구성된 Cargo 워크스페이스 구조를 갖습니다. 이 페이지에서는 크레이트 구성, CLI 부트스트랩에서 에이전트 실행까지의 데이터 흐름, 그리고 깔끔한 아키텍처 경계를 보장하는 핵심 격리 불변식을 설명합니다.',
            },
            {
                kind: 'heading',
                text: '크레이트 개요',
            },
            {
                kind: 'paragraph',
                text: '워크스페이스에는 (원래 계획된 13개 중) 10개의 크레이트가 구현되어 있으며, 각각 시스템에서 고유한 책임을 맡습니다:',
            },
            {
                kind: 'table',
                head: ['크레이트', '역할'],
                rows: [
                    [
                        '`stepper-protocol`',
                        '채널 타입 및 DTO: `Action`(TUI→core), `AppEvent`(core→TUI), `ApprovalRequest`(oneshot). serde, uuid, tokio sync 프리미티브에만 의존합니다.',
                    ],
                    ['`stepper-tui`', '인라인 뷰포트를 갖춘 Ratatui 기반 TUI. `stepper-protocol`에만 의존합니다(여기에 ratatui 스택 추가).'],
                    [
                        '`stepper-cli`',
                        'Clap CLI 바이너리. RealCore를 연결하고(기본값=TUI 에이전트, `-p` 플래그=헤드리스 자동 승인 모드), `auth login`, `config`, `init` 명령과 MCP 서버 생명주기를 처리합니다.',
                    ],
                    [
                        '`stepper-provider`',
                        'LLM 프로바이더를 위한 트레이트 및 정규화 타입: `ChatRequest`, `Message`, `ContentBlock`, `ChatEvent`, `Usage`, `StopReason`, `ToolSpec`. HTTP를 포함하지 않으며 reqwest나 tokio-rt도 사용하지 않습니다.',
                    ],
                    [
                        '`stepper-providers`',
                        '구체적인 프로바이더 어댑터(Anthropic, OpenAI 호환, Responses), 인증(API 키, OAuth Codex), reqwest+SSE를 통한 스트리밍, 키링에 토큰 저장.',
                    ],
                    [
                        '`stepper-config`',
                        '설정 로딩: `.stepper/` 탐색, `setting.json` 딥 머지, frontmatter 파싱(YAML), 치환 엔진, 모델/프로바이더 해석, JSON 스키마 검증.',
                    ],
                    [
                        '`stepper-permission`',
                        '순수 권한 평가 엔진: `deny > ask > allow > mode` 우선순위, bash 리다이렉션/명령 파싱, 심볼릭 링크 탈출 방지, 경로 정규화.',
                    ],
                    [
                        '`stepper-tools`',
                        'Tool 트레이트 및 레지스트리. 9개의 내장 도구(read/write/edit/bash/search/grep/todo/web_fetch), MCP 도구 브리징, 비밀 경로 탐지, `ToolCx`를 통한 권한 게이팅.',
                    ],
                    [
                        '`stepper-mcp`',
                        'MCP 1.7 클라이언트(stdio/HTTP 전송), 도구 네임스페이싱, 타임아웃, 로컬 도구 레지스트리와의 통합. context7로 검증되었습니다.',
                    ],
                    [
                        '`stepper-core`',
                        '메인 오케스트레이터: 프로바이더 해석, `AgentLoop`(ReAct 패턴), 멀티 스텝 파이프라인, 병렬 레이어 실행, 세션/체크포인트 관리, 핸드오프 요약, 내장 슬래시 커맨드.',
                    ],
                ],
            },
            {
                kind: 'heading',
                text: '격리 불변식',
            },
            {
                kind: 'paragraph',
                text: '세 가지 엄격한 아키텍처 경계가 `cargo metadata` 분석을 사용하는 CI 테스트(`crates/stepper-cli/tests/isolation.rs`)를 통해 강제됩니다:',
            },
            {
                kind: 'list',
                items: [
                    '`stepper-tui`는 `stepper-protocol`에만 의존합니다(여기에 ratatui 추가). core, config, providers나 HTTP 접근은 없습니다.',
                    '`reqwest`와 HTTP는 `stepper-providers`, `stepper-tools`(web_fetch), `stepper-mcp`(HTTP 전송)에 한정됩니다. `stepper-protocol`과 `stepper-provider` 트레이트는 HTTP를 포함하지 않으며 tokio-rt도 사용하지 않습니다.',
                    '`stepper-protocol`은 clap을 사용하지 않습니다(채널 계약에 CLI 파싱이 없음).',
                ],
            },
            {
                kind: 'heading',
                text: '상위 수준 데이터 흐름',
            },
            {
                kind: 'code',
                lang: 'text',
                code: 'stepper-cli main.rs (#[tokio::main])\n  ├─ build_orchestrator(model, mode, cwd)\n  │    Config::load → build_steps(layer frontmatter+skills) → ensure_provider(convention fallback)\n  │    McpManager::connect(mcpServers) → register tools to base_tools\n  │    ConfigProviderResolver + RuleSet + HookHost\n  ├─ channels: mpsc<Action>(TUI→core) + mpsc<AppEvent>(core→TUI) + CancellationToken\n  ├─ stepper-core::spawn_core(orchestrator, session, action_rx, cancel) → event_rx  [RealCore]\n  │    while action:\n  │      SubmitInput → checkpoint_turn → Orchestrator.run_turn → session append/save\n  │      SlashCommand → commands::expand(substitution) → run_turn\n  │      Rewind → restore+turns truncate\n  │      RunShell → bash tool single-turn execution\n  │    Orchestrator.run_turn: SessionStart → step layers (sequence or parallel):\n  │      resolver.resolve(model) → Box<dyn LlmProvider>\n  │      base_tools.filtered(allow/deny).filter_mcp\n  │      ToolCx{cwd, project_root, mode, rules, approver=ChannelApprover, cancel}\n  │      AgentLoop.drive(system, handoff): stream→token/usage emit→compact→tool exec\n  │        (gate→approver) → result injection → repeat\n  │      emit: LayerStarted/Finished/ModelChanged/UsageUpdated/ToolCall* → handoff\n  └─ stepper-tui::run_tui(event_rx, action_tx, init, cancel)\n       blocking input thread(event::poll/read) → mpsc → select!{input, 33ms tick, AppEvent rx, cancel}\n       input → (mode-dependent) Action → AppState.apply_action → Effect(Send/CommitToScrollback)\n       ApprovalRequested(oneshot) → overlay y/a/n → reply.send (resumes agent loop)',
            },
            {
                kind: 'note',
                text: '`spawn_fake_core`(목)는 워킹 스켈레톤 테스트를 위해 `stepper-tui`에 남아 있으며, CLI는 오직 `RealCore`(`stepper-core::spawn_core`)만 사용합니다. 둘 다 동일한 채널 계약을 충족하므로 서로 교체 가능합니다.',
            },
            {
                kind: 'heading',
                text: '핵심 타입 및 계약',
            },
            {
                kind: 'list',
                items: [
                    '**채널 계약**(고정): `mpsc<Action>` + `mpsc<AppEvent>` + `CancellationToken`. RealCore와 목 모두 이를 충족합니다.',
                    '**`LlmProvider`**: `chat_stream(req, cancel) → BoxStream<ChatEvent>`를 구현합니다. 정규화는 `WireDelta` → `StreamAccumulator` → `ChatEvent` 경로로 이루어집니다.',
                    '**`Tool`**: `spec()` / `call(args, cx) → ToolResult`를 구현합니다. `ToolCx.gate(PermissionRequest)`가 권한 평가와 승인 게이팅을 강제합니다. 내장 도구와 MCP 도구가 동일한 트레이트를 사용합니다.',
                    '**`ProviderResolver`**: 모델 참조 → `Box<dyn LlmProvider>` + `ModelInfo`. `ConfigProviderResolver`가 구현합니다.',
                    '**`Approver`**(tools) → **`ChannelApprover`**(core): Ask 결정 시 `AppEvent::ApprovalRequested{oneshot}`를 발생시키고 → TUI 오버레이 → 사용자 응답 → 에이전트 루프를 재개합니다.',
                    '**Orchestrator / AgentLoop**: `run_turn` → 스텝 레이어(각각 독립된 컨텍스트, 프로바이더, 도구를 가짐) → `AgentLoop.drive`(ReAct 패턴). 핸드오프 = 자유 텍스트 요약 체인.',
                    '**세션 및 체크포인트**: `SessionStore`(`.stepper/sessions/<id>.json`), `Snapshotter`(`.stepper/checkpoints/<turn>/` 파일 복사). `--resume`는 `resume_context`를 시드하고, `Rewind`는 복원·정리·턴 절단을 수행합니다.',
                ],
            },
            {
                kind: 'heading',
                text: '고급 기능',
            },
            {
                kind: 'list',
                items: [
                    '**병렬 레이어**: `parallel: true`(그리고 선택적인 `parallel-max` 워커 상한)가 설정된 스텝은 오케스트레이터가 이전 레이어의 `assign_tasks` 목록을 워커들에게 팬아웃하게 만듭니다. 각 워커는 서브에이전트입니다. 태스크 목록이 없으면 순차 실행으로 폴백합니다.',
                    '**내장 슬래시 커맨드**: `/help`, `/clear`(세션 초기화), `/model [provider/model-id]`(검증 + 첫 스텝 전환 + `ModelChanged` 이벤트), `/context`(컨텍스트 윈도우 요약).',
                    '**스킬**: 레이어가 frontmatter에 `skills`를 선언하면, `SkillTool`을 통해 모델이 `skill { name }`을 호출하여 레이어별 스킬을 사용할 수 있습니다. 점진적 공개: 스킬 이름과 설명은 시스템 프롬프트에 노출되고, 본문은 필요 시 제공됩니다.',
                    '**dispatch 도구**(C4): 모델은 `dispatch(...)`를 호출하여 현재 레이어 이후로 병렬 서브에이전트(워커)를 생성할 수 있습니다. 오케스트레이터가 이를 활성화해야 하며, 서브에이전트는 재귀할 수 없습니다.',
                    '**프롬프트 캐싱**: `ChatRequest.cache: bool` 옵션이 Anthropic 프리픽스 캐싱을 활성화하며, 시스템 메시지는 `cache_control: ephemeral`로 래핑됩니다.',
                    '**모델 기반 컴팩션**: `compaction.provider`가 설정되어 있으면, 오케스트레이터는 소프트 임계값(컨텍스트의 0.70)에서 해당 프로바이더의 모델을 사용해 메시지 기록을 요약하며, 최근 6개 메시지는 그대로 유지합니다.',
                    '**권한 게이팅**: `ToolCx::gate(request)`는 모드(Auto/Plan/AcceptEdits)에 대해 규칙을 평가합니다. 리다이렉션/`$()`를 포함한 bash 원자는 Ask를 상향시켜 명시적 승인을 요구하게 합니다.',
                    '**MCP 타임아웃**: 연결 타임아웃(기본 10초, `STEPPER_MCP_CONNECT_TIMEOUT_MS`)은 시작 시 멈춘 서버를 방지합니다. 도구 호출 타임아웃(기본 120초, `STEPPER_MCP_TOOL_TIMEOUT_MS`)은 턴 중간 멈춤을 방지합니다.',
                ],
            },
            {
                kind: 'heading',
                text: '빌드 및 테스트',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'cargo check --workspace                       # Type check\ncargo clippy --workspace --all-targets        # Lint (0 warnings enforced)\ncargo test --workspace                        # full network-less suite (live mcp_live/e2e skip if env unset)\ncargo run                                     # Interactive TUI (real tty + API keys required)\ncargo run -- -p "..." --model anthropic/claude-x   # Headless one-shot (auto-approve)\ncargo run -- --resume <session-id>            # Resume session\ncargo run -- auth login --codex               # Codex OAuth login\ncargo run -- config --schema | --validate     # Settings schema/validation\ncargo run -- init                             # Scaffold .stepper/ (stepper.md + setting.json)',
            },
        ],
    },
    {
        slug: 'roadmap',
        title: '로드맵',
        description: 'stepper가 출시한 것, 실사용을 향해 다듬는 중인 것, 그리고 의도적으로 보류한 한계.',
        blocks: [
            {
                kind: 'paragraph',
                text: '이 페이지는 stepper의 전달 상태를 한눈에 정리한다: 출시된 기능, 일상적 사용을 향해 진행 중인 작업, 의도적으로 보류한 한계(사유 포함), 그리고 유지보수 후속 항목. 다른 페이지가 각 요소의 동작 방식을 다루고, 이 페이지는 상위 수준의 상태를 보여준다.',
            },
            {
                kind: 'heading',
                text: '출시됨',
            },
            {
                kind: 'paragraph',
                text: '구현·테스트 완료되어 현재 릴리스에서 사용할 수 있다.',
            },
            {
                kind: 'list',
                items: [
                    '**레이어드 파이프라인 & 멀티 프로바이더** — 오케스트레이터가 서브에이전트 레이어의 순서 있는 파이프라인으로 작업을 위임하며, 각 레이어는 자체 프로바이더·모델·새 컨텍스트 윈도우를 가진다. 순차 또는 병렬 팬아웃(`assign_tasks` + 라이브 워커 패널).',
                    '**권한 시스템** — `auto` / `plan` / `accept-edits` 모드, 영속 승인을 포함한 `allow` / `ask` / `deny` 규칙, 복합 bash 에스컬레이션, fail-closed 헤드리스 실행.',
                    '**인증** — 환경 변수 또는 OS 키링(`stepper auth set-key` / `delete-key`)을 통한 프로바이더 키, 그리고 Codex(ChatGPT) OAuth.',
                    '**세션 & 제어** — 세션 재개, 체크포인트 + `/rewind`, 모델 기반 컴팩션, 훅, 스킬(점진적 공개), 슬래시 커맨드, MCP(stdio/HTTP) 서버.',
                    '**옵트인 OS 샌드박스** — macOS Seatbelt 프로파일이 `bash` 도구의 쓰기를 프로젝트로 제한한다(권한 엔진 아래의 방어 심층).',
                    '**테스트 강화** — 격리 불변식 CI, core 통합 테스트(오케스트레이터, 컴팩션, 세션/되감기, 비용, 병렬 레이어, dispatch, 취소), 권한 매트릭스, TUI 렌더 스냅샷, 폐쇄형 MCP 에코, 프로바이더 픽스처 — 837개의 네트워크 비의존 테스트.',
                    '**라이브 엔드투엔드** — 2-레이어 파이프라인(ollama-cloud → oMLX), 스트리밍, `/rewind`, 재개가 실제 프로바이더 대상으로 검증되었다(`#[ignore]` + `STEPPER_E2E` 게이팅으로 유지되어 기본 `cargo test`는 건너뛴다).',
                ],
            },
            {
                kind: 'heading',
                text: '진행 중',
            },
            {
                kind: 'paragraph',
                text: '구현되었으나 라이브·일상 사용을 향해 아직 다듬는 중이다.',
            },
            {
                kind: 'list',
                items: [
                    '라이브 스트리밍 모델로 구동되는 인터랙티브 tty TUI(헤드리스 `-p` 경로와 오케스트레이터는 이미 라이브 검증됨).',
                    'Codex(ChatGPT) 백엔드 라이브 인증 및 스트리밍.',
                    '`/init` 스캐폴딩 개선과 `/rewind` / 재개 사용자 경험.',
                ],
            },
            {
                kind: 'heading',
                text: '보류됨 (수용된 한계)',
            },
            {
                kind: 'paragraph',
                text: '의도적으로 아직 처리하지 않은 알려진 한계와 그 사유.',
            },
            {
                kind: 'list',
                items: [
                    '**WriteFile TOCTOU 심볼릭 링크 교체** — 단일 사용자 개발 CLI 범위 밖.',
                    '**gix 기반 체크포인트** — 복사 방식 스냅샷터가 동작하며, git 백엔드는 추후 최적화.',
                    '**폐쇄형 키링 테스트** — CI에서 OS 키체인을 쓸 수 없어, 키링은 통합 테스트로만 유지.',
                    '**라이브 MCP HTTP 인증**과 `McpManager::connect` 성공 경로 — 둘 다 라이브 서버 필요.',
                    '**백그라운드 `!cmd &` 샌드박스 동등성** — 포그라운드 `bash` 도구는 제한되지만, 백그라운드 경로(`proc.rs`)는 TUI에서 쓰기 가능 루트를 전달해야 샌드박싱할 수 있다.',
                ],
            },
            {
                kind: 'heading',
                text: '유지보수',
            },
            {
                kind: 'list',
                items: [
                    '전이 의존성 `reqwest` 0.12 / 0.13 버전 중복 제거.',
                    'GitHub Actions 릴리스/배포 워크플로우를 제거 예정인 deprecated Node.js 20 액션에서 옮기기.',
                ],
            },
        ],
    },
]
