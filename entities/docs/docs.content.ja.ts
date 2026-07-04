import type { DocPage } from '@entities/docs/docs.type'

export const DOC_PAGES_JA: DocPage[] = [
    {
        slug: 'installation',
        title: 'インストール',
        description:
            '事前ビルドされたバイナリで stepper をインストールするか、ソースからビルドし、ガイド付きセットアップまたは環境変数のオーバーライドで初回起動を構成します。',
        blocks: [
            {
                kind: 'paragraph',
                text: '事前ビルドされたバイナリを使うか、開発用にソースからビルドするか、インストールディレクトリとダウンロード先をカスタマイズして stepper を始めましょう。初回起動時のガイド付きセットアップが、デフォルトモデルと権限モードの構成を支援します。',
            },
            {
                kind: 'heading',
                text: '事前ビルドされたバイナリ',
            },
            {
                kind: 'paragraph',
                text: 'Rust ツールチェーンを持たないエンドユーザーが stepper を最も手早くインストールする方法です。インストーラーは OS とアーキテクチャを検出して適切なアーカイブをダウンロードし、stepper を PATH に追加します。',
            },
            {
                kind: 'subheading',
                text: 'インストールコマンド',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: '# macOS / Linux\ncurl -fsSL https://stepper.gumyo.net/install-files/install.sh | bash\n# Windows (PowerShell)\nirm https://stepper.gumyo.net/install-files/install.ps1 | iex',
            },
            {
                kind: 'paragraph',
                text: 'インストーラーは `stepper` バイナリを `~/.local/bin`（Windows では `%USERPROFILE%\\.local\\bin`）に配置し、そのディレクトリを PATH に追加するようシェル構成を更新します。',
            },
            {
                kind: 'subheading',
                text: '環境変数',
            },
            {
                kind: 'paragraph',
                text: '次の環境変数で、ダウンロード先とインストールディレクトリをカスタマイズできます:',
            },
            {
                kind: 'table',
                head: ['環境変数', 'デフォルト', '用途'],
                rows: [
                    ['`STEPPER_DOWNLOAD_BASE_URL`', '`https://stepper.gumyo.net/install-files`', 'リリースアーカイブのホスティング先'],
                    ['`STEPPER_INSTALL_DIR`', '`~/.local/bin`', 'インストールディレクトリ'],
                ],
            },
            {
                kind: 'subheading',
                text: 'リリースアーカイブ',
            },
            {
                kind: 'paragraph',
                text: 'インストールスクリプトは、システムに合った適切なアーカイブをダウンロードします。次のアーカイブは、すべての `prod` リリースで、バージョン付きとバージョンなしの両方の形式で公開されます:',
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
                text: 'インストールスクリプトとバイナリは、このリポジトリとは別のプロジェクトでホスティングされています。`STEPPER_DOWNLOAD_BASE_URL` を別の場所に指定すれば、自分でホスティングしたアーカイブからダウンロードできます。',
            },
            {
                kind: 'heading',
                text: 'ソースからビルド',
            },
            {
                kind: 'paragraph',
                text: 'コントリビューターや開発者は、Rust 1.95 stable（edition 2024）を使って stepper をソースからビルドします。',
            },
            {
                kind: 'subheading',
                text: 'ビルドコマンド',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'scripts/install.sh                                  # cargo build + install to ~/.local/bin\nSTEPPER_INSTALL_DIR=/usr/local/bin sudo -E scripts/install.sh\ncargo install --path crates/stepper-cli             # installs `stepper`\ncargo build --release --bin stepper                 # binary at target/release/stepper\ncargo run                                           # run from source (interactive TUI)',
            },
            {
                kind: 'subheading',
                text: '品質ゲート',
            },
            {
                kind: 'paragraph',
                text: 'ビルドを検証するには、次のチェックをローカルで実行してください。CI でも同じゲートが実行されます:',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'cargo build --workspace\ncargo clippy --workspace --all-targets -- -D warnings\ncargo test --workspace            # live tests are #[ignore]/env-gated, so skipped',
            },
            {
                kind: 'heading',
                text: '初回起動',
            },
            {
                kind: 'paragraph',
                text: '`.stepper/` ディレクトリのないプロジェクトで stepper を起動すると、開始を支援するための短いガイド付きセットアップが実行されます。この対話型のプロセスで構成ファイルが作成されます。',
            },
            {
                kind: 'subheading',
                text: 'ガイド付きセットアップ',
            },
            {
                kind: 'paragraph',
                text: '初回起動時、stepper は次の項目を尋ねます:',
            },
            {
                kind: 'list',
                items: ['デフォルトモデルの選択', '権限モードの選択'],
            },
            {
                kind: 'paragraph',
                text: 'その後、セットアップは `.stepper/setting.json` と `.stepper/stepper.md` を書き込んでプロジェクトを構成します。',
            },
            {
                kind: 'subheading',
                text: 'セットアップのスキップまたはカスタマイズ',
            },
            {
                kind: 'paragraph',
                text: '`--no-init` フラグまたは `STEPPER_NO_INIT=1` 環境変数で、対話型のガイド付きセットアップをスキップできます。`stepper init` を実行すると、構成ファイルを非対話的にスキャフォールディングします:',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: '# Skip interactive setup\nstepper --no-init\n\n# Or set the environment variable\nSTEPPER_NO_INIT=1 stepper\n\n# Scaffold non-interactively\nstepper init',
            },
            {
                kind: 'paragraph',
                text: 'ヘッドレスモード（`-p` フラグを使用）は、プロンプトを完全にバイパスし、デフォルト値で実行し、構成ファイルを作成しません。',
            },
        ],
    },
    {
        slug: 'quickstart',
        title: 'クイックスタート & CLI',
        description: 'stepperを使い始め、CLIのコマンド、フラグ、モードを参照します。',
        blocks: [
            {
                kind: 'paragraph',
                text: '数分でstepperを起動して使い始められます。CLIはエージェントを使う3つの方法を提供します。対話型のTUI、ヘッドレスのワンショットプロンプト、または以前のセッションの再開です。それぞれに固有のコマンドとフラグがあります。',
            },
            {
                kind: 'heading',
                text: 'クイックサンプル',
            },
            {
                kind: 'paragraph',
                text: '以下のサンプルは、stepperを呼び出す最も一般的な方法を示しています。',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: '# Interactive TUI (needs a real terminal + an API key in the env):\nSTEPPER_ANTHROPIC_API_KEY=sk-... stepper --model anthropic/claude-sonnet-4\n\n# Headless one-shot (streams assistant text to stdout, auto-approves actions):\nstepper -p "add a README badge" --model ollama-cloud/qwen3-coder --mode auto\n\n# Resume a previous session:\nstepper --resume <session-id>',
            },
            {
                kind: 'paragraph',
                text: 'プロジェクトに`.stepper/`ディレクトリがあれば、引数なしで`stepper`を実行でき、設定済みのパイプライン、モデル、モードが使用されます。',
            },
            {
                kind: 'heading',
                text: 'CLIリファレンス',
            },
            {
                kind: 'paragraph',
                text: '完全な使用法の1行と、利用可能なすべてのコマンドおよびグローバルオプションです。',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper [OPTIONS] [COMMAND]',
            },
            {
                kind: 'subheading',
                text: 'コマンド',
            },
            {
                kind: 'table',
                head: ['Command', '動作'],
                rows: [
                    ['run', '対話型TUIを起動します（サブコマンドなしの場合のデフォルト）。'],
                    ['auth login --codex', 'Codexバックエンド用にChatGPTへサインインします（OAuth/PKCE）。'],
                    ['auth set-key <provider>', 'プロバイダーのAPIキーをOSキーリングに保存します（stdinから読み込み）。'],
                    ['auth delete-key <provider>', 'OSキーリングからプロバイダーのキーを削除します。'],
                    ['config --schema', '`setting.json`のJSON Schemaを出力します。'],
                    ['config --validate', 'プロジェクトの`setting.json`を検証します。'],
                    ['doctor', '統合診断を実行 — 設定・provider キー・モデル resolve・MCP・カタログ・最新リリースを一括チェック。'],
                    ['session rename <id> <name>', '保存されたセッション名をコマンドラインから変更します。'],
                    ['init', '`.stepper/`をスキャフォールドします（スタックを検出 → `stepper.md` + `setting.json`）。'],
                ],
            },
            {
                kind: 'subheading',
                text: 'グローバルオプション',
            },
            {
                kind: 'table',
                head: ['Flag', '意味'],
                rows: [
                    [
                        '--model <provider/model-id>',
                        'デフォルトモデル、例: `anthropic/claude-sonnet-4`、`ollama-cloud/qwen3-coder`、`omlx/deepseek-coder`。',
                    ],
                    ['--mode <auto|plan|accept-edits>', '権限モード（優先順位: フラグ > `setting.json`の`mode` > `accept-edits`）。'],
                    ['-p, --print <prompt>', 'ヘッドレスのワンショット: プロンプトを実行し、stdoutにストリーミングし、自動承認します。'],
                    ['--resume <session-id>', '保存されたセッションを続行します（以前のコンテキストをシードとして使用）。'],
                    ['--fallback-model <a,b,c>', '主モデルが失敗したときに順に試すカンマ区切りのモデルチェーン（CLI が `setting.json` より優先）。'],
                    ['--output-schema <inline|file>', 'ヘッドレス: 最終応答を JSON Schema に準拠させる（`--output-schema-retries`、既定 2）。'],
                    ['--cwd <dir>', '別のディレクトリを対象に実行します。'],
                ],
            },
            {
                kind: 'heading',
                text: '開始プロンプト & stdin',
            },
            {
                kind: 'paragraph',
                text: 'positional なプロンプトを渡すと、そのプロンプトでシードされた対話型 TUI がそのまま開きます。プロンプトを stdin でパイプすることもできます — `cat task.md | stepper`（ヘッドレスのワンショットは `| stepper -p`）。`-p` は値を与えなくても stdin をプロンプトとして読み取ります。',
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
        title: '構成',
        description:
            'camelCase JSON で stepper を構成します。ユーザーレベルのベース設定にプロジェクト設定がマージされ、プロバイダー、レイヤー、権限、MCP サーバーを扱います。',
        blocks: [
            {
                kind: 'paragraph',
                text: '`.stepper/setting.json` ファイルは stepper の動作とデフォルト値を構成します。設定は camelCase を使用し、前方互換性があります(未知のキーは無視されます)。ユーザーレベルの `~/.stepper/setting.json` がベース構成として機能し、その上にプロジェクト構成がディープマージされます。このとき、オブジェクトはマージされ、配列は置き換えられます。',
            },
            {
                kind: 'subheading',
                text: '構成スキーマ',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '{\n  "mode": "auto",                         // auto | plan | accept-edits (CLI --mode wins)\n  "defaultModel": "anthropic/claude-sonnet-4",\n  "step": ["plan", "implement"],          // the layer pipeline, in order\n\n  "providers": {\n    "anthropic": { "kind": "anthropic" },\n    "ollama-cloud": { "kind": "openai-compat", "baseUrl": "https://ollama.com/v1" },\n    "omlx": {\n      "kind": "openai-compat",\n      "baseUrl": "http://localhost:8000/v1",\n      "contextWindow": 128000             // override ctx% gauge for unlisted models\n    },\n    "codex": { "kind": "openai-responses", "auth": "codex-oauth" }\n  },\n\n  "orchestrator": { "model": "anthropic/claude-sonnet-4", "temperature": 0.2 },\n\n  "permissions": {                        // global rules (deny > ask > allow > mode)\n    "allow": ["Read(**)", "Bash(cargo *)"],\n    "ask":   ["Write(**)"],\n    "deny":  ["Bash(rm -rf *)", "Read(//etc/**)"]  \n  },\n  "approvals": [{ "rule": "Bash(npm run build)" }],   // persisted "always allow"\n\n  "mcpServers": {\n    "context7": {\n      "type": "stdio",\n      "command": "npx",\n      "args": ["-y", "@upstash/context7-mcp", "--api-key", "{env:CONTEXT7_KEY}"],\n      "alwaysLoad": true                  // visible to every layer regardless of mcp.allow\n    },\n    "my-http": {\n      "type": "http",\n      "url": "https://example/mcp",\n      "headers": { "Authorization": "Bearer {env:MY_TOKEN}" }\n    }\n  },\n\n  "hooks": {\n    "PreToolUse": [{ "matcher": "write_file", "command": "echo blocked >&2; exit 2" }]\n  },\n\n  "compaction": { "provider": "anthropic/claude-haiku-4" },  // model-summarize folded history\n  "dispatch":   { "enabled": true }       // expose the model-callable `dispatch` tool\n}',
            },
            {
                kind: 'subheading',
                text: 'スキーマ検証',
            },
            {
                kind: 'paragraph',
                text: '`stepper config --schema` を実行すると `setting.json` の完全な JSON Schema が出力されます。`stepper config --validate` を使用すると、プロジェクト構成をスキーマと照合して検証できます。',
            },
            {
                kind: 'subheading',
                text: '主な構成フィールド',
            },
            {
                kind: 'list',
                items: [
                    '`mode` — 権限モード: `auto`(プロジェクト内のアクションは実行され、プロジェクト外への書き込みは確認を求めます)、`plan`(読み取り専用; 編集はブロック)、`accept-edits`(プロジェクト内の編集は自動承認; 外部の読み取りは確認を求めます)。CLI `--mode` が優先されます。',
                    '`defaultModel` — デフォルトのモデルプロバイダーと ID(例: `anthropic/claude-sonnet-4`)。',
                    '`step` — パイプラインを構成するレイヤー名の配列で、順番に実行されます。',
                    '`providers` — `kind`(anthropic、openai-compat、openai-responses)と接続詳細を含むプロバイダー定義です。オプションの `contextWindow` は、リストにないモデルのコンテキストゲージを上書きします。',
                    '`orchestrator` — `model` と `temperature` を含む orchestrator レイヤーの構成です。',
                    '`permissions` — `allow`、`ask`、`deny` リストを持つグローバル権限ルールです。ルールは `Bash(npm run *)`、`Read(/path)`、`Write(**)`、`Mcp(server, tool)` のような指定子を使用します。',
                    '`approvals` — 永続化された承認ルール(「常に許可」の決定)の配列です。',
                    '`mcpServers` — MCP サーバー構成です。各サーバーは `type`(stdio または http)、接続詳細、およびレイヤースコープのフィルタリングをバイパスするオプションの `alwaysLoad` を指定します。',
                    '`hooks` — ツール実行をインターセプトする `PreToolUse` などのイベントフックです。',
                    '`compaction` — 履歴の折りたたみ(folding)構成で、折りたたまれた部分を要約する(安価な)`provider` モデルを指定します。',
                    '`dispatch` — 並列サブエージェントのために、モデルが呼び出せる `dispatch` ツールを有効にします。',
                ],
            },
        ],
    },
    {
        slug: 'providers',
        title: 'プロバイダーとキー',
        description: '環境変数、OSキーリング、または明示的な設定で5つのAIプロバイダーのAPIキーを構成します。',
        blocks: [
            {
                kind: 'paragraph',
                text: 'stepperは5つのAIプロバイダーをサポートします。APIキーは明示的な設定、環境変数、またはOSキーリングを通じて構成できます。優先順位が重要であり、各プロバイダーごとに認証要件が異なります。',
            },
            {
                kind: 'subheading',
                text: 'サポートするプロバイダー',
            },
            {
                kind: 'list',
                items: [
                    '`ollama-cloud` — Ollamaクラウドモデル',
                    '`oMLX` — `localhost:8000/v1`で動作するローカルのApple-Silicon MLX。認証はオプションです',
                    '`OpenAI` — OpenAI API',
                    '`Anthropic` — Anthropic Claudeモデル',
                    '`Codex` — OAuth経由のChatGPT',
                ],
            },
            {
                kind: 'subheading',
                text: 'キーの優先順位',
            },
            {
                kind: 'paragraph',
                text: 'stepperは次の順序でAPIキーを探します: 設定内の明示的な`apiKey` → `STEPPER_<PROVIDER>_API_KEY` 環境変数 → well-known なベンダー環境変数（例: `ANTHROPIC_API_KEY`、`OPENAI_API_KEY`） → OSキーリング。最初に一致したものが採用されます。',
            },
            {
                kind: 'subheading',
                text: '環境変数でキーを設定する',
            },
            {
                kind: 'paragraph',
                text: '`STEPPER_<PROVIDER>_API_KEY`という規約を使用します。ここでプロバイダー名は大文字に変換し、ハイフンはアンダースコアに置き換えます。',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: "# Env var: STEPPER_<PROVIDER>_API_KEY  (provider uppercased, '-' → '_')\nexport STEPPER_ANTHROPIC_API_KEY=sk-ant-...\nexport STEPPER_OLLAMA_CLOUD_API_KEY=...",
            },
            {
                kind: 'subheading',
                text: 'well-known なベンダーキー',
            },
            {
                kind: 'paragraph',
                text: 'stepper は標準的なベンダー環境変数も認識するため、Claude Code（や他のツール）から移行したユーザーは keyless ですぐに始められます。認識されるキーには `ANTHROPIC_API_KEY`、`OPENAI_API_KEY`、`GROQ_API_KEY`、`GEMINI_API_KEY`、`MISTRAL_API_KEY`、`XAI_API_KEY`、`DEEPSEEK_API_KEY`、`OPENROUTER_API_KEY` があります。同じプロバイダーに `STEPPER_<PROVIDER>_API_KEY` があれば、well-known な変数より優先されます。',
            },
            {
                kind: 'subheading',
                text: 'OSキーリングにキーを保存する',
            },
            {
                kind: 'paragraph',
                text: 'keyringコマンドを使ってキーを安全に保存・管理します。キーリングはシステムの資格情報マネージャー(macOSのKeychain、Linuxのsecret-service、WindowsのCredential Manager)にキーを保存します。',
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
                text: 'Codexプロバイダー(ChatGPT)を使用するには、OAuthで認証します。この過程でブラウザが開き、資格情報がローカルに保存されます。',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: '# Codex (ChatGPT) OAuth — opens a browser, stores ~/.stepper/codex-auth.json (0600):\nstepper auth login --codex',
            },
            {
                kind: 'subheading',
                text: 'oMLXのローカルセットアップ',
            },
            {
                kind: 'paragraph',
                text: 'localhostで動作するoMLXは通常APIキーが不要で、外部依存のないローカル開発に最適です。',
            },
            {
                kind: 'note',
                text: 'キーの優先順位は設定内の明示的な`apiKey` > `STEPPER_<PROVIDER>_API_KEY` > well-known なベンダー環境変数 > OSキーリングの順です。stepperを実行する前に必ずキーを設定してください。そうしないと、いずれかのレイヤーが未構成のプロバイダーのモデルを要求した際に実行時に失敗します。',
            },
        ],
    },
    {
        slug: 'layers',
        title: 'レイヤー',
        description:
            'レイヤーごとにモデル、権限、ツール、スキルを構成し、レイヤーを順次実行するか、タスク割り当てを伴う並列ファンアウトで実行します。',
        blocks: [
            {
                kind: 'paragraph',
                text: 'レイヤーはパイプラインを構成する個々のステップエージェントであり、それぞれが独自のサブプロセス内で固有のプロバイダー、モデル、そして新しいコンテキストウィンドウを持って実行されます。レイヤーは `setting.json` の `step` 配列で指定された順序で実行されます。各レイヤーからは自由テキストの要約のみが次のレイヤーに引き渡され、会話履歴全体やツール出力は引き渡されません。',
            },
            {
                kind: 'heading',
                text: 'レイヤーファイルの構造',
            },
            {
                kind: 'paragraph',
                text: '`step` に含まれる各名前は、`.stepper/layer/<name>/index.md` にレイヤーファイルを持つことができます。このファイルは YAML frontmatter ブロック（構成）に続いてレイヤーのシステムプロンプト本文が記述される構造です。',
            },
            {
                kind: 'code',
                lang: 'markdown',
                code: '---\ndescription: implementation layer        # required\nmodel: omlx/deepseek-coder               # or provider: + the default model\ntemperature: 0.2                         # sampling overrides → the request\ntop_p: 0.9\ntools:\n  allow: [read_file, write_file, edit_file, bash]\n  deny:  [web_fetch]\npermission:                              # per-layer overrides (tighten-only)\n  Bash(rm *): deny\n  Write(**): ask\nmcp:\n  allow: [context7]                      # which MCP servers this layer sees\nskills: [rust-style]                     # skill bodies injected into the system prompt\nsteps: 40                                # step cap (ReAct iterations)\non-failure: skip                         # stop (default) | skip the layer and continue\nretries: 1                               # extra attempts before applying on-failure\ncolor: green\n---\nYou are the implementation layer. Carry out the plan using the tools.',
            },
            {
                kind: 'subheading',
                text: 'Frontmatter フィールド',
            },
            {
                kind: 'list',
                items: [
                    '`description`（必須）— レイヤーの役割に関する簡潔な説明です。',
                    '`model` または `provider` — このレイヤーのデフォルトモデルを上書きします。`provider/model-id` 形式を使用します（例: `omlx/deepseek-coder`）。',
                    '`temperature` と `top_p` — API リクエストに渡されるサンプリングパラメーターです。',
                    '`tools.allow` と `tools.deny` — このレイヤーが呼び出せるツール（例: `read_file`、`write_file`、`bash`）を制御します。',
                    '`permission` — グローバルルールとマージされるレイヤーごとの権限ルールで、制限を強化することのみ可能です（下記セクションを参照）。',
                    '`mcp.allow` — このレイヤーがアクセスできる MCP サーバーのリストです（例: `[context7]`）。',
                    '`skills` — このレイヤーで利用可能なスキル名の配列で、本文は必要に応じて遅延ロードされます。',
                    '`steps` — レイヤーが停止するまでの ReAct イテレーションの最大回数です。',
                    '`on-failure` — `stop`（デフォルト; パイプラインを停止）または `skip`（次のレイヤーに進む）のいずれかです。',
                    '`retries` — `on-failure` が適用される前に追加で試行する回数です。',
                    '`color` — レイヤー用のオプションの TUI カラーラベルです。',
                ],
            },
            {
                kind: 'subheading',
                text: '権限の強化',
            },
            {
                kind: 'paragraph',
                text: 'レイヤーごとの `permission` ルールはグローバルルールの上にマージされ、`deny > ask > allow` の解決順序に従います。つまり、レイヤーは制限を**強化**することのみ可能であり、ベースの `deny` ルールを緩和することはできません。たとえば、グローバル構成が `Bash(rm *)` を拒否している場合、レイヤーがそれを許可することはできませんが、グローバルに許可されたツールに対してレイヤーが確認を求めるようにすることはできます。',
            },
            {
                kind: 'heading',
                text: '並列レイヤー（ファンアウト）',
            },
            {
                kind: 'paragraph',
                text: 'レイヤーはファンアウトとして実行できます。サブタスクごとに 1 つの並行ワーカーが、それぞれ独自の新しいコンテキストウィンドウと同じレイヤー構成を持って実行され、次のレイヤーが結果を処理する前にすべて結合されます。並列実行を有効にするには、レイヤーに `parallel: true` を指定します。',
            },
            {
                kind: 'subheading',
                text: 'タスク割り当て',
            },
            {
                kind: 'paragraph',
                text: '並列レイヤーの**直前**のレイヤーには `assign_tasks` ツールが提供されます。このレイヤーは `assign_tasks({ tasks: [{label, prompt}, …] })` を呼び出して作業をサブタスクに分割します。各サブタスクは並列レイヤーの 1 つのワーカーになります。直前のレイヤーがタスクを割り当てない場合、並列レイヤーはタスクコンテキストなしで 1 回だけ実行されます。',
            },
            {
                kind: 'subheading',
                text: '並行性とワーカーパネル',
            },
            {
                kind: 'paragraph',
                text: '`parallel-max` を使用すると、同時に実行されるワーカー数を制限できます（例: `parallel-max: 4`）。これは並行性を制限するだけで、タスクを破棄することはありません。タスクはキューに入り、ワーカーが終了するにつれて実行されます。TUI はワーカーごとに 1 行を表示するライブの**ワーカーパネル**を表示し、現在のステータス、最後に呼び出されたツール、トークン数を示します。すべてのワーカーが終了すると、それぞれの要約が次のレイヤー向けの単一のハンドオフへと収束します。',
            },
            {
                kind: 'code',
                lang: 'markdown',
                code: '---\ndescription: implementation layer\nparallel: true            # fan out — one worker per assigned subtask\nparallel-max: 4           # max workers running AT ONCE (concurrency cap; no task is dropped)\nmodel: omlx/deepseek-coder\ntools:\n  allow: [read_file, write_file, edit_file, bash]\n---\nYou are one implementation worker. Complete only your assigned subtask, then\nend with a concise summary of what you changed.',
            },
            {
                kind: 'subheading',
                text: 'ワークフローの例',
            },
            {
                kind: 'paragraph',
                text: '`step: ["plan", "implement", "test"]` で `implement` に `parallel:` が指定されている場合、`plan` レイヤーは要約を出力し、`assign_tasks` を呼び出して作業を実装サブタスクに分割します。各サブタスクは完全なレイヤー構成を持つ 1 つの `implement` ワーカーを起動します。すべてのワーカーが完了すると、`test` はすべてのワーカーの変更がマージされた要約を受け取ります。モデルから呼び出し可能な `dispatch` ツール（`dispatch.enabled: true` の場合）は、そのサブエージェントに同じワーカーパネルを使用します。',
            },
        ],
    },
    {
        slug: 'permissions',
        title: '権限',
        description: 'エージェントのツールアクセスを制御する権限モードとルール指定子。',
        blocks: [
            {
                kind: 'paragraph',
                text: '権限モードは、一致する明示的なルールがない場合にエージェントがツール使用をどう扱うかを制御します。ルールは、どのコマンド・ファイルパス・MCP ツールを許可・確認・拒否するかを指定し、ワイルドカード、複合コマンド、リダイレクトをサポートします。',
            },
            {
                kind: 'heading',
                text: '権限モード',
            },
            {
                kind: 'list',
                items: [
                    '`auto` — デフォルトのモード。読み取り専用ツールはどこでも確認なしに実行され、プロジェクト内の編集は自動適用され、プロジェクト外への書き込みだけが確認を求めます。',
                    '`plan` — 読み取り専用で、編集はブロックされます。',
                    '`accept-edits` — プロジェクト内の編集は自動的に受け入れられ、外部の読み取りは確認を求めます。',
                ],
            },
            {
                kind: 'heading',
                text: 'ルール指定子',
            },
            {
                kind: 'paragraph',
                text: 'ルールはグローバルな `permissions` オブジェクトとレイヤーごとの `permission` オーバーライドで使用されます。リゾルバーは deny > ask > allow > モードのデフォルトの順にルールを適用します。',
            },
            {
                kind: 'table',
                head: ['形式', '一致対象'],
                rows: [
                    ['`Bash(npm run *)`', 'bash コマンド（`*` ワイルドカード、末尾の `:*` = プレフィックス）。'],
                    ['`Read(//etc/**)`', 'ファイル読み取りパス（`/`=プロジェクトルート、`//`=絶対パス、`~/`=ホーム）。'],
                    ['`Write(**)`', 'ファイル書き込みパス（同じパス構文）。'],
                    ['`Edit(**)`', 'ファイル編集パス（同じパス構文）。'],
                    ['`Mcp(server, tool)`', 'MCP ツール（`tool` は任意 / 任意のツールには `*`）。'],
                    ['`Bash`（引数なし）', 'そのツールの任意の bash コマンド。'],
                    ['`Web*`、`*`', 'ツール名の glob — ツール系統（`Web*`）やすべてのツール（`*`）にマッチ。'],
                ],
            },
            {
                kind: 'heading',
                text: '複合 bash のエスカレーション',
            },
            {
                kind: 'note',
                text: '複合 bash（`a && b`）はコンポーネントごとにゲートされ（最も制限的なものが優先）、リダイレクト / `$()` / バッククォート / `&` を含む bash コマンドは `allow` を `ask` にエスカレーションします。',
            },
            {
                kind: 'heading',
                text: 'プロセスラッパーの strip',
            },
            {
                kind: 'paragraph',
                text: 'ルールを照合する前に、stepper はよくあるコマンドラッパーを剥がして内部のコマンドまでゲートします。`sudo rm`、`timeout 5 rm`、`env X=1 rm`、`nice`、`nohup`、`xargs` はすべて包まれたコマンドに還元されるため、`rm` に対する `deny` はラッパーで回避されることなくそれらすべてを捕捉します。',
            },
            {
                kind: 'heading',
                text: '実行される dotfile の保護',
            },
            {
                kind: 'paragraph',
                text: '`auto` / `accept-edits` モードでも、実行または source される設定ファイル — `.bashrc`、`.zshenv`、`.profile`、`.envrc`、`.gitconfig`、`.git/hooks/*` — の編集は決して自動承認されず、明示的な Ask に格上げされます（bypass モードでは完全に Deny）。シークレットファイル（`.env`、`id_rsa`、`*.pem`）は読み取り・書き込みの両方とも引き続き完全にブロックされます。',
            },
        ],
    },
    {
        slug: 'extensibility',
        title: 'スラッシュコマンド、スキル & MCP',
        description: '組み込みスラッシュコマンド、権限ゲート付き置換を備えたカスタムコマンド、段階的開示を行うスキル、そしてMCPサーバー統合。',
        blocks: [
            {
                kind: 'paragraph',
                text: 'stepperの機能は3つのメカニズムで拡張できます。インプロセスで実行される組み込みおよびカスタムのスラッシュコマンド、コンテキストを軽量に保つためにオンデマンドでロードされるスキル、そしてサンドボックス化されたツールアクセスを提供するMCPサーバーです。すべてのカスタムコンテンツはfail-closedセマンティクスで権限ゲートされ、機密性の高い操作には明示的なallowルールが必要です。',
            },
            {
                kind: 'heading',
                text: '組み込みスラッシュコマンド',
            },
            {
                kind: 'paragraph',
                text: '以下のコマンドはインプロセスで処理され、エージェントターンを実行しません:',
            },
            {
                kind: 'list',
                items: [
                    '`/help` — 利用可能なすべてのコマンドを一覧表示',
                    '`/clear` — 会話/セッションをリセット',
                    '`/model [provider/model-id]` — アクティブなモデルを表示するか、新しいモデルに切り替える(すべてのレイヤーに適用する前に検証される)',
                    '`/context` — アクティブなモデルのコンテキストウィンドウを表示',
                    '`/rename <name>` — 現在のセッション名を変更(セッションファイルに永続化)',
                    '`/export [path]` — セッションの会話を Markdown トランスクリプトに保存(既定は `.stepper/exports/<id>.md`)',
                    '`/rewind [code|conversation]` — 以前のスナップショットを復元; ファイルツリー/会話に範囲を絞るか、引数なしで両方を復元',
                    '`/copy` — 最後のアシスタント応答を OS クリップボードにコピー',
                    '`/code-review [ref | #pr] [--fix]` — diff を単一パスでレビュー（既定は uncommitted な変更）; `--fix` は確定した findings を適用',
                ],
            },
            {
                kind: 'heading',
                text: 'カスタムスラッシュコマンド',
            },
            {
                kind: 'paragraph',
                text: 'カスタムコマンドは `.stepper/commands/<name>.md` ファイルに配置します。各ファイルはYAML frontmatter(メタデータ)と、それに続く置換をサポートするテンプレート本文で構成されます。',
            },
            {
                kind: 'subheading',
                text: 'ファイル形式と呼び出し',
            },
            {
                kind: 'paragraph',
                text: 'TUIでは `/` を入力するとパレットが開き、項目を選択し、↑↓で移動し、Tabで補完し、Enterで実行できます。`/name args` の形式で呼び出します。組み込みコマンドは同名のカスタムコマンドファイルより優先されます。',
            },
            {
                kind: 'subheading',
                text: '置換構文',
            },
            {
                kind: 'paragraph',
                text: 'コマンドテンプレートは以下の置換をサポートします:',
            },
            {
                kind: 'list',
                items: [
                    '`!`shell`` — インラインシェルコードブロック',
                    '`$1`, `$2`, … — コマンド呼び出しからの位置引数',
                    '`{file:path}` または `@include path` — 指定したパスのファイルを読み込む',
                    '`{env:VAR}` — 環境変数を展開',
                ],
            },
            {
                kind: 'subheading',
                text: '権限ゲーティング(fail-closed)',
            },
            {
                kind: 'note',
                text: 'すべての置換はfail-closedセマンティクスで権限ゲートされます。これにより、仕込まれたコマンドファイルが検証されていないシェル、ファイル、シークレットへのアクセスをプロンプトに紛れ込ませることを防ぎます。',
            },
            {
                kind: 'list',
                items: [
                    '`!`shell`` ブロックは明示的な `allow` ルールが一致した場合にのみ実行されます(例: `"allow": ["Bash(git diff)"]`)',
                    '`{file:…}` および `@include` の読み込みは `Read` ルールでゲートされます',
                    'シークレットパターン(`*_API_KEY`, `*_TOKEN`, `AWS_*`, …)に一致する環境変数は `{env:…}` で展開されることは決してありません',
                    '`.stepper/` 配下への書き込みは `accept-edits` モードであっても常に明示的な承認が必要です — このディレクトリがエージェント自身のセキュリティを制御するためです',
                ],
            },
            {
                kind: 'heading',
                text: 'スキル',
            },
            {
                kind: 'paragraph',
                text: 'スキルはClaude-Code方式の段階的開示パターンに従います。システムプロンプトはスキルの名前と説明のみを提示し、モデルは必要に応じてその全文をロードします。これによりベースのコンテキストウィンドウを軽量に保ちます。',
            },
            {
                kind: 'subheading',
                text: 'ファイル形式',
            },
            {
                kind: 'paragraph',
                text: 'スキルは `.stepper/skills/<name>/SKILL.md` に保存され、`name` と `description` キーを含むYAML frontmatterと、それに続くスキル本文で構成されます。',
            },
            {
                kind: 'subheading',
                text: 'スキルの宣言と使用',
            },
            {
                kind: 'paragraph',
                text: 'レイヤーは自身のfrontmatter `skills:` リストで、使用できるスキルを宣言します。モデルがスキルを必要とするとき、`{"name":"<skill>"}` を指定して `skill` ツールを呼び出し、全文をロードします。skillツールはレイヤーごとにスコープされ、そのレイヤーが宣言したスキルのみを提供します。スキルはファンアウトワーカーでも利用できます。',
            },
            {
                kind: 'heading',
                text: 'MCP(Model Context Protocol)サーバー',
            },
            {
                kind: 'paragraph',
                text: 'MCPサーバーはstepperのレイヤーにツールとリソースを提供します。`setting.json` の `mcpServers` 配下でグローバルに構成され、stdioまたはHTTPサーバーとして実行できます。',
            },
            {
                kind: 'subheading',
                text: '構成',
            },
            {
                kind: 'paragraph',
                text: '`.stepper/setting.json` でMCPサーバーを定義します:',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"mcpServers": {\n  "context7": {\n    "type": "stdio",\n    "command": "npx",\n    "args": ["-y", "@upstash/context7-mcp", "--api-key", "{env:CONTEXT7_KEY}"],\n    "alwaysLoad": true                  // visible to every layer regardless of mcp.allow\n  },\n  "my-http": {\n    "type": "http",\n    "url": "https://example/mcp",\n    "headers": { "Authorization": "Bearer {env:MY_TOKEN}" }\n  }\n}',
            },
            {
                kind: 'subheading',
                text: 'ツールの名前空間とスコープ',
            },
            {
                kind: 'list',
                items: [
                    'MCPサーバーのツールは `mcp__<server>__<tool>` という形式で名前空間が付与されます',
                    'すべてのMCPツールの使用は権限ルールでゲートされます',
                    'レイヤーごとのスコープ: レイヤーは自身のレイヤー構成にある `mcp.allow` リストを通じて、使用できるMCPサーバーを宣言します',
                    '`alwaysLoad: true` — レイヤーごとのスコープをバイパスし、`mcp.allow` に関係なくすべてのレイヤーからサーバーを見えるようにします',
                ],
            },
            {
                kind: 'subheading',
                text: 'HTTPサーバーヘッダー',
            },
            {
                kind: 'paragraph',
                text: 'HTTPサーバーは `headers` オブジェクトをサポートします。`Authorization` ヘッダーは特別にルーティングされ、その他のヘッダーはサーバーへのリクエストに含まれます。',
            },
        ],
    },
    {
        slug: 'features',
        title: 'セッションとその他の機能',
        description:
            'レイヤード AI コーディングワークフローのための dispatch、コンパクション、チェックポイント、セッション、フック、インタラプト、プロンプトキャッシングの各機能。',
        blocks: [
            {
                kind: 'paragraph',
                text: 'stepper は、レイヤード AI エージェントの動作を拡張・調整するための高度なセッション管理、コンテキスト最適化、ワークフロー制御機能を提供します。',
            },
            {
                kind: 'heading',
                text: 'Dispatch ツール',
            },
            {
                kind: 'paragraph',
                text: '設定で `dispatch` を有効にすると、モデルが並列のサブエージェントをファンアウトできるようになります。各サブエージェントは独自のコンテキストウィンドウで実行され、その要約が呼び出し元に返されます。ファンアウトの実行中、TUI はリアルタイムの **ワーカーパネル** を表示します（ワーカーごとに 1 行：ステータス、最後のツール、トークン数）。',
            },
            {
                kind: 'paragraph',
                text: '`.stepper/setting.json` で設定します:',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"dispatch": { "enabled": true }',
            },
            {
                kind: 'heading',
                text: 'コンパクション',
            },
            {
                kind: 'paragraph',
                text: '会話履歴がコンテキストウィンドウの約 70% を超えると、stepper は領域を確保するために以前のメッセージを自動的に畳み込みます。`compaction.provider` が設定されている場合は、指定された（通常は安価な）モデルが畳み込まれた部分を要約し、設定されていない場合はヒューリスティックなマーカーが使用されます。',
            },
            {
                kind: 'paragraph',
                text: 'コンパクション用モデルを設定します:',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"compaction": { "provider": "anthropic/claude-haiku-4" }',
            },
            {
                kind: 'heading',
                text: 'チェックポイントと巻き戻し',
            },
            {
                kind: 'paragraph',
                text: '毎ターン、作業ツリーの状態が自動的にスナップショットされます。`/rewind` コマンドを使うと、以前のスナップショットを復元してその時点でセッションを切り詰められるため、変更を取り消して以前の状態から分岐できます。復元の範囲は `/rewind code`（ファイルツリーのみ）や `/rewind conversation`（会話のみ）で絞れ、引数なしの `/rewind`（および Esc-Esc）は両方を復元します。',
            },
            {
                kind: 'heading',
                text: 'セッションと再開',
            },
            {
                kind: 'paragraph',
                text: 'セッション状態は `.stepper/sessions/<id>.json` に永続化されます。`--resume` フラグで以前のセッションを再開すると、以前のセッションのコンテキストで新しい実行をシードします:',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper --resume <session-id>',
            },
            {
                kind: 'heading',
                text: 'フック',
            },
            {
                kind: 'paragraph',
                text: 'ライフサイクルフックを設定して、セッションの重要なタイミングでシェルコマンドを実行できます。フックは `.stepper/setting.json` の `hooks` キーの下にイベント単位で定義し、一致したペイロードが JSON として stdin に渡されます。終了コードが 0 以外の場合、対応する操作がブロックされます（例：`PreToolUse`）。ライフサイクルは 9 つのイベントを対象とします:',
            },
            {
                kind: 'list',
                items: [
                    '`SessionStart` — セッションの開始時に実行されます',
                    '`UserPromptSubmit` — プロンプトを送信したときに実行されます',
                    '`PreToolUse` — ツールが呼び出される前に実行され、0 以外の終了コードはツールをブロックします',
                    '`PostToolUse` — ツールの完了後に実行されます',
                    '`PreCompact` — 履歴が畳み込まれる前に実行されます',
                    '`SubagentStop` — 並列レイヤーのワーカー、または `task` / `dispatch` サブエージェントの完了時に実行されます',
                    '`Notification` — 通知イベント時に実行されます',
                    '`Stop` — ターンが停止したときに実行されます',
                    '`SessionEnd` — セッションの終了時に実行されます',
                ],
            },
            {
                kind: 'paragraph',
                text: 'フック設定の例:',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"hooks": {\n  "PreToolUse": [{ "matcher": "write_file", "command": "echo blocked >&2; exit 2" }]\n}',
            },
            {
                kind: 'paragraph',
                text: '各フックは `timeout`（秒）を設定して既定の 30 秒の上限を引き上げられます — `Stop` フックでのフォーマッターやテスト実行に便利です。フックプロセスには環境変数として `$STEPPER_PROJECT_DIR` と `$CLAUDE_PROJECT_DIR`（どちらもプロジェクトルート）が注入されます。`PreToolUse` を除くすべてのイベントでは、あるフックが non-zero で終了しても一致した残りのフックがすべて実行され、`PreToolUse` だけが最初のブロック終了で短絡します。',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"hooks": {\n  "Stop": [{ "matcher": "*", "command": "cargo fmt && cargo test", "timeout": 120 }]\n}',
            },
            {
                kind: 'heading',
                text: 'インタラプト',
            },
            {
                kind: 'paragraph',
                text: '実行中のターンで `Esc` を押すと実行をキャンセルします。これはセッションを終了させることなく、ストリームと処理中のすべてのツール呼び出しを中断し、プロンプトは直ちに次の入力を受け付けられる状態になります。',
            },
            {
                kind: 'heading',
                text: 'プロンプトキャッシング',
            },
            {
                kind: 'paragraph',
                text: 'レイヤーごとのシステムプロンプトとツールのプレフィックスは、Anthropic API 呼び出しに対してキャッシュ可能としてマークされるため、ReAct ループ内で繰り返されるリクエストはキャッシュ読み取り料金の恩恵を受けます。OpenAI および Responses 互換プロバイダーは、プレフィックス単位で自動的にキャッシュします。',
            },
            {
                kind: 'heading',
                text: 'TUI キーボードショートカット',
            },
            {
                kind: 'table',
                head: ['キー', 'アクション'],
                rows: [
                    ['`Enter`', '現在のプロンプトを送信'],
                    ['`Shift+Enter`', '送信せずに改行を挿入'],
                    ['`Shift+Tab`', '権限モードを切り替え（`auto` → `plan` → `accept-edits` → `auto`）'],
                    ['`Esc`', '現在のターンをインタラプト（ストリームと処理中のツールを中断）'],
                    ['`Ctrl+C`', 'TUI を終了'],
                    ['`Ctrl+E`', '外部エディターでプロンプトを編集'],
                    ['`↑` / `↓`', 'コマンド履歴から前/次のプロンプトを recall（先頭/末尾の行で）'],
                    ['`Ctrl+R`', '逆方向の履歴検索オーバーレイを開く'],
                    ['`!cmd`', 'シェルコマンドを実行'],
                    ['`@`', 'ファイルピッカーを開く'],
                    ['`/`', 'コマンドパレットを開く'],
                    ['`y`（承認オーバーレイ）', 'この操作を一度だけ許可'],
                    ['`a`（承認オーバーレイ）', 'この操作を常に許可'],
                    ['`n`（承認オーバーレイ）', '操作を拒否'],
                ],
            },
            {
                kind: 'heading',
                text: 'apply_patch ツール',
            },
            {
                kind: 'paragraph',
                text: 'apply_patch ツールは、構造化された複数ファイルのパッチ（Add / Update / Delete / Move、`@@` コンテキストハンクとファジーマッチング付き）をアトミックに適用します。まずすべての変更を検証し、いずれかのハンクが失敗したりゲートが拒否されたりした場合は何も書き込みません。',
            },
            {
                kind: 'heading',
                text: '編集時のフォーマットと LSP',
            },
            {
                kind: 'paragraph',
                text: 'オプトインの format-on-edit は、ファイル編集ツールの実行後に組み込みカタログ（rustfmt、gofmt、prettier、ruff、biome、…）から一致するフォーマッターを実行します。インストール済みの言語サーバーからの LSP 診断は編集後に収集され、ツール結果に追記されます。どちらもデフォルトでは無効で、setting.json の formatter / lsp キーで有効化します。',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"formatter": true,\n"lsp": true',
            },
            {
                kind: 'heading',
                text: '名前付きサブエージェント',
            },
            {
                kind: 'paragraph',
                text: '再利用可能なサブエージェントは `.stepper/agents/<name>/index.md`（モデル、ツール、システムプロンプト）で定義します。呼び出しは task ツールで行うか、プロンプトから `#<name>` でインラインに呼び出します（型先行ピッカーが一覧を表示します）。各サブエージェントは新しいコンテキストを持つ独自のサブエージェントとして実行され、Task 権限ルールでゲートされます。',
            },
            {
                kind: 'heading',
                text: 'Undo / redo',
            },
            {
                kind: 'paragraph',
                text: '`/undo` は直前のターンを取り消し、作業ツリーをそのターンの直前のチェックポイントへ復元し、そのターンを破棄します。取り消し前にスナップショットを取るため、`/redo` で再適用できます（どちらも複数ステップ対応）。新しいターンの開始（または `/rewind`、`/resume`、`/clear`、`/compact`）はタイムラインを分岐させ、redo スタックを無効化します。',
            },
            {
                kind: 'heading',
                text: '通知',
            },
            {
                kind: 'paragraph',
                text: 'setting.json で notification を設定すると、ターンの完了時、承認待ち時、ターンのエラー時にターミナルベルを鳴らせます。3 つすべてを有効にするには true を、トリガーを選ぶにはオブジェクトを指定します。デフォルトでは無効で、ポータブルなターミナルベルのみ（OS 通知はありません）です。',
            },
            {
                kind: 'heading',
                text: 'プロキシとプライベート CA',
            },
            {
                kind: 'paragraph',
                text: '送信 HTTP は標準の HTTP(S)_PROXY / NO_PROXY 環境変数を尊重します。環境変数を使えない構成では、setting.json に明示的なプロキシ（http / https / all / noProxy / disabled）を設定します。企業 / 自己署名のルートは STEPPER_EXTRA_CA_CERTS（PEM バンドル、システムトラストに追加、fail-open）で追加します。プロバイダー呼び出し、web_fetch、http MCP に適用されます。',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"proxy": { "https": "http://proxy.corp:3128", "noProxy": "localhost" }',
            },
            {
                kind: 'heading',
                text: 'MCP サーバーの OAuth',
            },
            {
                kind: 'paragraph',
                text: 'OAuth を必要とするリモート（http）MCP サーバーは `stepper mcp auth <name>`（ブラウザフロー、PKCE、動的クライアント登録）で認可します。トークンは `~/.stepper/mcp-auth.json`（0600）に保存され、自動的にリフレッシュされます。`stepper mcp logout` / `status` で管理します。サーバーごとに mcpServers の oauth キーで有効化します。',
            },
            {
                kind: 'heading',
                text: 'セッション横断の統計',
            },
            {
                kind: 'paragraph',
                text: '`stepper stats` は、保存されたすべてのセッションにわたってトークン、コスト、ターン、モデルごと・ツールごとの利用状況を集計します。`--days` で絞り込み、`--models` / `--tools` で内訳を表示し、`--json` で JSON を出力し、`--export`（.csv または .json）でファイルに書き出します。ツールごとの内訳は、正規化されたバーと割合を伴う棒グラフで描画されるため、最も負荷の高いツールが一目で分かります。利用状況は今後ターンごとに記録されます。',
            },
            {
                kind: 'code',
                lang: 'bash',
                code: 'stepper stats --models --tools\nstepper stats --days 7 --json',
            },
            {
                kind: 'heading',
                text: '自動メモリ',
            },
            {
                kind: 'paragraph',
                text: 'エージェントは `memory_write` ツールを呼び出して、永続的な学び — ビルド / テストコマンド、規約、デバッグの知見 — を `.stepper/memory/MEMORY.md` に追記できます。このファイルは以降のすべてのセッションの開始時にベースコンテキストへ読み込まれ（直近の約 32 KB）、学びが手作業なしにセッションをまたいで引き継がれます。',
            },
            {
                kind: 'heading',
                text: '推論強度',
            },
            {
                kind: 'paragraph',
                text: 'セッションの推論強度は `/effort` または `--effort` フラグ（`off` / `low` / `medium` / `high` / `xhigh` / `max`）で設定します。引数なしの `/effort` は現在のレベルを強調したピッカーを開き、フッターに現在値が表示されます。最新の Claude（Opus ≥ 4.6 / Sonnet ≥ 4.6 / Fable·Mythos 5）ではアダプティブ思考と `output_config.effort` にマップされ、OpenAI では `reasoning_effort`（`xhigh` / `max` は `high` にクランプ）に、旧来の Claude ではレガシーな思考バジェット段階にマップされます。',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper --effort xhigh\n# または TUI 内で:  /effort max',
            },
            {
                kind: 'heading',
                text: '外部エディター',
            },
            {
                kind: 'paragraph',
                text: '`/editor` を実行（または `Ctrl+E` を押す）すると、プロンプトを自分のエディターで作成できます — stepper が一時ファイルで `$VISUAL` / `$EDITOR` を開き、保存した内容を入力欄に読み込みます。インラインでは入力しづらい、長く複数段落にわたるプロンプトに便利です。',
            },
            {
                kind: 'heading',
                text: '設定の概要',
            },
            {
                kind: 'paragraph',
                text: '`/settings` は統合されたタブ表示の概要を開きます — General · Model · Permissions · Theme · MCP · Notifications。`←` / `→`（または `Tab`）でタブを切り替え、`Enter` でフォーカス中タブのエディター（`/permissions`、`/theme`、`/model`）に直接ジャンプし、`Esc` で閉じます。',
            },
            {
                kind: 'heading',
                text: 'MCP 管理 CLI',
            },
            {
                kind: 'paragraph',
                text: '`setting.json` を手で編集することなく、コマンドラインから MCP サーバーを管理できます: `stepper mcp list` は設定済みサーバーを一覧表示し、`stepper mcp get <name>` はサーバーに接続してそのツール / リソース / プロンプトを一覧表示し、`stepper mcp add <name>` は stdio または http サーバーを登録し、`stepper mcp remove <name>` は削除します。',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper mcp list\nstepper mcp get context7\nstepper mcp add my-tool --command my-mcp --arg --stdio',
            },
            {
                kind: 'heading',
                text: 'モデル CLI',
            },
            {
                kind: 'paragraph',
                text: '`stepper models [provider]` は、選択可能なモデル（各プロバイダーのライブ一覧と models.dev カタログをマージしたもの）をヘッドレスで一覧表示します — デフォルトはプレーンテキスト、スクリプト用には `--json`、モデルごとのコンテキストウィンドウと価格には `--verbose`。',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper models\nstepper models anthropic --verbose\nstepper models --json',
            },
            {
                kind: 'heading',
                text: 'ヘッドレスのシステムプロンプトオーバーライド',
            },
            {
                kind: 'paragraph',
                text: 'stepper をヘッドレスのリンターやレビュアーとしてラップするために、`--system-prompt` / `--system-prompt-file` は実行中のプロジェクトベースコンテキストを置き換え（dispatch されたサブエージェントにも及びます）、`--append-system-prompt` / `--append-system-prompt-file` は各レイヤーのシステムメッセージの役割の後に追加の指示を付け足します。',
            },
            {
                kind: 'heading',
                text: 'ファイルログ',
            },
            {
                kind: 'paragraph',
                text: 'ログはオプトインです: `--log-level` を渡すと `~/.stepper/logs/stepper.log` に書き込みます（`RUST_LOG` 環境変数が設定されている場合はそちらが優先されます）。TUI を散らかさずに、ヘッドレス実行や挙動のおかしいプロバイダーをデバッグするのに便利です。',
            },
            {
                kind: 'heading',
                text: 'コマンド履歴 & 逆検索',
            },
            {
                kind: 'paragraph',
                text: '送信したプロンプトは `~/.stepper/history/<project>.json` に永続化されます（直近 500 件、連続する重複は除去）。入力の先頭/末尾の行で `↑` / `↓` を押すと、前/次のプロンプトを recall します — 入力中の draft は保存され、末尾に戻ると復元されます。`Ctrl+R` は部分一致を新しい順でマッチする逆検索オーバーレイを開きます。',
            },
            {
                kind: 'heading',
                text: 'fallback モデルチェーン',
            },
            {
                kind: 'paragraph',
                text: '`--fallback-model a,b,c`（カンマ区切り）または `fallbackModel` 設定（文字列または配列）でフォールバックチェーンを指定します。主モデルがリトライ不可の失敗に遭遇するか、リトライを使い切ると、stepper はチェーンのモデルを順に試します。CLI フラグが設定より優先され、各項目は trim・重複除去のうえ最大 3 つに制限されます。',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper --fallback-model anthropic/claude-haiku-4,openai/gpt-5',
            },
            {
                kind: 'heading',
                text: '統合診断',
            },
            {
                kind: 'paragraph',
                text: '`stepper doctor` は一度にすべてをチェックします: 設定の検証、provider API キー、デフォルト/フォールバックモデルの resolve、ライブ MCP サーバー接続、models.dev カタログ、そして GitHub の最新リリースバージョン（ネットワークを含む）。キーの欠落や接続失敗は警告（exit 0）であり、無効な設定や解決不能なデフォルトモデルのみが失敗します。',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper doctor',
            },
            {
                kind: 'heading',
                text: 'structured outputs（ヘッドレス）',
            },
            {
                kind: 'paragraph',
                text: 'ヘッドレスモードでは、`-p --output-schema <inline|file>` が最終応答を JSON Schema に準拠させます。違反時には検証エラーを含めて再プロンプトし（`--output-schema-retries`、既定 2）、それでも準拠しなければ non-zero で終了します。検証済みの JSON は再シリアライズされて出力されます（コードフェンス可）。',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper -p "list the open TODOs" --output-schema ./todos.schema.json',
            },
            {
                kind: 'heading',
                text: 'tool-search（ツールの遅延公開）',
            },
            {
                kind: 'paragraph',
                text: 'あるレイヤーのツールが 40 を超え、MCP ツールが存在する場合、stepper は MCP ツール定義をプロンプトから隠し、`tool_search` メタツールのみを公開します。モデルが検索すると、一致したツールがそのターンの間だけ公開（reveal）されます — ベースコンテキストを軽く保ちつつ、必要なときにすべてのツールに到達できます。',
            },
            {
                kind: 'heading',
                text: 'カスタム statusline',
            },
            {
                kind: 'paragraph',
                text: '`setting.json` に `statusLine: { command: [...] }` を設定すると、stepper はそのコマンドをバックグラウンドで定期的に実行し（5s タイムアウト）、モデル / モード / cwd / トークン / コストを JSON で stdin に渡します。その stdout の最初の行がフッターにレンダリングされます — UI をブロックすることはありません。',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"statusLine": { "command": ["my-statusline.sh"] }',
            },
            {
                kind: 'heading',
                text: 'カスタマイズ可能なキーバインド',
            },
            {
                kind: 'paragraph',
                text: '`~/.stepper/keybindings.json`（およびプロジェクトの `.stepper/keybindings.json`）に `{"action":"chord"}` 形式でバインディングを追加します。バインディングは加算式です — 組み込みのキーは常に動作します。バインド可能: `newline`、`cycle-mode`、`external-editor`、`history-search`、`scroll-up`、`scroll-down`（chord 例: `ctrl+t`、`alt+k`）。submit / quit / interrupt はバインド不可です。',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '{ "external-editor": "ctrl+t", "history-search": "alt+k" }',
            },
            {
                kind: 'heading',
                text: '階層的に累積する CLAUDE.md',
            },
            {
                kind: 'paragraph',
                text: 'プロジェクトルートから現在の作業ディレクトリまで、各サブディレクトリの `CLAUDE.md` がベースコンテキストに累積されます（最も具体的なものが最後）。これは既存のプロジェクトベース（`.stepper/stepper.md` などの first-found ファイル）に加算され、既存の動作はそのまま維持されます。',
            },
            {
                kind: 'heading',
                text: 'AGENTS.md のベースコンテキスト',
            },
            {
                kind: 'paragraph',
                text: 'stepper はプロジェクトルートの `./AGENTS.md`（クロスエージェント標準）と `~/.config/AGENTS.md` もベースコンテキスト候補として取り込みます。完全な解決順序は `.stepper/stepper.md` → `./CLAUDE.md` → `./AGENTS.md` → `~/.stepper/stepper.md` → `~/.claude/CLAUDE.md` → `~/.config/AGENTS.md` です。',
            },
            {
                kind: 'heading',
                text: 'セッションの rename & export',
            },
            {
                kind: 'paragraph',
                text: '`/rename <name>` は現在のセッション名を変更して永続化します（`stepper session rename <id> <name>` でも可能）。`/export [path]` はセッションの会話を Markdown トランスクリプトに保存し、既定パスは `.stepper/exports/<id>.md` です。',
            },
            {
                kind: 'heading',
                text: 'path-scoped rules',
            },
            {
                kind: 'paragraph',
                text: '`.stepper/rules/*.md` に frontmatter の `paths:` グロブを持つルールファイルを置きます。ルールは現在の作業ディレクトリがそのグロブに一致したときのみベースコンテキストに読み込まれます — ディレクトリ固有の規約が該当する場所でのみ適用されます。',
            },
            {
                kind: 'heading',
                text: 'microcompaction',
            },
            {
                kind: 'paragraph',
                text: 'フルのコンパクションが作動する前に、microcompaction は最も古く大きいツール結果だけを折りたたんでコンテキストを回収します — 会話のターンはそのまま保持します。会話を要約せずに余裕を確保します。',
            },
            {
                kind: 'heading',
                text: 'ask-user-question ツール',
            },
            {
                kind: 'paragraph',
                text: 'モデルは組み込みの `ask_user_question` ツールで多肢選択の明確化質問を出せます。TUI はそれを選択オーバーレイとして表示し（数字または `↑` / `↓` + `Enter` で選択）、選択をモデルに返します。ヘッドレス / UI なしの実行では「未回答」として進行します。',
            },
            {
                kind: 'heading',
                text: '最後の応答をコピー',
            },
            {
                kind: 'paragraph',
                text: '`/copy` は最新のアシスタント応答を OS クリップボードにコピーします — 引数もエージェントターンも不要です。',
            },
            {
                kind: 'heading',
                text: 'コードレビューコマンド',
            },
            {
                kind: 'paragraph',
                text: '`/code-review` は diff を単一パスでレビューします。引数がなければ uncommitted な作業変更をレビューし（ツリーがクリーンなら `origin/main` などの基準ブランチとの diff にフォールバック）、git ref や `<a>..<b>` 範囲はその範囲を、`#123` は `gh pr diff` で GitHub プルリクエストをレビューします。`--fix` を付けると findings をレポートしたうえで確定したものを適用します。約 96KB を超える diff はファイル一覧のレビューにフォールバックします。',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: '/code-review\n/code-review origin/main..HEAD\n/code-review #123 --fix',
            },
        ],
    },
    {
        slug: 'ci',
        title: 'CI とリリース',
        description: 'GitHub Actions による自動化された CI パイプライン、手動ワークフロー実行、クロスプラットフォームのリリースバイナリ。',
        blocks: [
            {
                kind: 'paragraph',
                text: 'stepper リポジトリは、継続的インテグレーション、手動ワークフロー実行、自動化されたリリース配布に GitHub Actions を使用します。3 つのワークフローが、各プラットフォームでのビルド、テスト、バイナリの公開を担います。',
            },
            {
                kind: 'heading',
                text: 'ci.yml — push 時のビルドとテスト',
            },
            {
                kind: 'paragraph',
                text: 'コードベースを検証するため、すべての push と pull request で実行されます。このワークフローは以下の品質ゲートを実行します:',
            },
            {
                kind: 'list',
                items: [
                    '`build` — `cargo build --workspace` でワークスペースをコンパイルします',
                    '`clippy -D warnings` — 警告をエラーとして扱うモードで clippy リンターを実行し、コード品質を強制します',
                    '`test` — `cargo test --workspace` を実行します(`#[ignore]` でマークされた、または環境によってゲートされるライブテストはスキップされます)',
                    '`install` — `scripts/install.sh` を実行してインストールスクリプトが正しく動作するか検証するスモークテストです',
                ],
            },
            {
                kind: 'heading',
                text: 'run.yml — 手動ヘッドレス実行',
            },
            {
                kind: 'paragraph',
                text: 'オンデマンドのテスト実行のために `workflow_dispatch` でトリガーされる手動ワークフローです。このワークフローは stepper をビルドおよびインストールした後、ユーザーが指定した入力でヘッドレス実行します。',
            },
            {
                kind: 'list',
                items: [
                    '3 つのワークフロー入力を受け取ります: `prompt`(ヘッドレスプロンプト)、`model`(使用するモデル ID)、`mode`(権限モード)',
                    'プロバイダー認証には `STEPPER_<PROVIDER>_API_KEY` という名前のリポジトリシークレットを使用します(例: `STEPPER_ANTHROPIC_API_KEY`)',
                ],
            },
            {
                kind: 'heading',
                text: 'release.yml — クロスプラットフォーム公開',
            },
            {
                kind: 'paragraph',
                text: '`prod` ブランチへの push または手動ワークフロー dispatch でトリガーされます。このワークフローは品質チェックの合格をゲートとし、最適化されたリリースバイナリをビルドして GitHub Release に公開します。',
            },
            {
                kind: 'subheading',
                text: '品質ゲート',
            },
            {
                kind: 'list',
                items: [
                    '`build` — `cargo build --workspace` でコンパイルします',
                    '`clippy -D warnings` — 警告ゼロを強制します',
                    '`test` — テストスイート全体を実行します',
                ],
            },
            {
                kind: 'subheading',
                text: 'リリースアーティファクト',
            },
            {
                kind: 'paragraph',
                text: 'このワークフローは 3 つのターゲットプラットフォーム向けのバイナリをビルドして公開します:',
            },
            {
                kind: 'list',
                items: ['macOS arm64 (Apple Silicon)', 'Linux x86_64', 'Windows x86_64'],
            },
            {
                kind: 'paragraph',
                text: '各ターゲットについて、バージョン付きとバージョンなしの両方のアーカイブを公開します:',
            },
            {
                kind: 'list',
                items: [
                    'バージョン付き: `stepper-<version>-<target>.tar.gz` または `.zip`(名前にバージョンを含む)',
                    'バージョンなし: `stepper-<target>.tar.gz` または `.zip`(静的ホスティング用の安定した URL)',
                ],
            },
            {
                kind: 'paragraph',
                text: 'アーカイブは `v<version>` のタグが付いた GitHub Release に公開され、バージョンは `Cargo.toml` のワークスペースバージョンから読み取られます。新しいリリースを作成するには `Cargo.toml` のバージョンを上げてください。同じバージョンを再 push すると、リリースアセットが更新されます。',
            },
            {
                kind: 'subheading',
                text: '配布',
            },
            {
                kind: 'paragraph',
                text: 'リポジトリは公開されているため、エンドユーザーは最新の GitHub リリースからバイナリを直接ダウンロードします。§1 で参照されているインストールスクリプト(別の stepper.gumyo.net サイトでホストされています)は、`releases/latest/download` からプラットフォーム固有のアーカイブを取得し、展開して `stepper` バイナリを `~/.local/bin` にインストールします。',
            },
        ],
    },
    {
        slug: 'architecture',
        title: 'アーキテクチャ',
        description:
            '10クレートで構成されるCargoワークスペース設計: クレートの役割、分離不変条件、そしてCLIブートストラップからマルチレイヤーエージェントのオーケストレーションを経てTUIに至るデータフロー。',
        blocks: [
            {
                kind: 'paragraph',
                text: 'stepperはRustで構築されたレイヤード型のCLI/TUI AIコーディングエージェントで、10クレートで構成されるCargoワークスペースとして構造化されています。本ページでは、クレート構成、CLIブートストラップからエージェント実行までのデータフロー、そしてクリーンなアーキテクチャ境界を保証する中核的な分離不変条件を概説します。',
            },
            {
                kind: 'heading',
                text: 'クレート概要',
            },
            {
                kind: 'paragraph',
                text: 'ワークスペースには(当初計画された13個のうち)10個のクレートが実装されており、それぞれがシステム内で固有の責務を担います:',
            },
            {
                kind: 'table',
                head: ['クレート', '役割'],
                rows: [
                    [
                        '`stepper-protocol`',
                        'チャネル型とDTO: `Action`(TUI→core)、`AppEvent`(core→TUI)、`ApprovalRequest`(oneshot)。serde、uuid、tokioの同期プリミティブのみに依存します。',
                    ],
                    [
                        '`stepper-tui`',
                        'インラインビューポートを備えたRatatuiベースのTUI。`stepper-protocol`のみに依存します(これにratatuiスタックを加えます)。',
                    ],
                    [
                        '`stepper-cli`',
                        'Clap CLIバイナリ。RealCoreを接続し(デフォルト=TUIエージェント、`-p`フラグ=ヘッドレス自動承認モード)、`auth login`・`config`・`init`コマンドとMCPサーバーのライフサイクルを処理します。',
                    ],
                    [
                        '`stepper-provider`',
                        'LLMプロバイダー向けのトレイトと正規化された型: `ChatRequest`、`Message`、`ContentBlock`、`ChatEvent`、`Usage`、`StopReason`、`ToolSpec`。HTTPを含まず、reqwestもtokio-rtも使用しません。',
                    ],
                    [
                        '`stepper-providers`',
                        '具体的なプロバイダーアダプター(Anthropic、OpenAI互換、Responses)、認証(APIキー、OAuth Codex)、reqwest+SSEによるストリーミング、キーリングへのトークン保存。',
                    ],
                    [
                        '`stepper-config`',
                        '設定の読み込み: `.stepper/`の探索、`setting.json`のディープマージ、frontmatterのパース(YAML)、置換エンジン、モデル/プロバイダーの解決、JSONスキーマ検証。',
                    ],
                    [
                        '`stepper-permission`',
                        '純粋な権限評価エンジン: `deny > ask > allow > mode`の優先順位、bashのリダイレクト/コマンドのパース、シンボリックリンクによる脱出の防止、パスの正規化。',
                    ],
                    [
                        '`stepper-tools`',
                        'Toolトレイトとレジストリ。9個の組み込みツール(read/write/edit/bash/search/grep/todo/web_fetch)、MCPツールのブリッジ、秘密パスの検出、`ToolCx`による権限ゲーティング。',
                    ],
                    [
                        '`stepper-mcp`',
                        'MCP 1.7クライアント(stdio/HTTPトランスポート)、ツールのネームスペーシング、タイムアウト、ローカルツールレジストリとの統合。context7で検証済み。',
                    ],
                    [
                        '`stepper-core`',
                        'メインオーケストレーター: プロバイダーの解決、`AgentLoop`(ReActパターン)、マルチステップパイプライン、並列レイヤー実行、セッション/チェックポイント管理、ハンドオフの要約、組み込みスラッシュコマンド。',
                    ],
                ],
            },
            {
                kind: 'heading',
                text: '分離不変条件',
            },
            {
                kind: 'paragraph',
                text: '3つの厳格なアーキテクチャ境界が、`cargo metadata`解析を用いたCIテスト(`crates/stepper-cli/tests/isolation.rs`)によって強制されます:',
            },
            {
                kind: 'list',
                items: [
                    '`stepper-tui`は`stepper-protocol`のみに依存します(これにratatuiを加えます)。core、config、providers、HTTPアクセスは一切ありません。',
                    '`reqwest`とHTTPは`stepper-providers`、`stepper-tools`(web_fetch)、`stepper-mcp`(HTTPトランスポート)に限定されます。`stepper-protocol`と`stepper-provider`トレイトはHTTPを含まず、tokio-rtも使用しません。',
                    '`stepper-protocol`はclapを使用しません(チャネル契約にCLIパースが含まれない)。',
                ],
            },
            {
                kind: 'heading',
                text: '高レベルのデータフロー',
            },
            {
                kind: 'code',
                lang: 'text',
                code: 'stepper-cli main.rs (#[tokio::main])\n  ├─ build_orchestrator(model, mode, cwd)\n  │    Config::load → build_steps(layer frontmatter+skills) → ensure_provider(convention fallback)\n  │    McpManager::connect(mcpServers) → register tools to base_tools\n  │    ConfigProviderResolver + RuleSet + HookHost\n  ├─ channels: mpsc<Action>(TUI→core) + mpsc<AppEvent>(core→TUI) + CancellationToken\n  ├─ stepper-core::spawn_core(orchestrator, session, action_rx, cancel) → event_rx  [RealCore]\n  │    while action:\n  │      SubmitInput → checkpoint_turn → Orchestrator.run_turn → session append/save\n  │      SlashCommand → commands::expand(substitution) → run_turn\n  │      Rewind → restore+turns truncate\n  │      RunShell → bash tool single-turn execution\n  │    Orchestrator.run_turn: SessionStart → step layers (sequence or parallel):\n  │      resolver.resolve(model) → Box<dyn LlmProvider>\n  │      base_tools.filtered(allow/deny).filter_mcp\n  │      ToolCx{cwd, project_root, mode, rules, approver=ChannelApprover, cancel}\n  │      AgentLoop.drive(system, handoff): stream→token/usage emit→compact→tool exec\n  │        (gate→approver) → result injection → repeat\n  │      emit: LayerStarted/Finished/ModelChanged/UsageUpdated/ToolCall* → handoff\n  └─ stepper-tui::run_tui(event_rx, action_tx, init, cancel)\n       blocking input thread(event::poll/read) → mpsc → select!{input, 33ms tick, AppEvent rx, cancel}\n       input → (mode-dependent) Action → AppState.apply_action → Effect(Send/CommitToScrollback)\n       ApprovalRequested(oneshot) → overlay y/a/n → reply.send (resumes agent loop)',
            },
            {
                kind: 'note',
                text: '`spawn_fake_core`(モック)はウォーキングスケルトンのテスト用に`stepper-tui`に残っていますが、CLIは`RealCore`(`stepper-core::spawn_core`)のみを使用します。両者は同一のチャネル契約を満たすため、相互に置き換え可能です。',
            },
            {
                kind: 'heading',
                text: '主要な型と契約',
            },
            {
                kind: 'list',
                items: [
                    '**チャネル契約**(固定): `mpsc<Action>` + `mpsc<AppEvent>` + `CancellationToken`。RealCoreとモックの両方が満たします。',
                    '**`LlmProvider`**: `chat_stream(req, cancel) → BoxStream<ChatEvent>`を実装します。正規化は`WireDelta` → `StreamAccumulator` → `ChatEvent`の経路で行われます。',
                    '**`Tool`**: `spec()` / `call(args, cx) → ToolResult`を実装します。`ToolCx.gate(PermissionRequest)`が権限評価と承認ゲーティングを強制します。組み込みツールとMCPツールは同じトレイトを使用します。',
                    '**`ProviderResolver`**: モデル参照 → `Box<dyn LlmProvider>` + `ModelInfo`。`ConfigProviderResolver`が実装します。',
                    '**`Approver`**(tools) → **`ChannelApprover`**(core): Ask判定時に`AppEvent::ApprovalRequested{oneshot}`を発生させ → TUIオーバーレイ → ユーザー応答 → エージェントループを再開します。',
                    '**Orchestrator / AgentLoop**: `run_turn` → ステップレイヤー(それぞれ独立したコンテキスト、プロバイダー、ツールを持つ) → `AgentLoop.drive`(ReActパターン)。ハンドオフ = フリーテキストの要約チェーン。',
                    '**セッションとチェックポイント**: `SessionStore`(`.stepper/sessions/<id>.json`)、`Snapshotter`(`.stepper/checkpoints/<turn>/`のファイルコピー)。`--resume`は`resume_context`をシードし、`Rewind`は復元・整理・ターンの切り詰めを行います。',
                ],
            },
            {
                kind: 'heading',
                text: '高度な機能',
            },
            {
                kind: 'list',
                items: [
                    '**並列レイヤー**: `parallel: true`(および任意の`parallel-max`ワーカー上限)が設定されたステップは、オーケストレーターが前のレイヤーの`assign_tasks`リストをワーカーにファンアウトさせます。各ワーカーはサブエージェントです。タスクリストがない場合は逐次実行にフォールバックします。',
                    '**組み込みスラッシュコマンド**: `/help`、`/clear`(セッションのリセット)、`/model [provider/model-id]`(検証 + 最初のステップの切り替え + `ModelChanged`イベント)、`/context`(コンテキストウィンドウの要約)。',
                    '**スキル**: レイヤーがfrontmatterに`skills`を宣言すると、`SkillTool`を通じてモデルが`skill { name }`を呼び出してレイヤー固有のスキルを利用できます。プログレッシブディスクロージャー: スキル名と説明はシステムプロンプトに提示され、本文はオンデマンドで提供されます。',
                    '**dispatchツール**(C4): モデルは`dispatch(...)`を呼び出して、現在のレイヤー以降に並列サブエージェント(ワーカー)を生成できます。オーケストレーターが有効化する必要があり、サブエージェントは再帰できません。',
                    '**プロンプトキャッシュ**: `ChatRequest.cache: bool`オプションがAnthropicのプレフィックスキャッシュを有効にし、システムメッセージは`cache_control: ephemeral`でラップされます。',
                    '**モデル駆動コンパクション**: `compaction.provider`が構成されている場合、オーケストレーターはソフトしきい値(コンテキストの0.70)で当該プロバイダーのモデルを用いてメッセージ履歴を要約し、直近6件のメッセージはそのまま保持します。',
                    '**権限ゲーティング**: `ToolCx::gate(request)`はモード(Auto/Plan/AcceptEdits)に対してルールを評価します。リダイレクト/`$()`を含むbashアトムはAskを引き上げ、明示的な承認を要求させます。',
                    '**MCPタイムアウト**: 接続タイムアウト(デフォルト10秒、`STEPPER_MCP_CONNECT_TIMEOUT_MS`)は起動時にハングしたサーバーを防ぎます。ツール呼び出しタイムアウト(デフォルト120秒、`STEPPER_MCP_TOOL_TIMEOUT_MS`)はターン途中のハングを防ぎます。',
                ],
            },
            {
                kind: 'heading',
                text: 'ビルドとテスト',
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
        title: 'ロードマップ',
        description: 'stepper が出荷したもの、実利用に向けて強化中のもの、そして意図的に保留した制限。',
        blocks: [
            {
                kind: 'paragraph',
                text: 'このページは stepper の提供状況を一目で整理します。出荷済みの機能、日常利用に向けて進行中の作業、意図的に保留した制限(理由付き)、そして保守のフォローアップです。他のページが各要素の仕組みを説明し、このページは全体的な状態を示します。',
            },
            {
                kind: 'heading',
                text: '出荷済み',
            },
            {
                kind: 'paragraph',
                text: '実装・テスト済みで、現在のリリースで利用できます。',
            },
            {
                kind: 'list',
                items: [
                    '**レイヤードパイプライン & マルチプロバイダー** — オーケストレーターがサブエージェントレイヤーの順序付きパイプラインに作業を委譲し、各レイヤーは独自のプロバイダー・モデル・新しいコンテキストウィンドウを持ちます。逐次または並列のファンアウト(`assign_tasks` + ライブワーカーパネル)。',
                    '**権限システム** — `auto` / `plan` / `accept-edits` モード、永続化された承認を含む `allow` / `ask` / `deny` ルール、複合 bash のエスカレーション、fail-closed なヘッドレス実行。',
                    '**認証** — 環境変数または OS キーリング(`stepper auth set-key` / `delete-key`)によるプロバイダーキー、および Codex(ChatGPT)OAuth。',
                    '**セッション & 制御** — セッション再開、チェックポイント + `/rewind`、モデル駆動のコンパクション、フック、スキル(段階的開示)、スラッシュコマンド、MCP(stdio/HTTP)サーバー。',
                    '**オプトインの OS サンドボックス** — macOS Seatbelt プロファイルが `bash` ツールの書き込みをプロジェクトに限定します(権限エンジンの下での多層防御)。',
                    '**テスト強化** — 分離不変条件の CI、core 統合テスト(オーケストレーター、コンパクション、セッション/巻き戻し、コスト、並列レイヤー、dispatch、キャンセル)、権限マトリクス、TUI レンダースナップショット、密閉型 MCP エコー、プロバイダーフィクスチャ — 837 のネットワーク非依存テスト。',
                    '**ライブのエンドツーエンド** — 2 レイヤーパイプライン(ollama-cloud → oMLX)、ストリーミング、`/rewind`、再開が実際のプロバイダーに対して検証済みです(`#[ignore]` + `STEPPER_E2E` ゲーティングで維持され、デフォルトの `cargo test` はスキップします)。',
                ],
            },
            {
                kind: 'heading',
                text: '進行中',
            },
            {
                kind: 'paragraph',
                text: '実装済みですが、ライブの日常利用に向けてまだ強化中です。',
            },
            {
                kind: 'list',
                items: [
                    'ライブストリーミングモデルで駆動するインタラクティブな tty TUI(ヘッドレス `-p` パスとオーケストレーターは既にライブ検証済み)。',
                    'Codex(ChatGPT)バックエンドのライブ認証とストリーミング。',
                    '`/init` スキャフォールディングの改善と `/rewind` / 再開のユーザー体験。',
                ],
            },
            {
                kind: 'heading',
                text: '保留(受け入れた制限)',
            },
            {
                kind: 'paragraph',
                text: '意図的にまだ対応していない既知の制限と、その理由。',
            },
            {
                kind: 'list',
                items: [
                    '**WriteFile TOCTOU のシンボリックリンク差し替え** — 単一ユーザー開発 CLI の範囲外。',
                    '**gix ベースのチェックポイント** — コピー方式のスナップショッターが動作しており、git バックエンドは後の最適化。',
                    '**密閉型のキーリングテスト** — CI では OS キーチェーンを利用できないため、キーリングは統合テストのみで維持。',
                    '**ライブの MCP HTTP 認証** と `McpManager::connect` の成功パス — どちらもライブサーバーが必要。',
                    '**バックグラウンド `!cmd &` のサンドボックス同等性** — フォアグラウンドの `bash` ツールは限定されますが、バックグラウンドパス(`proc.rs`)は TUI から書き込み可能なルートを渡してからサンドボックス化できます。',
                ],
            },
            {
                kind: 'heading',
                text: '保守',
            },
            {
                kind: 'list',
                items: [
                    '推移的依存の `reqwest` 0.12 / 0.13 バージョンの重複を解消。',
                    'GitHub Actions のリリース/デプロイワークフローを、削除予定の非推奨 Node.js 20 アクションから移行。',
                ],
            },
        ],
    },
]
