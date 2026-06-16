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
                    '各 step は独自のモデル・ツール・システムプロンプトを持つサブエージェントです。デフォルトは順次実行で、レイヤーに parallel: true を指定するとサブタスクごとに 1 ワーカーへ fan-out します。',
            },
            {
                title: 'マルチプロバイダー',
                description:
                    'Anthropic、OpenAI、ollama-cloud、oMLX（ローカルの Apple Silicon MLX）、Codex（ChatGPT OAuth）。各レイヤーが独自のプロバイダーとモデルを選びます。',
            },
            {
                title: '権限システム',
                description:
                    'モード（auto / plan / accept-edits）に加えて allow / ask / deny ルールと永続化された approvals。ヘッドレスの -p はデフォルト deny — fail-closed です。',
            },
            {
                title: 'ガイド付きオンボーディング',
                description:
                    '.stepper/ が無い初回実行では、モデルと権限モードの選択を案内し、setting.json を書き出します。--no-init でスキップできます。',
            },
            {
                title: 'TUI',
                description:
                    'ratatui 製のターミナル UI：ライブ Markdown、ステータスフッター（アクティブレイヤー · モデル · トークン · ctx% ゲージ · コスト）、diff 承認オーバーレイ。あるいは -p でヘッドレス実行。',
            },
            {
                title: 'セッションと制御',
                description:
                    'セッション resume、checkpoint + /rewind、自動コンテキスト圧縮、hooks、progressive disclosure 方式の skills、スラッシュコマンド、MCP サーバー。',
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
        architectureCard: { title: 'ARCHITECTURE.md', body: '10 クレートのワークスペースマップ、データフロー、分離の不変条件。' },
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
