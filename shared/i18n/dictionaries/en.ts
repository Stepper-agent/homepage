export const en = {
    meta: {
        title: 'stepper — a layered CLI/TUI AI coding agent',
        description:
            'stepper is a layered CLI/TUI AI coding agent. An orchestrator delegates work through a pipeline of sub-agent layers, each with its own provider, model, and a fresh context window.',
    },
    nav: {
        features: 'Features',
        install: 'Install',
        quickstart: 'Quickstart',
        docs: 'Docs',
        github: 'GitHub',
        themeToggle: 'Toggle theme',
        languageLabel: 'Language',
        skipToContent: 'Skip to content',
    },
    hero: {
        badge: 'Layered AI coding agent',
        title: 'One agent. A pipeline of minds.',
        subtitle:
            'stepper is a layered CLI/TUI coding agent. An orchestrator delegates your task through an ordered pipeline of sub-agent layers — each with its own provider, model, and a fresh context window.',
        latestVersion: 'Latest',
        unreleased: 'Pre-release',
        copy: 'Copy',
        copied: 'Copied',
        viewOnGithub: 'View on GitHub',
        readDocs: 'Read the docs',
        osTab: {
            unix: 'macOS / Linux',
            windows: 'Windows',
        },
        installNote: 'Detects your OS and architecture, drops the binary on your PATH.',
    },
    what: {
        heading: 'How it works',
        lead: 'The orchestrator is the base layer. It runs the steps in your setting.json in order, handing each layer’s free-text outcome to the next. Every layer is its own sub-agent — its own model, tools, system prompt, and a fresh context window.',
        orchestrator: 'Orchestrator',
        orchestratorNote: 'base layer · reads setting.json · routes the pipeline',
        handoff: 'free-text handoff',
        layerModel: 'model',
        layerContext: 'fresh context',
        parallelLabel: 'parallel: true',
        parallelNote: 'A layer can fan out — one worker per subtask, each its own context window, joined before the next step.',
        steps: [
            { name: 'plan', model: 'anthropic/claude-sonnet-4', note: 'reads the repo, drafts the approach' },
            { name: 'implement', model: 'omlx/deepseek-coder', note: 'edits files with the tools' },
            { name: 'test', model: 'ollama-cloud/qwen3-coder', note: 'runs and verifies' },
        ],
    },
    features: {
        heading: 'Features',
        lead: 'Everything is layered, scoped, and fail-closed by default.',
        items: [
            {
                title: 'Layered pipeline',
                description:
                    'Each step is an independent sub-agent with its own model, tools, and system prompt. Sequential by default — mark a layer parallel: true to fan out one worker per subtask. Dispatch a named sub-agent inline with #agent or the task tool.',
            },
            {
                title: 'Multi-provider',
                description:
                    'Anthropic, OpenAI, ollama-cloud, oMLX (local Apple Silicon MLX), and Codex (ChatGPT OAuth). /connect discovers and adds any provider from the models.dev catalog (unsupported entries are shown disabled so a key is never mis-routed); every layer picks its own provider and model, with optional per-model context/pricing overrides.',
            },
            {
                title: 'Editing & code intelligence',
                description:
                    'Full file tools plus apply_patch for multi-file structured edits, opt-in format-on-edit from a built-in formatter catalog, and LSP diagnostics from your installed language servers fed back to the agent after each edit.',
            },
            {
                title: 'Permission system',
                description:
                    'auto (the default) runs read-only tools without a prompt anywhere and auto-applies in-project edits, asking only on out-of-project writes; plan and accept-edits round out the modes, on top of allow / ask / deny rules and persisted approvals. Headless -p is deny-by-default — fail-closed.',
            },
            {
                title: 'TUI',
                description:
                    'A ratatui terminal UI: live markdown on a per-theme coloured panel, a status footer (active layer · model · tokens · ctx% gauge · cost · effort), a diff-approval overlay, a /settings tabbed overview, a /theme editor with 13 built-in palettes, a type-to-filter /models picker, /connect, /effort reasoning control, /editor (Ctrl+E), /undo · /redo, and optional terminal-bell notifications. Or run headless with -p, --agent, --file, and --format json.',
            },
            {
                title: 'Sessions & control',
                description:
                    'Session resume, list / delete and --fork, checkpoint + /rewind, /undo · /redo, automatic context compaction, auto memory that carries learnings across sessions, nine lifecycle hooks, adjustable reasoning effort, skills with progressive disclosure, slash commands, MCP servers (stdio/http, per-server config + OAuth), and cross-session usage stats via stepper stats.',
            },
            {
                title: 'Config & enterprise',
                description:
                    'JSONC setting.json with {env:} / {file:} substitution and STEPPER_CONFIG overrides, headless system-prompt overrides, a stepper mcp management CLI (list / get / add / remove), an explicit HTTP(S) proxy plus private-CA support for corporate networks, and OAuth for remote MCP servers.',
            },
        ],
    },
    install: {
        heading: 'Install',
        lead: 'Grab a prebuilt binary — no Rust toolchain required.',
        oneLinerLabel: 'One-liner',
        downloadLabel: 'Direct download',
        os: {
            macos: { name: 'macOS', sub: 'Apple Silicon' },
            linux: { name: 'Linux', sub: 'x86_64' },
            windows: { name: 'Windows', sub: 'x86_64' },
        },
        envHeading: 'Environment overrides',
        env: [
            { name: 'STEPPER_INSTALL_DIR', value: '~/.local/bin', meaning: 'Where the binary is installed.' },
            { name: 'STEPPER_DOWNLOAD_BASE_URL', value: 'releases/latest/download', meaning: 'Where the archives are hosted.' },
        ],
        sourceHeading: 'Build from source',
        sourceNote: 'Contributors with a Rust 1.95 toolchain can build directly:',
        sourceCommand: 'cargo install --path crates/stepper-cli',
    },
    quickstart: {
        heading: 'Quickstart',
        lead: 'Run stepper in a project and follow the guided setup.',
        steps: [
            { title: 'Run it', body: 'In a project with no .stepper/, stepper runs a short guided setup.', command: 'stepper' },
            {
                title: 'Pick a model & mode',
                body: 'Choose a default model and a permission mode. stepper writes .stepper/setting.json.',
                command: 'stepper config --validate',
            },
            {
                title: 'Go headless',
                body: 'Stream one-shot output to stdout and auto-approve in-project actions.',
                command: 'stepper -p "add a README badge" --mode auto',
            },
        ],
        settingTitle: '.stepper/setting.json',
        settingNote: 'The layer pipeline, your default model, and per-provider config — camelCase, deep-merged over the user-level base.',
    },
    docs: {
        heading: 'Documentation',
        lead: 'Full usage, configuration, providers, layers, permissions, and CI — read it all right here.',
        overview: 'Overview',
        updateLog: 'Update log',
        updateLogLead: 'Version-by-version changes to stepper, generated from the repository.',
        usageCard: { title: 'USAGE.md', body: 'Install, CLI reference, setting.json, providers, layers, permissions, MCP, and CI.' },
        architectureCard: { title: 'ARCHITECTURE.md', body: 'The 11-crate workspace map, data flow, and isolation invariants.' },
        cta: 'Browse all docs',
    },
    footer: {
        tagline: 'A layered CLI/TUI AI coding agent.',
        builtWith: 'Built in Rust. macOS · Linux · Windows.',
        product: 'Product',
        resources: 'Resources',
        license: 'License',
        version: 'Version',
        rights: 'Released under the MIT License.',
    },
    notFound: {
        title: 'Not found',
        body: 'That page does not exist.',
        home: 'Back home',
    },
}

export type Dictionary = typeof en
