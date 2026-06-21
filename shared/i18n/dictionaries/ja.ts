import type { Dictionary } from '@shared/i18n/dictionaries/en'

export const ja: Dictionary = {
    meta: {
        title: 'stepper — レイヤー型の CLI/TUI AI コーディングエージェント',
        description:
            'stepper はレイヤー型の CLI/TUI AI コーディングエージェントです。オーケストレーターが、それぞれ独自のプロバイダー・モデルと新しいコンテキストウィンドウを持つサブエージェントのレイヤーパイプラインにタスクを委譲します。',
    },
    nav: {
        features: '機能',
        install: 'インストール',
        quickstart: 'クイックスタート',
        docs: 'ドキュメント',
        github: 'GitHub',
        themeToggle: 'テーマ切り替え',
        languageLabel: '言語',
        skipToContent: '本文へスキップ',
    },
    hero: {
        badge: 'レイヤー型 AI コーディングエージェント',
        title: 'ひとつのエージェント、知性のパイプライン。',
        subtitle:
            'stepper はレイヤー型の CLI/TUI コーディングエージェントです。オーケストレーターがあなたのタスクを、順序付けられたサブエージェントのレイヤーパイプラインに委譲します — 各レイヤーは独自のプロバイダー・モデルと新しいコンテキストウィンドウを持ちます。',
        latestVersion: '最新',
        unreleased: 'リリース前',
        copy: 'コピー',
        copied: 'コピーしました',
        viewOnGithub: 'GitHub で見る',
        readDocs: 'ドキュメントを読む',
        osTab: {
            unix: 'macOS / Linux',
            windows: 'Windows',
        },
        installNote: 'OS とアーキテクチャを検出し、バイナリを PATH に配置します。',
    },
    what: {
        heading: '仕組み',
        lead: 'オーケストレーターがベースレイヤーです。setting.json の step を順番に実行し、各レイヤーのフリーテキストの結果を次のレイヤーへ渡します。すべてのレイヤーは、独自のモデル・ツール・システムプロンプトと新しいコンテキストウィンドウを持つサブエージェントです。',
        orchestrator: 'オーケストレーター',
        orchestratorNote: 'ベースレイヤー · setting.json を読む · パイプラインをルーティング',
        handoff: 'フリーテキストの受け渡し',
        layerModel: 'モデル',
        layerContext: '新しいコンテキスト',
        parallelLabel: 'parallel: true',
        parallelNote:
            'レイヤーは fan-out できます — サブタスクごとに 1 つのワーカーがそれぞれ新しいコンテキストウィンドウで実行され、次の step の前に統合されます。',
        steps: [
            { name: 'plan', model: 'anthropic/claude-sonnet-4', note: 'リポジトリを読み、方針を立てます' },
            { name: 'implement', model: 'omlx/deepseek-coder', note: 'ツールでファイルを編集します' },
            { name: 'test', model: 'ollama-cloud/qwen3-coder', note: '実行して検証します' },
        ],
    },
    features: {
        heading: '機能',
        lead: 'すべてがレイヤー化・スコープ化され、デフォルトで fail-closed です。',
        items: [
            {
                title: 'レイヤーパイプライン',
                description:
                    '各 step は独自のモデル・ツール・システムプロンプトを持つ独立したサブエージェントです。デフォルトは順次実行で、レイヤーに parallel: true を指定するとサブタスクごとに 1 ワーカーへ fan-out します。名前付きサブエージェントは #agent または task ツールでインラインに呼び出せます。',
            },
            {
                title: 'マルチプロバイダー',
                description:
                    'Anthropic、OpenAI、ollama-cloud、oMLX（ローカルの Apple Silicon MLX）、Codex（ChatGPT OAuth）。/connect で models.dev カタログから任意のプロバイダーを検索・追加でき（非対応エントリは無効表示となり、キーが誤ルーティングされることはありません）、各レイヤーが独自のプロバイダーとモデルを選び、モデルごとの context・pricing オーバーライドも任意で設定できます。',
            },
            {
                title: '編集とコードインテリジェンス',
                description:
                    '完全なファイルツールに加え、複数ファイルの構造化編集を行う apply_patch、組み込みフォーマッターカタログによるオプトインの format-on-edit、そしてインストール済みの言語サーバーから得た LSP 診断を各編集後にエージェントへフィードバックします。',
            },
            {
                title: '権限システム',
                description:
                    'デフォルトの auto は、読み取り専用ツールをどこでも確認なしに実行し、プロジェクト内の編集を自動適用し、プロジェクト外への書き込みだけを確認します。plan と accept-edits がモードを補い、その上に allow / ask / deny ルールと永続化された approvals が乗ります。ヘッドレスの -p はデフォルト deny — fail-closed です。',
            },
            {
                title: 'TUI',
                description:
                    'ratatui 製のターミナル UI：テーマごとに彩色されたパネル上のライブ Markdown、ステータスフッター（アクティブレイヤー · モデル · トークン · ctx% ゲージ · コスト · effort）、diff 承認オーバーレイ、/settings タブ概要、13 種の組み込みパレットを備えた /theme エディター、入力で絞り込む /models ピッカー、/connect、/effort による推論強度の調整、/editor（Ctrl+E）、/undo · /redo、そしてオプションのターミナルベル通知。あるいは -p、--agent、--file、--format json でヘッドレス実行。',
            },
            {
                title: 'セッションと制御',
                description:
                    'セッション resume、list / delete と --fork、checkpoint + /rewind、/undo · /redo、自動コンテキスト圧縮、学びをセッションをまたいで引き継ぐ自動メモリ、9 つのライフサイクル hooks、調整可能な推論強度、progressive disclosure 方式の skills、スラッシュコマンド、MCP サーバー（stdio/http、サーバーごとの設定 + OAuth）、そして stepper stats によるセッション横断の利用統計。',
            },
            {
                title: '設定とエンタープライズ',
                description:
                    '{env:} / {file:} 置換と STEPPER_CONFIG オーバーライドに対応する JSONC の setting.json、ヘッドレスのシステムプロンプトオーバーライド、stepper mcp 管理 CLI（list / get / add / remove）、企業ネットワーク向けの明示的な HTTP(S) プロキシとプライベート CA サポート、そしてリモート MCP サーバー向けの OAuth。',
            },
        ],
    },
    install: {
        heading: 'インストール',
        lead: 'ビルド済みバイナリを入手 — Rust ツールチェーンは不要です。',
        oneLinerLabel: 'ワンライナー',
        downloadLabel: '直接ダウンロード',
        os: {
            macos: { name: 'macOS', sub: 'Apple Silicon' },
            linux: { name: 'Linux', sub: 'x86_64' },
            windows: { name: 'Windows', sub: 'x86_64' },
        },
        envHeading: '環境変数のオーバーライド',
        env: [
            { name: 'STEPPER_INSTALL_DIR', value: '~/.local/bin', meaning: 'バイナリのインストール先。' },
            { name: 'STEPPER_DOWNLOAD_BASE_URL', value: 'releases/latest/download', meaning: 'アーカイブのホスト先。' },
        ],
        sourceHeading: 'ソースからビルド',
        sourceNote: 'Rust 1.95 ツールチェーンを持つコントリビューターは直接ビルドできます：',
        sourceCommand: 'cargo install --path crates/stepper-cli',
    },
    quickstart: {
        heading: 'クイックスタート',
        lead: 'プロジェクトで stepper を実行し、ガイド付きセットアップに従います。',
        steps: [
            { title: '実行する', body: '.stepper/ が無いプロジェクトでは、stepper が短いガイド付きセットアップを実行します。', command: 'stepper' },
            {
                title: 'モデルとモードを選ぶ',
                body: 'デフォルトモデルと権限モードを選びます。stepper が .stepper/setting.json を書き出します。',
                command: 'stepper config --validate',
            },
            {
                title: 'ヘッドレスで',
                body: 'ワンショットの出力を stdout にストリーミングし、プロジェクト内の操作を自動承認します。',
                command: 'stepper -p "add a README badge" --mode auto',
            },
        ],
        settingTitle: '.stepper/setting.json',
        settingNote: 'レイヤーパイプライン、デフォルトモデル、プロバイダーごとの設定 — camelCase で、ユーザーレベルのベースに deep-merge されます。',
    },
    docs: {
        heading: 'ドキュメント',
        lead: '完全な使い方・設定・providers・レイヤー・権限・CI を、ここで直接読めます。',
        overview: '概要',
        updateLog: '更新ログ',
        updateLogLead: 'リポジトリから生成された stepper のバージョンごとの変更点です。',
        usageCard: { title: 'USAGE.md', body: 'インストール、CLI リファレンス、setting.json、providers、レイヤー、権限、MCP、CI。' },
        architectureCard: { title: 'ARCHITECTURE.md', body: '11 クレートのワークスペースマップ、データフロー、分離の不変条件。' },
        cta: 'すべてのドキュメントを見る',
    },
    footer: {
        tagline: 'レイヤー型の CLI/TUI AI コーディングエージェント。',
        builtWith: 'Rust 製。macOS · Linux · Windows。',
        product: '製品',
        resources: 'リソース',
        license: 'ライセンス',
        version: 'バージョン',
        rights: 'MIT ライセンスで配布されています。',
    },
    notFound: {
        title: '見つかりません',
        body: 'そのページは存在しません。',
        home: 'ホームへ',
    },
}
