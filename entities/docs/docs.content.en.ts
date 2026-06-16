import type { DocPage } from '@entities/docs/docs.type'

export const DOC_PAGES_EN: DocPage[] = [
    {
        blocks: [
            {
                kind: 'paragraph',
                text: 'Get started with stepper using prebuilt binaries, build from source for development, or customize your installation directory and download location. The guided setup on first run helps you configure your default model and permission mode.',
            },
            {
                kind: 'heading',
                text: 'Prebuilt binary',
            },
            {
                kind: 'paragraph',
                text: 'The quickest way to install stepper for end users without a Rust toolchain. The installer detects your OS and architecture, downloads the appropriate archive, and adds stepper to your PATH.',
            },
            {
                kind: 'subheading',
                text: 'Installation commands',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: '# macOS / Linux\ncurl -fsSL https://stepper.gumyo.net/install-files/install.sh | bash\n# Windows (PowerShell)\nirm https://stepper.gumyo.net/install-files/install.ps1 | iex',
            },
            {
                kind: 'paragraph',
                text: 'The installer places the `stepper` binary into `~/.local/bin` (or `%USERPROFILE%\\.local\\bin` on Windows) and updates your shell configuration to add that directory to your PATH.',
            },
            {
                kind: 'subheading',
                text: 'Environment variables',
            },
            {
                kind: 'paragraph',
                text: 'Customize the download location and installation directory with these environment variables:',
            },
            {
                kind: 'table',
                head: ['Environment Variable', 'Default', 'Purpose'],
                rows: [
                    ['`STEPPER_DOWNLOAD_BASE_URL`', '`https://stepper.gumyo.net/install-files`', 'Where the release archives are hosted'],
                    ['`STEPPER_INSTALL_DIR`', '`~/.local/bin`', 'Installation directory'],
                ],
            },
            {
                kind: 'subheading',
                text: 'Release archives',
            },
            {
                kind: 'paragraph',
                text: 'The installer scripts download the appropriate archive for your system. The following archives are published on every `prod` release in both versioned and version-less forms:',
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
                text: 'The install scripts and binaries are hosted on a separate project from this repository. You can point `STEPPER_DOWNLOAD_BASE_URL` to a different location to download from your own hosted archive.',
            },
            {
                kind: 'heading',
                text: 'Build from source',
            },
            {
                kind: 'paragraph',
                text: 'For contributors and developers, build stepper from source using Rust 1.95 stable (edition 2024).',
            },
            {
                kind: 'subheading',
                text: 'Build commands',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'scripts/install.sh                                  # cargo build + install to ~/.local/bin\nSTEPPER_INSTALL_DIR=/usr/local/bin sudo -E scripts/install.sh\ncargo install --path crates/stepper-cli             # installs `stepper`\ncargo build --release --bin stepper                 # binary at target/release/stepper\ncargo run                                           # run from source (interactive TUI)',
            },
            {
                kind: 'subheading',
                text: 'Quality gates',
            },
            {
                kind: 'paragraph',
                text: 'Run these checks locally to verify your build. These same gates run in CI:',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'cargo build --workspace\ncargo clippy --workspace --all-targets -- -D warnings\ncargo test --workspace            # live tests are #[ignore]/env-gated, so skipped',
            },
            {
                kind: 'heading',
                text: 'First run',
            },
            {
                kind: 'paragraph',
                text: 'When you launch stepper in a project that has no `.stepper/` directory, it runs a short guided setup to help you get started. This interactive process creates your configuration files.',
            },
            {
                kind: 'subheading',
                text: 'Guided setup',
            },
            {
                kind: 'paragraph',
                text: 'On first run, stepper prompts you to:',
            },
            {
                kind: 'list',
                items: ['Pick a default model', 'Select a permission mode'],
            },
            {
                kind: 'paragraph',
                text: 'The setup then writes `.stepper/setting.json` and `.stepper/stepper.md` to configure your project.',
            },
            {
                kind: 'subheading',
                text: 'Skip or customize setup',
            },
            {
                kind: 'paragraph',
                text: 'You can skip the interactive guided setup with the `--no-init` flag or the `STEPPER_NO_INIT=1` environment variable. Run `stepper init` to scaffold the configuration files non-interactively:',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: '# Skip interactive setup\nstepper --no-init\n\n# Or set the environment variable\nSTEPPER_NO_INIT=1 stepper\n\n# Scaffold non-interactively\nstepper init',
            },
            {
                kind: 'paragraph',
                text: 'Headless mode (using the `-p` flag) bypasses prompts entirely, runs with defaults, and creates no configuration files.',
            },
        ],
        slug: 'installation',
        title: 'Installation',
        description:
            'Install stepper via prebuilt binaries, build from source, and configure your first run with guided setup or environment overrides.',
    },
    {
        slug: 'quickstart',
        title: 'Quickstart & CLI',
        description: 'Get started with stepper and reference the CLI commands, flags, and modes.',
        blocks: [
            {
                kind: 'paragraph',
                text: 'Get up and running with stepper in minutes. The CLI offers three ways to use the agent: an interactive TUI, a headless one-shot prompt, or resuming a previous session. Each has its own command and flags.',
            },
            {
                kind: 'heading',
                text: 'Quick examples',
            },
            {
                kind: 'paragraph',
                text: 'These examples show the most common ways to invoke stepper.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: '# Interactive TUI (needs a real terminal + an API key in the env):\nSTEPPER_ANTHROPIC_API_KEY=sk-... stepper --model anthropic/claude-sonnet-4\n\n# Headless one-shot (streams assistant text to stdout, auto-approves actions):\nstepper -p "add a README badge" --model ollama-cloud/qwen3-coder --mode auto\n\n# Resume a previous session:\nstepper --resume <session-id>',
            },
            {
                kind: 'paragraph',
                text: 'With a `.stepper/` directory in your project, you can run `stepper` without arguments and it will use the configured pipeline, model, and mode.',
            },
            {
                kind: 'heading',
                text: 'CLI reference',
            },
            {
                kind: 'paragraph',
                text: 'The full usage line and all available commands and global options.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper [OPTIONS] [COMMAND]',
            },
            {
                kind: 'subheading',
                text: 'Commands',
            },
            {
                kind: 'table',
                head: ['Command', 'What it does'],
                rows: [
                    ['run', 'Launch the interactive TUI (the default with no subcommand).'],
                    ['auth login --codex', 'Sign in to ChatGPT (OAuth/PKCE) for the Codex backend.'],
                    ['auth set-key <provider>', 'Store a provider API key in the OS keyring (read from stdin).'],
                    ['auth delete-key <provider>', 'Remove a provider key from the OS keyring.'],
                    ['config --schema', 'Print the JSON Schema for `setting.json`.'],
                    ['config --validate', "Validate the project's `setting.json`."],
                    ['init', 'Scaffold `.stepper/` (detects the stack → `stepper.md` + `setting.json`).'],
                ],
            },
            {
                kind: 'subheading',
                text: 'Global options',
            },
            {
                kind: 'table',
                head: ['Flag', 'Meaning'],
                rows: [
                    [
                        '--model <provider/model-id>',
                        'Default model, e.g. `anthropic/claude-sonnet-4`, `ollama-cloud/qwen3-coder`, `omlx/deepseek-coder`.',
                    ],
                    ['--mode <auto|plan|accept-edits>', 'Permission mode (precedence: flag > `setting.json` `mode` > `accept-edits`).'],
                    ['-p, --print <prompt>', 'Headless one-shot: run the prompt, stream stdout, auto-approve.'],
                    ['--resume <session-id>', 'Continue a saved session (seeds its prior context).'],
                    ['--cwd <dir>', 'Run against another directory.'],
                ],
            },
        ],
    },
    {
        slug: 'configuration',
        title: 'Configuration',
        description:
            'Configure stepper with camelCase JSON: user-level base merged with project settings, featuring providers, layers, permissions, and MCP servers.',
        blocks: [
            {
                kind: 'paragraph',
                text: "The `.stepper/setting.json` file configures stepper's behavior and defaults. Settings use camelCase and are forward-compatible (unknown keys are ignored). A user-level `~/.stepper/setting.json` serves as the base configuration; a project's configuration is deep-merged on top, where objects merge and arrays replace.",
            },
            {
                kind: 'subheading',
                text: 'Configuration Schema',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '{\n  "mode": "auto",                         // auto | plan | accept-edits (CLI --mode wins)\n  "defaultModel": "anthropic/claude-sonnet-4",\n  "step": ["plan", "implement"],          // the layer pipeline, in order\n\n  "providers": {\n    "anthropic": { "kind": "anthropic" },\n    "ollama-cloud": { "kind": "openai-compat", "baseUrl": "https://ollama.com/v1" },\n    "omlx": {\n      "kind": "openai-compat",\n      "baseUrl": "http://localhost:8000/v1",\n      "contextWindow": 128000             // override ctx% gauge for unlisted models\n    },\n    "codex": { "kind": "openai-responses", "auth": "codex-oauth" }\n  },\n\n  "orchestrator": { "model": "anthropic/claude-sonnet-4", "temperature": 0.2 },\n\n  "permissions": {                        // global rules (deny > ask > allow > mode)\n    "allow": ["Read(**)", "Bash(cargo *)"],\n    "ask":   ["Write(**)"],\n    "deny":  ["Bash(rm -rf *)", "Read(//etc/**)"]  \n  },\n  "approvals": [{ "rule": "Bash(npm run build)" }],   // persisted "always allow"\n\n  "mcpServers": {\n    "context7": {\n      "type": "stdio",\n      "command": "npx",\n      "args": ["-y", "@upstash/context7-mcp", "--api-key", "{env:CONTEXT7_KEY}"],\n      "alwaysLoad": true                  // visible to every layer regardless of mcp.allow\n    },\n    "my-http": {\n      "type": "http",\n      "url": "https://example/mcp",\n      "headers": { "Authorization": "Bearer {env:MY_TOKEN}" }\n    }\n  },\n\n  "hooks": {\n    "PreToolUse": [{ "matcher": "write_file", "command": "echo blocked >&2; exit 2" }]\n  },\n\n  "compaction": { "provider": "anthropic/claude-haiku-4" },  // model-summarize folded history\n  "dispatch":   { "enabled": true }       // expose the model-callable `dispatch` tool\n}',
            },
            {
                kind: 'subheading',
                text: 'Schema Validation',
            },
            {
                kind: 'paragraph',
                text: "Run `stepper config --schema` to print the full JSON Schema for `setting.json`. Use `stepper config --validate` to validate your project's configuration against the schema.",
            },
            {
                kind: 'subheading',
                text: 'Key Configuration Fields',
            },
            {
                kind: 'list',
                items: [
                    '`mode` — Permission mode: `auto` (in-project actions run; out-of-project writes prompt), `plan` (read-only; edits blocked), or `accept-edits` (in-project edits auto-accepted; outside reads prompt). CLI `--mode` takes precedence.',
                    '`defaultModel` — The default model provider and ID (e.g., `anthropic/claude-sonnet-4`).',
                    '`step` — Array of layer names forming the pipeline, executed in order.',
                    '`providers` — Provider definitions with `kind` (anthropic, openai-compat, openai-responses) and connection details. Optional `contextWindow` overrides the context gauge for unlisted models.',
                    '`orchestrator` — Configuration for the orchestrator layer, including `model` and `temperature`.',
                    '`permissions` — Global permission rules with `allow`, `ask`, and `deny` lists. Rules use specifiers like `Bash(npm run *)`, `Read(/path)`, `Write(**)`, and `Mcp(server, tool)`.',
                    '`approvals` — Array of persisted approval rules ("always allow" decisions).',
                    '`mcpServers` — MCP server configurations. Each server specifies `type` (stdio or http), connection details, and optional `alwaysLoad` to bypass layer-scoped filtering.',
                    '`hooks` — Event hooks such as `PreToolUse` that intercept tool execution.',
                    '`compaction` — Configuration for history folding; specifies a (cheap) `provider` model to summarize the folded portion.',
                    '`dispatch` — Enable the model-callable `dispatch` tool for parallel sub-agents.',
                ],
            },
        ],
    },
    {
        slug: 'providers',
        title: 'Providers & keys',
        description: 'Configure API keys for five AI providers with environment variables, OS keyring, or explicit config.',
        blocks: [
            {
                kind: 'paragraph',
                text: 'stepper supports five AI providers. Configure your API keys via explicit config, environment variables, or OS keyring — precedence matters, and each provider has different auth requirements.',
            },
            {
                kind: 'subheading',
                text: 'Supported providers',
            },
            {
                kind: 'list',
                items: [
                    '`ollama-cloud` — Ollama cloud models',
                    '`oMLX` — local Apple-Silicon MLX on `localhost:8000/v1`; auth is optional',
                    '`OpenAI` — OpenAI API',
                    '`Anthropic` — Anthropic Claude models',
                    '`Codex` — ChatGPT via OAuth',
                ],
            },
            {
                kind: 'subheading',
                text: 'Key precedence',
            },
            {
                kind: 'paragraph',
                text: 'stepper looks for API keys in this order: explicit `apiKey` in config → environment variable → OS keyring. The first match wins.',
            },
            {
                kind: 'subheading',
                text: 'Set keys via environment variables',
            },
            {
                kind: 'paragraph',
                text: 'Use the `STEPPER_<PROVIDER>_API_KEY` convention, where the provider name is uppercased and hyphens are replaced with underscores.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: "# Env var: STEPPER_<PROVIDER>_API_KEY  (provider uppercased, '-' → '_')\nexport STEPPER_ANTHROPIC_API_KEY=sk-ant-...\nexport STEPPER_OLLAMA_CLOUD_API_KEY=...",
            },
            {
                kind: 'subheading',
                text: 'Store keys in OS keyring',
            },
            {
                kind: 'paragraph',
                text: "Use the keyring commands to securely store and manage keys. The keyring stores keys in your system's credential manager (Keychain on macOS, secret-service on Linux, Credential Manager on Windows).",
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
                text: 'To use the Codex provider (ChatGPT), authenticate with OAuth. This opens a browser and stores credentials locally.',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: '# Codex (ChatGPT) OAuth — opens a browser, stores ~/.stepper/codex-auth.json (0600):\nstepper auth login --codex',
            },
            {
                kind: 'subheading',
                text: 'oMLX local setup',
            },
            {
                kind: 'paragraph',
                text: 'oMLX on localhost usually needs no API key, making it ideal for local development without external dependencies.',
            },
            {
                kind: 'note',
                text: 'Key precedence is explicit config `apiKey` > env var > OS keyring. Always set keys before running stepper, or it will fail at runtime when a layer requires a model from an unconfigured provider.',
            },
        ],
    },
    {
        slug: 'layers',
        title: 'Layers',
        description:
            'Configure per-layer models, permissions, tools, and skills; run layers sequentially or in parallel fan-out with task assignment.',
        blocks: [
            {
                kind: 'paragraph',
                text: 'Layers are the individual step agents in your pipeline, each running in its own sub-process with its own provider, model, and fresh context window. Layers execute in the order specified by the `step` array in `setting.json`. Only the free-text summary from each layer is handed to the next—not the full conversation history or tool outputs.',
            },
            {
                kind: 'heading',
                text: 'Layer file structure',
            },
            {
                kind: 'paragraph',
                text: "Each name in `step` may have a layer file at `.stepper/layer/<name>/index.md`. This file contains a YAML frontmatter block (configuration) followed by the layer's system prompt body.",
            },
            {
                kind: 'code',
                lang: 'markdown',
                code: '---\ndescription: implementation layer        # required\nmodel: omlx/deepseek-coder               # or provider: + the default model\ntemperature: 0.2                         # sampling overrides → the request\ntop_p: 0.9\ntools:\n  allow: [read_file, write_file, edit_file, bash]\n  deny:  [web_fetch]\npermission:                              # per-layer overrides (tighten-only)\n  Bash(rm *): deny\n  Write(**): ask\nmcp:\n  allow: [context7]                      # which MCP servers this layer sees\nskills: [rust-style]                     # skill bodies injected into the system prompt\nsteps: 40                                # step cap (ReAct iterations)\non-failure: skip                         # stop (default) | skip the layer and continue\nretries: 1                               # extra attempts before applying on-failure\ncolor: green\n---\nYou are the implementation layer. Carry out the plan using the tools.',
            },
            {
                kind: 'subheading',
                text: 'Frontmatter fields',
            },
            {
                kind: 'list',
                items: [
                    "`description` (required) — A brief description of the layer's role.",
                    '`model` or `provider` — Override the default model for this layer. Use `provider/model-id` format (e.g., `omlx/deepseek-coder`).',
                    '`temperature` and `top_p` — Sampling parameters passed to the API request.',
                    '`tools.allow` and `tools.deny` — Control which tools (e.g., `read_file`, `write_file`, `bash`) this layer can call.',
                    '`permission` — Per-layer permission rules that merge with global rules; can only tighten restrictions (see section below).',
                    '`mcp.allow` — List MCP servers this layer can access (e.g., `[context7]`).',
                    '`skills` — Array of skill names available to this layer; bodies are lazy-loaded on demand.',
                    '`steps` — Maximum number of ReAct iterations before the layer stops.',
                    '`on-failure` — Either `stop` (default; halt the pipeline) or `skip` (continue to the next layer).',
                    '`retries` — Number of extra attempts before `on-failure` is applied.',
                    '`color` — Optional TUI color label for the layer.',
                ],
            },
            {
                kind: 'subheading',
                text: 'Permission tightening',
            },
            {
                kind: 'paragraph',
                text: 'Per-layer `permission` rules are merged onto the global rules and respect the resolution order `deny > ask > allow`. This means a layer can only **tighten** restrictions—it cannot relax a base `deny` rule. For example, if the global config denies `Bash(rm *)`, a layer cannot allow it; but a layer can ask for confirmation on a tool that was globally allowed.',
            },
            {
                kind: 'heading',
                text: 'Parallel layers (fan-out)',
            },
            {
                kind: 'paragraph',
                text: 'A layer can run as a fan-out: one concurrent worker per subtask, each with its own fresh context window and the same layer configuration, all joined before the next layer processes the result. To enable parallel execution, mark the layer `parallel: true`.',
            },
            {
                kind: 'subheading',
                text: 'Task assignment',
            },
            {
                kind: 'paragraph',
                text: 'The **preceding** layer (the one before the parallel layer) is offered the `assign_tasks` tool. This layer calls `assign_tasks({ tasks: [{label, prompt}, …] })` to split work into subtasks. Each subtask becomes one worker in the parallel layer. If the preceding layer does not assign any tasks, the parallel layer runs once with no task context.',
            },
            {
                kind: 'subheading',
                text: 'Concurrency and worker panel',
            },
            {
                kind: 'paragraph',
                text: 'Use `parallel-max` to cap the number of workers running at once (e.g., `parallel-max: 4`). This limits concurrency but does not drop tasks—they queue and run as workers finish. The TUI displays a live **worker panel** showing one row per worker: current status, the last tool called, and token count. After all workers finish, their summaries converge into a single handoff for the next layer.',
            },
            {
                kind: 'code',
                lang: 'markdown',
                code: '---\ndescription: implementation layer\nparallel: true            # fan out — one worker per assigned subtask\nparallel-max: 4           # max workers running AT ONCE (concurrency cap; no task is dropped)\nmodel: omlx/deepseek-coder\ntools:\n  allow: [read_file, write_file, edit_file, bash]\n---\nYou are one implementation worker. Complete only your assigned subtask, then\nend with a concise summary of what you changed.',
            },
            {
                kind: 'subheading',
                text: 'Workflow example',
            },
            {
                kind: 'paragraph',
                text: 'With `step: ["plan", "implement", "test"]` and `implement` marked `parallel:` The `plan` layer outputs its summary and calls `assign_tasks` to split the work into implementation subtasks. Each subtask spins up one `implement` worker with the full layer config. Once all workers complete, `test` receives the merged summary of all worker changes. The model-callable `dispatch` tool (when `dispatch.enabled: true`) uses the same worker panel for its sub-agents.',
            },
        ],
    },
    {
        slug: 'permissions',
        title: 'Permissions',
        description: 'Permission modes and rule specifiers for controlling agent tool access.',
        blocks: [
            {
                kind: 'paragraph',
                text: 'Permission modes control how the agent handles tool use when no explicit rule matches. Rules specify which commands, file paths, and MCP tools are allowed, asked about, or denied — with support for wildcards, compound commands, and redirections.',
            },
            {
                kind: 'heading',
                text: 'Permission modes',
            },
            {
                kind: 'list',
                items: [
                    '`auto` — in-project actions run; out-of-project writes prompt.',
                    '`plan` — read-only; edits are blocked.',
                    '`accept-edits` — in-project edits auto-accepted; outside reads prompt.',
                ],
            },
            {
                kind: 'heading',
                text: 'Rule specifiers',
            },
            {
                kind: 'paragraph',
                text: 'Rules are used in the global `permissions` object and per-layer `permission` overrides. The resolver applies them in order: deny > ask > allow > mode default.',
            },
            {
                kind: 'table',
                head: ['Form', 'Matches'],
                rows: [
                    ['`Bash(npm run *)`', 'bash commands (`*` wildcard, trailing `:*` = prefix).'],
                    ['`Read(//etc/**)`', 'file read paths (`/`=project root, `//`=absolute, `~/`=home).'],
                    ['`Write(**)`', 'file write paths (same path syntax).'],
                    ['`Edit(**)`', 'file edit paths (same path syntax).'],
                    ['`Mcp(server, tool)`', 'an MCP tool (`tool` optional / `*` for any).'],
                    ['`Bash` (bare)', 'any bash command for that tool.'],
                ],
            },
            {
                kind: 'heading',
                text: 'Compound bash escalation',
            },
            {
                kind: 'note',
                text: 'Compound bash (`a && b`) is gated per-component (most restrictive wins); a bash command with redirection / `$()` / backticks / `&` escalates an `allow` to `ask`.',
            },
        ],
    },
    {
        slug: 'extensibility',
        title: 'Slash commands, skills & MCP',
        description:
            'Built-in slash commands, custom commands with permission-gated substitutions, skills with progressive disclosure, and MCP server integration.',
        blocks: [
            {
                kind: 'paragraph',
                text: "Extend stepper's capabilities through three mechanisms: built-in and custom slash commands that run in-process, skills that load on demand to keep context lean, and MCP servers that provide sandboxed tool access. All custom content is permission-gated with fail-closed semantics — sensitive operations require explicit allow rules.",
            },
            {
                kind: 'heading',
                text: 'Built-in slash commands',
            },
            {
                kind: 'paragraph',
                text: 'The following commands are handled in-process and run no agent turn:',
            },
            {
                kind: 'list',
                items: [
                    '`/help` — list all available commands',
                    '`/clear` — reset the conversation/session',
                    '`/model [provider/model-id]` — show the active model or switch to a new one (validated before applying to every layer)',
                    "`/context` — display the active model's context window",
                ],
            },
            {
                kind: 'heading',
                text: 'Custom slash commands',
            },
            {
                kind: 'paragraph',
                text: 'Custom commands live in `.stepper/commands/<name>.md` files. Each file contains YAML frontmatter (metadata) followed by a template body that supports substitutions.',
            },
            {
                kind: 'subheading',
                text: 'File format and invocation',
            },
            {
                kind: 'paragraph',
                text: 'In the TUI, typing `/` opens a palette where you can select, navigate with ↑↓, complete with Tab, and run with Enter. Invoke as `/name args`. Built-in commands take precedence over same-named custom command files.',
            },
            {
                kind: 'subheading',
                text: 'Substitution syntax',
            },
            {
                kind: 'paragraph',
                text: 'Command templates support the following substitutions:',
            },
            {
                kind: 'list',
                items: [
                    '`!`shell`` — inline shell code blocks',
                    '`$1`, `$2`, … — positional arguments from the command invocation',
                    '`{file:path}` or `@include path` — read a file at the given path',
                    '`{env:VAR}` — expand an environment variable',
                ],
            },
            {
                kind: 'subheading',
                text: 'Permission gating (fail-closed)',
            },
            {
                kind: 'note',
                text: 'All substitutions are permission-gated with fail-closed semantics. This prevents planted command files from smuggling un-vetted shell, file, or secret access into a prompt.',
            },
            {
                kind: 'list',
                items: [
                    '`!`shell`` blocks run only if an explicit `allow` rule matches (e.g., `"allow": ["Bash(git diff)"]`)',
                    '`{file:…}` and `@include` reads are gated by `Read` rules',
                    'Environment variables matching secret patterns (`*_API_KEY`, `*_TOKEN`, `AWS_*`, …) are never expanded via `{env:…}`',
                    "Writes under `.stepper/` always require explicit approval — even in `accept-edits` mode — because this directory controls the agent's own security",
                ],
            },
            {
                kind: 'heading',
                text: 'Skills',
            },
            {
                kind: 'paragraph',
                text: "Skills follow a Claude-Code-style progressive disclosure pattern: the system prompt only advertises a skill's name and description, and the model loads its full body on demand. This keeps the base context window lean.",
            },
            {
                kind: 'subheading',
                text: 'File format',
            },
            {
                kind: 'paragraph',
                text: 'Skills are stored in `.stepper/skills/<name>/SKILL.md` with YAML frontmatter containing `name` and `description` keys, followed by the skill body.',
            },
            {
                kind: 'subheading',
                text: 'Declaring and using skills',
            },
            {
                kind: 'paragraph',
                text: 'A layer declares which skills it may use in its frontmatter `skills:` list. When the model needs a skill, it calls the `skill` tool with `{"name":"<skill>"}` to load the full body. The skill tool is scoped per layer and only serves that layer\'s declared skills. Skills are available to fan-out workers as well.',
            },
            {
                kind: 'heading',
                text: 'MCP (Model Context Protocol) servers',
            },
            {
                kind: 'paragraph',
                text: 'MCP servers provide tools and resources to stepper layers. They are configured globally in `setting.json` under `mcpServers` and can run as stdio or HTTP servers.',
            },
            {
                kind: 'subheading',
                text: 'Configuration',
            },
            {
                kind: 'paragraph',
                text: 'Define MCP servers in `.stepper/setting.json`:',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"mcpServers": {\n  "context7": {\n    "type": "stdio",\n    "command": "npx",\n    "args": ["-y", "@upstash/context7-mcp", "--api-key", "{env:CONTEXT7_KEY}"],\n    "alwaysLoad": true                  // visible to every layer regardless of mcp.allow\n  },\n  "my-http": {\n    "type": "http",\n    "url": "https://example/mcp",\n    "headers": { "Authorization": "Bearer {env:MY_TOKEN}" }\n  }\n}',
            },
            {
                kind: 'subheading',
                text: 'Tool namespacing and scoping',
            },
            {
                kind: 'list',
                items: [
                    'Tools from MCP servers are namespaced as `mcp__<server>__<tool>`',
                    'All MCP tool use is gated by permission rules',
                    'Per-layer scoping: layers declare which MCP servers they can use via the `mcp.allow` list in their layer config',
                    '`alwaysLoad: true` — bypasses per-layer scoping, making the server visible to every layer regardless of `mcp.allow`',
                ],
            },
            {
                kind: 'subheading',
                text: 'HTTP server headers',
            },
            {
                kind: 'paragraph',
                text: 'HTTP servers support a `headers` object. The `Authorization` header is routed specially; other headers are included in requests to the server.',
            },
        ],
    },
    {
        slug: 'features',
        title: 'Sessions & more',
        description: 'Dispatch, compaction, checkpoints, sessions, hooks, interrupts, and prompt caching features for layered AI coding workflows.',
        blocks: [
            {
                kind: 'paragraph',
                text: 'Stepper provides advanced session management, context optimization, and workflow control features to extend and refine layered AI agent behavior.',
            },
            {
                kind: 'heading',
                text: 'Dispatch tool',
            },
            {
                kind: 'paragraph',
                text: 'Enable `dispatch` in configuration to allow the model to fan out parallel sub-agents. Each sub-agent runs in its own context window, and their summaries are returned to the caller. The TUI displays a live **worker panel** (one row per worker: status, last tool, token count) while the fan-out executes.',
            },
            {
                kind: 'paragraph',
                text: 'Configure it in `.stepper/setting.json`:',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"dispatch": { "enabled": true }',
            },
            {
                kind: 'heading',
                text: 'Compaction',
            },
            {
                kind: 'paragraph',
                text: 'When conversation history crosses approximately 70% of the context window, stepper automatically folds earlier messages to free space. If `compaction.provider` is set, a designated (typically cheap) model summarizes the folded part; otherwise, a heuristic marker is used.',
            },
            {
                kind: 'paragraph',
                text: 'Configure a compaction model:',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"compaction": { "provider": "anthropic/claude-haiku-4" }',
            },
            {
                kind: 'heading',
                text: 'Checkpoint and rewind',
            },
            {
                kind: 'paragraph',
                text: 'Every turn automatically snapshots the working tree state. Use the `/rewind` command to restore a prior snapshot and truncate the session at that point, allowing you to undo changes and branch from an earlier state.',
            },
            {
                kind: 'heading',
                text: 'Sessions and resume',
            },
            {
                kind: 'paragraph',
                text: "Session state persists to `.stepper/sessions/<id>.json`. Resume a previous session with the `--resume` flag, which seeds the new run with the prior session's context:",
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'stepper --resume <session-id>',
            },
            {
                kind: 'heading',
                text: 'Hooks',
            },
            {
                kind: 'paragraph',
                text: 'Configure lifecycle hooks to run shell commands at key points in a session. Hooks are defined in `.stepper/setting.json` under the `hooks` key. Non-zero exit codes block the corresponding operation (e.g., `PreToolUse`).',
            },
            {
                kind: 'list',
                items: [
                    '`SessionStart` — runs when a session begins',
                    '`SessionStop` — runs when a session ends',
                    '`PreToolUse` — runs before a tool is called; non-zero exit blocks the tool',
                    '`PostToolUse` — runs after a tool completes',
                ],
            },
            {
                kind: 'paragraph',
                text: 'Example hook configuration:',
            },
            {
                kind: 'code',
                lang: 'jsonc',
                code: '"hooks": {\n  "PreToolUse": [{ "matcher": "write_file", "command": "echo blocked >&2; exit 2" }]\n}',
            },
            {
                kind: 'heading',
                text: 'Interrupt',
            },
            {
                kind: 'paragraph',
                text: 'Press `Esc` during a running turn to cancel execution. This aborts the stream and any in-flight tool calls without terminating the session — the prompt is immediately ready for the next input.',
            },
            {
                kind: 'heading',
                text: 'Prompt caching',
            },
            {
                kind: 'paragraph',
                text: 'The per-layer system prompt and tools prefix is marked cacheable for Anthropic API calls, so repeated requests in a ReAct loop benefit from cache-read pricing. OpenAI and Responses-compatible providers cache by prefix automatically.',
            },
            {
                kind: 'heading',
                text: 'TUI keyboard shortcuts',
            },
            {
                kind: 'table',
                head: ['Key', 'Action'],
                rows: [
                    ['`Enter`', 'Submit the current prompt'],
                    ['`Shift+Enter`', 'Insert a newline without submitting'],
                    ['`Shift+Tab`', 'Cycle permission mode (`auto` → `plan` → `accept-edits` → `auto`)'],
                    ['`Esc`', 'Interrupt the current turn (abort stream and in-flight tools)'],
                    ['`Ctrl+C`', 'Quit the TUI'],
                    ['`!cmd`', 'Run a shell command'],
                    ['`@`', 'Open file picker'],
                    ['`/`', 'Open command palette'],
                    ['`y` (approval overlay)', 'Allow the action once'],
                    ['`a` (approval overlay)', 'Always allow this action'],
                    ['`n` (approval overlay)', 'Deny the action'],
                ],
            },
        ],
    },
    {
        slug: 'ci',
        title: 'CI & releases',
        description: 'Automated CI pipelines, manual workflow runs, and cross-platform release binaries via GitHub Actions.',
        blocks: [
            {
                kind: 'paragraph',
                text: 'The stepper repository uses GitHub Actions for continuous integration, manual workflow runs, and automated release distribution. Three workflows handle building, testing, and publishing binaries across platforms.',
            },
            {
                kind: 'heading',
                text: 'ci.yml — Build & test on push',
            },
            {
                kind: 'paragraph',
                text: 'Runs on every push and pull request to validate the codebase. The workflow executes the following quality gates:',
            },
            {
                kind: 'list',
                items: [
                    '`build` — compiles the workspace with `cargo build --workspace`',
                    '`clippy -D warnings` — runs clippy linter with treat-warnings-as-errors mode to enforce code quality',
                    '`test` — executes `cargo test --workspace` (live tests marked `#[ignore]` or gated by environment are skipped)',
                    '`install` — a smoke test that runs `scripts/install.sh` to verify the installation script works',
                ],
            },
            {
                kind: 'heading',
                text: 'run.yml — Manual headless execution',
            },
            {
                kind: 'paragraph',
                text: 'A manual workflow triggered via `workflow_dispatch` for on-demand test runs. The workflow builds and installs stepper, then runs it headless with user-provided inputs.',
            },
            {
                kind: 'list',
                items: [
                    'Accepts three workflow inputs: `prompt` (the headless prompt), `model` (the model ID to use), and `mode` (the permission mode)',
                    'Uses repo secrets named `STEPPER_<PROVIDER>_API_KEY` for provider authentication (e.g., `STEPPER_ANTHROPIC_API_KEY`)',
                ],
            },
            {
                kind: 'heading',
                text: 'release.yml — Cross-platform publishing',
            },
            {
                kind: 'paragraph',
                text: 'Triggered by a push to the `prod` branch or manual workflow dispatch. This workflow gates on passing quality checks, builds optimized release binaries, and publishes them to a GitHub Release.',
            },
            {
                kind: 'subheading',
                text: 'Quality gates',
            },
            {
                kind: 'list',
                items: [
                    '`build` — compiles with `cargo build --workspace`',
                    '`clippy -D warnings` — enforces zero warnings',
                    '`test` — runs the full test suite',
                ],
            },
            {
                kind: 'subheading',
                text: 'Release artifacts',
            },
            {
                kind: 'paragraph',
                text: 'The workflow builds and publishes binaries for three target platforms:',
            },
            {
                kind: 'list',
                items: ['macOS arm64 (Apple Silicon)', 'Linux x86_64', 'Windows x86_64'],
            },
            {
                kind: 'paragraph',
                text: 'For each target, the workflow publishes both versioned and version-less archives:',
            },
            {
                kind: 'list',
                items: [
                    'Versioned: `stepper-<version>-<target>.tar.gz` or `.zip` (includes version in name)',
                    'Version-less: `stepper-<target>.tar.gz` or `.zip` (stable URL for static hosting)',
                ],
            },
            {
                kind: 'paragraph',
                text: 'Archives are published to a GitHub Release tagged `v<version>`, where the version is read from the workspace version in `Cargo.toml`. Bump the version in `Cargo.toml` to cut a new release; re-pushing the same version updates the release assets.',
            },
            {
                kind: 'subheading',
                text: 'Distribution',
            },
            {
                kind: 'paragraph',
                text: 'The repository is public, so end users download binaries directly from the latest GitHub release. The install scripts referenced in §1 (hosted on the separate stepper.gumyo.net site) pull from `releases/latest/download` to fetch the platform-specific archive, decompress it, and install the `stepper` binary into `~/.local/bin`.',
            },
        ],
    },
    {
        slug: 'architecture',
        title: 'Architecture',
        description:
            '10-crate Cargo workspace design: crate roles, isolation invariants, and data flow from CLI bootstrap through multi-layer agent orchestration to TUI.',
        blocks: [
            {
                kind: 'paragraph',
                text: 'Stepper is a layered CLI/TUI AI coding agent built in Rust, structured as a 10-crate Cargo workspace. This page outlines the crate organization, data flow from CLI bootstrap to agent execution, and the core isolation invariants that ensure clean architectural boundaries.',
            },
            {
                kind: 'heading',
                text: 'Crate Overview',
            },
            {
                kind: 'paragraph',
                text: 'The workspace contains 10 implemented crates (of 13 originally planned), each with a specific responsibility in the system:',
            },
            {
                kind: 'table',
                head: ['Crate', 'Role'],
                rows: [
                    [
                        '`stepper-protocol`',
                        'Channel types and DTOs: `Action` (TUI→core), `AppEvent` (core→TUI), `ApprovalRequest` (oneshot). Depends only on serde, uuid, and tokio sync primitives.',
                    ],
                    ['`stepper-tui`', 'Ratatui-based TUI with inline viewport. Depends only on `stepper-protocol` (plus ratatui stack).'],
                    [
                        '`stepper-cli`',
                        'Clap CLI binary. Wires RealCore (default=TUI agent; `-p` flag=headless auto-approval mode), handles `auth login`, `config`, `init` commands, and MCP server lifecycle.',
                    ],
                    [
                        '`stepper-provider`',
                        'Trait and normalized types for LLM providers: `ChatRequest`, `Message`, `ContentBlock`, `ChatEvent`, `Usage`, `StopReason`, `ToolSpec`. HTTP-free; no reqwest or tokio-rt.',
                    ],
                    [
                        '`stepper-providers`',
                        'Concrete provider adapters (Anthropic, OpenAI-compatible, Responses), auth (API key, OAuth Codex), streaming via reqwest+SSE, token storage in keyring.',
                    ],
                    [
                        '`stepper-config`',
                        'Configuration loading: `.stepper/` discovery, `setting.json` deep-merge, frontmatter parsing (YAML), substitution engine, model/provider resolution, JSON schema validation.',
                    ],
                    [
                        '`stepper-permission`',
                        'Pure permission evaluation engine: `deny > ask > allow > mode` precedence, bash redirection/command parsing, symlink escape prevention, path canonicalization.',
                    ],
                    [
                        '`stepper-tools`',
                        'Tool trait and registry; 9 built-in tools (read/write/edit/bash/search/grep/todo/web_fetch); MCP tool bridging; secret path detection; permission gating via `ToolCx`.',
                    ],
                    [
                        '`stepper-mcp`',
                        'MCP 1.7 client (stdio/HTTP transport), tool namespacing, timeouts, integration with local tool registry. Validated with context7.',
                    ],
                    [
                        '`stepper-core`',
                        'Main orchestrator: provider resolution, `AgentLoop` (ReAct pattern), multi-step pipelines, parallel layer execution, session/checkpoint management, handoff summarization, built-in slash commands.',
                    ],
                ],
            },
            {
                kind: 'heading',
                text: 'Isolation Invariants',
            },
            {
                kind: 'paragraph',
                text: 'Three strict architectural boundaries are enforced via CI tests (`crates/stepper-cli/tests/isolation.rs`) using `cargo metadata` analysis:',
            },
            {
                kind: 'list',
                items: [
                    '`stepper-tui` depends only on `stepper-protocol` (plus ratatui). No core, config, providers, or HTTP access.',
                    '`reqwest` and HTTP are confined to `stepper-providers`, `stepper-tools` (web_fetch), and `stepper-mcp` (HTTP transport). `stepper-protocol` and `stepper-provider` trait are HTTP-free and tokio-rt-free.',
                    '`stepper-protocol` is clap-free (no CLI parsing in the channel contract).',
                ],
            },
            {
                kind: 'heading',
                text: 'High-Level Data Flow',
            },
            {
                kind: 'code',
                lang: 'text',
                code: 'stepper-cli main.rs (#[tokio::main])\n  ├─ build_orchestrator(model, mode, cwd)\n  │    Config::load → build_steps(layer frontmatter+skills) → ensure_provider(convention fallback)\n  │    McpManager::connect(mcpServers) → register tools to base_tools\n  │    ConfigProviderResolver + RuleSet + HookHost\n  ├─ channels: mpsc<Action>(TUI→core) + mpsc<AppEvent>(core→TUI) + CancellationToken\n  ├─ stepper-core::spawn_core(orchestrator, session, action_rx, cancel) → event_rx  [RealCore]\n  │    while action:\n  │      SubmitInput → checkpoint_turn → Orchestrator.run_turn → session append/save\n  │      SlashCommand → commands::expand(substitution) → run_turn\n  │      Rewind → restore+turns truncate\n  │      RunShell → bash tool single-turn execution\n  │    Orchestrator.run_turn: SessionStart → step layers (sequence or parallel):\n  │      resolver.resolve(model) → Box<dyn LlmProvider>\n  │      base_tools.filtered(allow/deny).filter_mcp\n  │      ToolCx{cwd, project_root, mode, rules, approver=ChannelApprover, cancel}\n  │      AgentLoop.drive(system, handoff): stream→token/usage emit→compact→tool exec\n  │        (gate→approver) → result injection → repeat\n  │      emit: LayerStarted/Finished/ModelChanged/UsageUpdated/ToolCall* → handoff\n  └─ stepper-tui::run_tui(event_rx, action_tx, init, cancel)\n       blocking input thread(event::poll/read) → mpsc → select!{input, 33ms tick, AppEvent rx, cancel}\n       input → (mode-dependent) Action → AppState.apply_action → Effect(Send/CommitToScrollback)\n       ApprovalRequested(oneshot) → overlay y/a/n → reply.send (resumes agent loop)',
            },
            {
                kind: 'note',
                text: '`spawn_fake_core` (mock) remains in `stepper-tui` for walking-skeleton testing; the CLI uses only `RealCore` (`stepper-core::spawn_core`). Both satisfy the same channel contract and are interchangeable.',
            },
            {
                kind: 'heading',
                text: 'Key Types & Contracts',
            },
            {
                kind: 'list',
                items: [
                    '**Channel contract** (fixed): `mpsc<Action>` + `mpsc<AppEvent>` + `CancellationToken`. Satisfied by both RealCore and mock.',
                    '**`LlmProvider`**: implements `chat_stream(req, cancel) → BoxStream<ChatEvent>`. Normalization via `WireDelta` → `StreamAccumulator` → `ChatEvent`.',
                    '**`Tool`**: implements `spec()` / `call(args, cx) → ToolResult`. `ToolCx.gate(PermissionRequest)` enforces permission evaluation and approval gating. Built-in and MCP tools use the same trait.',
                    '**`ProviderResolver`**: model ref → `Box<dyn LlmProvider>` + `ModelInfo`. Implemented by `ConfigProviderResolver`.',
                    '**`Approver`** (tools) → **`ChannelApprover`** (core): Ask decision emits `AppEvent::ApprovalRequested{oneshot}` → TUI overlay → user reply → resumes agent loop.',
                    '**Orchestrator / AgentLoop**: `run_turn` → step layers (each with independent context, provider, tools) → `AgentLoop.drive` (ReAct pattern). Handoff = free-text summarization chain.',
                    '**Sessions & Checkpoints**: `SessionStore` (`.stepper/sessions/<id>.json`), `Snapshotter` (`.stepper/checkpoints/<turn>/` file copy). `--resume` seeds `resume_context`; `Rewind` restores, prunes, truncates turns.',
                ],
            },
            {
                kind: 'heading',
                text: 'Advanced Features',
            },
            {
                kind: 'list',
                items: [
                    "**Parallel layers**: A step with `parallel: true` (and optional `parallel-max` worker cap) causes the orchestrator to fan-out the prior layer's `assign_tasks` list to workers. Each worker is a sub-agent. Fallback to sequential if no task list.",
                    '**Built-in slash commands**: `/help`, `/clear` (session reset), `/model [provider/model-id]` (validation + first step switch + `ModelChanged` event), `/context` (context window summary).',
                    '**Skills**: Layers declare `skills` in frontmatter; `SkillTool` allows models to call `skill { name }` to invoke layer-specific skills. Progressive disclosure: skill name+description are advertised in system prompt, body served on-demand.',
                    '**Dispatch tool** (C4): Models can call `dispatch(...)` to spawn parallel sub-agents (workers) from the current layer onward. Orchestrator must enable it; sub-agents cannot recurse.',
                    '**Prompt caching**: `ChatRequest.cache: bool` option enables Anthropic prefix caching; system message wrapped in `cache_control: ephemeral`.',
                    "**Model-driven compaction**: If `compaction.provider` is configured, the orchestrator uses that provider's model to summarize message history on soft threshold (0.70 context), keeping last 6 messages intact.",
                    '**Permission gating**: `ToolCx::gate(request)` evaluates rules against mode (Auto/Plan/AcceptEdits); bash atoms with redirection/`$()` escalate Ask to require explicit approval.',
                    '**MCP timeouts**: Connect timeout (default 10s, `STEPPER_MCP_CONNECT_TIMEOUT_MS`) prevents hung servers at startup. Tool call timeout (default 120s, `STEPPER_MCP_TOOL_TIMEOUT_MS`) prevents mid-turn hangs.',
                ],
            },
            {
                kind: 'heading',
                text: 'Build & Test',
            },
            {
                kind: 'code',
                lang: 'sh',
                code: 'cargo check --workspace                       # Type check\ncargo clippy --workspace --all-targets        # Lint (0 warnings enforced)\ncargo test --workspace                        # full network-less suite (live mcp_live/e2e skip if env unset)\ncargo run                                     # Interactive TUI (real tty + API keys required)\ncargo run -- -p "..." --model anthropic/claude-x   # Headless one-shot (auto-approve)\ncargo run -- --resume <session-id>            # Resume session\ncargo run -- auth login --codex               # Codex OAuth login\ncargo run -- config --schema | --validate     # Settings schema/validation\ncargo run -- init                             # Scaffold .stepper/ (stepper.md + setting.json)',
            },
            {
                kind: 'heading',
                text: 'Known Limits & Roadmap',
            },
            {
                kind: 'list',
                items: [
                    '**Phase 4 (test hardening)**: Completed. Isolation invariants CI, core integration tests (orchestrator, compaction, session/rewind, cost, parallel layer, dispatch, cancellation), permission matrix, TUI render snapshots, MCP hermetic duplex echo, provider/providers fixtures. Tests: 80 → 413. Fixed protocol `context_pct_left` u64 overflow.',
                    '**Phase 5 (e2e)**: Live tests (2-layer pipeline ollama-cloud→oMLX, rewind, resume) are executed and passing against real providers; they stay `#[ignore]` + env-gated (`STEPPER_E2E`) so the default `cargo test` skips them.',
                    '**Phase 6 (real use)**: Real LLM streaming, real tty TUI, Codex backend, `/init` polish, rewind/resume user experience.',
                    '**Implemented (B/C features)**: Dispatch tool, model-driven compaction, handoff retry/skip, `alwaysLoad`, context window override, slash command palette, opt-in macOS Seatbelt OS sandbox confining bash writes to the project.',
                    '**Deferred (accepted limits)**: WriteFile TOCTOU symlink swap (single-user dev CLI scope), gix checkpoint backend (copy works), keyring native library hermetic (keychain unavailable in test), MCP HTTP auth live testing, `McpManager::connect` success arm hermetic (live server required).',
                ],
            },
        ],
    },
]
