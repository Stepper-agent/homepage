import type { UpdateLogEntry } from '@entities/update-log/update-log.type'

export const UPDATE_LOG: UpdateLogEntry[] = [
    {
        "version": "0.13.0",
        "tag": "v0.13.0",
        "date": "2026-06-21T06:59:47Z",
        "groups": [
            {
                "label": "Features",
                "items": [
                    {
                        "type": "feat",
                        "subject": "백로그 11항목 (auto권한·effort 마이그레이션·/settings·MCP CLI·hooks·auto memory)",
                        "hash": "68facbf"
                    }
                ]
            }
        ]
    },
    {
        "version": "0.12.0",
        "tag": "v0.12.0",
        "date": "2026-06-21T04:27:33Z",
        "groups": [
            {
                "label": "Features",
                "items": [
                    {
                        "type": "feat",
                        "scope": "cli",
                        "subject": "stepper models 헤드리스 CLI + --log-level 파일 로깅 (v0.12.0)",
                        "hash": "6c02aab"
                    },
                    {
                        "type": "feat",
                        "scope": "editor",
                        "subject": "/editor 슬래시·Ctrl+E로 외부 에디터에서 프롬프트 작성",
                        "hash": "2365edf"
                    }
                ]
            }
        ]
    },
    {
        "version": "0.11.0",
        "tag": "v0.11.0",
        "date": "2026-06-21T01:31:28Z",
        "groups": [
            {
                "label": "Features",
                "items": [
                    {
                        "type": "feat",
                        "scope": "stats",
                        "subject": "by-tool 섹션에 막대차트+퍼센트 (opencode displayStats 패리티, v0.11.0)",
                        "hash": "e145c8e"
                    }
                ]
            },
            {
                "label": "Tests",
                "items": [
                    {
                        "type": "test",
                        "scope": "mcp",
                        "subject": "bind_redirect 테스트 포트 TOCTOU 레이스 재시도로 flaky 제거",
                        "hash": "6a885b3"
                    }
                ]
            }
        ]
    },
    {
        "version": "0.10.0",
        "tag": "v0.10.0",
        "date": "2026-06-20T14:51:14Z",
        "groups": [
            {
                "label": "Features",
                "items": [
                    {
                        "type": "feat",
                        "subject": "opencode 추가 P2 — 테마 카탈로그 / HTTPS_PROXY config / cross-session stats / connect 비활성표시 (v0.10.0)",
                        "hash": "9b09b8f"
                    },
                    {
                        "type": "feat",
                        "subject": "opencode P2/잔여 4기능 — 프록시·CA / 알림 / undo·redo / MCP OAuth",
                        "hash": "adfaa06"
                    },
                    {
                        "type": "feat",
                        "scope": "config",
                        "subject": "provider.models map — per-model context/output/pricing override (P1)",
                        "hash": "8545d70"
                    },
                    {
                        "type": "feat",
                        "scope": "mcp",
                        "subject": "per-server enabled / cwd / timeout (P1)",
                        "hash": "eaa0b39"
                    },
                    {
                        "type": "feat",
                        "scope": "config",
                        "subject": "JSONC 설정 + STEPPER_CONFIG env + {env:}/{file:} 치환 (P1)",
                        "hash": "f1aa9bd"
                    },
                    {
                        "type": "feat",
                        "scope": "cli",
                        "subject": "헤드리스 --format json (P1)",
                        "hash": "389f969"
                    },
                    {
                        "type": "feat",
                        "scope": "cli",
                        "subject": "헤드리스 --agent / --file 플래그 (P1)",
                        "hash": "8686cf5"
                    },
                    {
                        "type": "feat",
                        "scope": "cli",
                        "subject": "session list/delete 서브커맨드 + --fork (P1)",
                        "hash": "2f60ce7"
                    },
                    {
                        "type": "feat",
                        "subject": "opencode P0 정렬 — 커맨드 override·apply_patch·포매터·LSP·named 서브에이전트",
                        "hash": "f633bad"
                    }
                ]
            },
            {
                "label": "Bug fixes",
                "items": [
                    {
                        "type": "fix",
                        "subject": "P1 적대 리뷰 확정 결함 4건 수정",
                        "hash": "f3ed100"
                    }
                ]
            }
        ]
    },
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
