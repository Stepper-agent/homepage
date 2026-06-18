import type { UpdateLogEntry } from '@entities/update-log/update-log.type'

export const UPDATE_LOG: UpdateLogEntry[] = [
    {
        version: '0.6.0',
        tag: 'v0.6.0',
        date: '2026-06-16T12:01:17+09:00',
        groups: [
            {
                label: 'Features',
                items: [
                    {
                        type: 'feat',
                        subject: 'parallelize read-only tools, bound per-turn output, and harden retries',
                        hash: '6fcf680',
                    },
                    {
                        type: 'feat',
                        subject: 'seed model context window and pricing from the live models.dev catalog',
                        hash: '12bc960',
                    },
                    {
                        type: 'feat',
                        subject: 'broaden import, add config set/get, and improve TUI legibility',
                        hash: 'dae8e1b',
                    },
                    {
                        type: 'feat',
                        subject: 'enforce per-path read deny in search tools and anchor bash redirects at cwd',
                        hash: 'cf69016',
                    },
                    {
                        type: 'feat',
                        subject: 'live permission rules, /allow|/ask|/deny, and a plan-mode exit handshake',
                        hash: '88a8023',
                    },
                    {
                        type: 'feat',
                        subject: 'confine bash writes with an opt-in macOS seatbelt sandbox',
                        hash: '36d54cc',
                    },
                    {
                        type: 'feat',
                        subject: 'stream the model\'s reasoning, show the plan list, and clearer approval diffs in the TUI',
                        hash: 'de8b9ba',
                    },
                    {
                        type: 'feat',
                        subject: 'keep the agent working until the task is fully done',
                        hash: 'bc69a3c',
                    },
                ],
            },
            {
                label: 'Bug fixes',
                items: [
                    {
                        type: 'fix',
                        subject: 'surface in-band errors on the openai-compatible stream instead of dropping them',
                        hash: '364f542',
                    },
                    {
                        type: 'fix',
                        subject: 'snapshot an empty working tree so a fresh project\'s first turn can be rewound',
                        hash: 'be1d30b',
                    },
                ],
            },
            {
                label: 'Other changes',
                items: [
                    {
                        type: 'test',
                        subject: 'cover the headless event-loop contract with a stub-provider integration test',
                        hash: '09121ea',
                    },
                ],
            },
        ],
    },
    {
        version: '0.2.0',
        tag: 'v0.2.0',
        date: '2026-06-15T00:39:08Z',
        groups: [
            {
                label: 'Features',
                items: [
                    {
                        type: 'feat',
                        subject: 'reported UX/permission fixes, scaffolding commands, background processes, image paste',
                        hash: '898f2d5',
                    },
                ],
            },
        ],
    },
    {
        version: '0.1.0',
        tag: 'v0.1.0',
        date: '2026-06-14T08:10:03Z',
        groups: [
            {
                label: 'Features',
                items: [
                    {
                        type: 'feat',
                        subject: 'model fetch picker, api-key overlay, input ux, palette scroll fix',
                        hash: 'd8e0494',
                    },
                ],
            },
            {
                label: 'Documentation',
                items: [
                    {
                        type: 'docs',
                        subject: 'mark project as work-in-progress (WIP) in README',
                        hash: 'd7c4832',
                    },
                ],
            },
            {
                label: 'Other changes',
                items: [
                    {
                        type: 'other',
                        subject: 'Initialize project',
                        hash: 'a6192f9',
                    },
                ],
            },
        ],
    },
]
