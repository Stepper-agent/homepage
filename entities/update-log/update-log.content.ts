import type { UpdateLogEntry } from '@entities/update-log/update-log.type'

export const UPDATE_LOG: UpdateLogEntry[] = [
    {
        "version": "0.9.2",
        "tag": "v0.9.2",
        "date": "2026-06-20T01:39:01Z",
        "groups": [
            {
                "label": "Bug fixes",
                "items": [
                    {
                        "type": "fix",
                        "subject": "후속 LOW 버그 2건 수정 (v0.9.2)",
                        "hash": "f94e9ad"
                    }
                ]
            }
        ]
    },
    {
        "version": "0.9.1",
        "tag": "v0.9.1",
        "date": "2026-06-19T16:43:19Z",
        "groups": [
            {
                "label": "Bug fixes",
                "items": [
                    {
                        "type": "fix",
                        "subject": "라이브 시운전 버그 24건 수정 (v0.9.1)",
                        "hash": "add7ba2"
                    }
                ]
            }
        ]
    },
    {
        "version": "0.9.0",
        "tag": "v0.9.0",
        "date": "2026-06-19T14:00:34Z",
        "groups": [
            {
                "label": "Features",
                "items": [
                    {
                        "type": "feat",
                        "subject": "opencode 정렬 6기능 + /connect provider 추가 (v0.9.0)",
                        "hash": "4364da8"
                    }
                ]
            }
        ]
    },
    {
        "version": "0.8.0",
        "tag": "v0.8.0",
        "date": "2026-06-19T09:04:03Z",
        "groups": [
            {
                "label": "Bug fixes",
                "items": [
                    {
                        "type": "fix",
                        "subject": "keyring을 linux-native로 되돌려 Linux 릴리스 빌드 복구",
                        "hash": "dfcb189"
                    },
                    {
                        "type": "fix",
                        "subject": "v0.7.0에 누락된 감사 픽스 재적용 + 검증 결함 수정 (0.8.0)",
                        "hash": "04b13f6"
                    }
                ]
            }
        ]
    },
    {
        "version": "0.7.0",
        "tag": "v0.7.0",
        "date": "2026-06-18T03:58:10Z",
        "groups": [
            {
                "label": "Features",
                "items": [
                    {
                        "type": "feat",
                        "subject": "pass context_window as num_ctx to Ollama, drop mouse capture for inline viewport, upgrade reqwest to 0.13, update CI actions to v5",
                        "hash": "e514543"
                    }
                ]
            }
        ]
    },
    {
        "version": "0.6.0",
        "tag": "v0.6.0",
        "date": "2026-06-16T03:01:17Z",
        "groups": [
            {
                "label": "Features",
                "items": [
                    {
                        "type": "feat",
                        "subject": "confine bash writes with an opt-in macOS seatbelt sandbox",
                        "hash": "36d54cc"
                    },
                    {
                        "type": "feat",
                        "subject": "live permission rules, /allow|/ask|/deny, and a plan-mode exit handshake",
                        "hash": "88a8023"
                    },
                    {
                        "type": "feat",
                        "subject": "enforce per-path read deny in search tools and anchor bash redirects at cwd",
                        "hash": "cf69016"
                    },
                    {
                        "type": "feat",
                        "subject": "broaden import, add config set/get, and improve TUI legibility",
                        "hash": "dae8e1b"
                    },
                    {
                        "type": "feat",
                        "subject": "seed model context window and pricing from the live models.dev catalog",
                        "hash": "12bc960"
                    },
                    {
                        "type": "feat",
                        "subject": "parallelize read-only tools, bound per-turn output, and harden retries",
                        "hash": "6fcf680"
                    },
                    {
                        "type": "feat",
                        "subject": "keep the agent working until the task is fully done",
                        "hash": "bc69a3c"
                    },
                    {
                        "type": "feat",
                        "subject": "stream the model's reasoning, show the plan list, and clearer approval diffs in the TUI",
                        "hash": "de8b9ba"
                    }
                ]
            },
            {
                "label": "Bug fixes",
                "items": [
                    {
                        "type": "fix",
                        "subject": "snapshot an empty working tree so a fresh project's first turn can be rewound",
                        "hash": "be1d30b"
                    },
                    {
                        "type": "fix",
                        "subject": "surface in-band errors on the openai-compatible stream instead of dropping them",
                        "hash": "364f542"
                    }
                ]
            },
            {
                "label": "Tests",
                "items": [
                    {
                        "type": "test",
                        "subject": "cover the headless event-loop contract with a stub-provider integration test",
                        "hash": "09121ea"
                    }
                ]
            }
        ]
    },
    {
        "version": "0.5.0",
        "tag": "v0.5.0",
        "date": "2026-06-15T04:19:54Z",
        "groups": [
            {
                "label": "Features",
                "items": [
                    {
                        "type": "feat",
                        "subject": "add stepper import to migrate Claude Code and Codex config into ~/.stepper",
                        "hash": "fe01a04"
                    }
                ]
            }
        ]
    },
    {
        "version": "0.3.0",
        "tag": "v0.3.0",
        "date": "2026-06-15T02:37:21Z",
        "groups": [
            {
                "label": "Features",
                "items": [
                    {
                        "type": "feat",
                        "subject": "inline @import directives in stepper.md to pull in shared rule files",
                        "hash": "773b1a0"
                    }
                ]
            },
            {
                "label": "Bug fixes",
                "items": [
                    {
                        "type": "fix",
                        "subject": "/clear starts a fresh session and clears the terminal scrollback",
                        "hash": "1721341"
                    },
                    {
                        "type": "fix",
                        "subject": "keep the conversation in context across turns (a live session no longer forgets earlier turns)",
                        "hash": "91e7f1c"
                    }
                ]
            }
        ]
    },
    {
        "version": "0.2.0",
        "tag": "v0.2.0",
        "date": "2026-06-15T00:39:08Z",
        "groups": [
            {
                "label": "Features",
                "items": [
                    {
                        "type": "feat",
                        "subject": "reported UX/permission fixes, scaffolding commands, background processes, image paste",
                        "hash": "898f2d5"
                    }
                ]
            }
        ]
    },
    {
        "version": "0.1.0",
        "tag": "v0.1.0",
        "date": "2026-06-14T08:10:03Z",
        "groups": [
            {
                "label": "Features",
                "items": [
                    {
                        "type": "feat",
                        "subject": "model fetch picker, api-key overlay, input ux, palette scroll fix",
                        "hash": "d8e0494"
                    }
                ]
            },
            {
                "label": "Documentation",
                "items": [
                    {
                        "type": "docs",
                        "subject": "mark project as work-in-progress (WIP) in README",
                        "hash": "d7c4832"
                    }
                ]
            },
            {
                "label": "Other changes",
                "items": [
                    {
                        "type": "other",
                        "subject": "Initialize project",
                        "hash": "a6192f9"
                    }
                ]
            }
        ]
    }
]
