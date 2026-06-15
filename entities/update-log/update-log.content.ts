import type { UpdateLogEntry } from '@entities/update-log/update-log.type'

export const UPDATE_LOG: UpdateLogEntry[] = [
    {
        version: '0.2.0',
        tag: 'v0.2.0',
        date: '2026-06-15T09:39:08+09:00',
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
            {
                label: 'Chores',
                items: [
                    {
                        type: 'chore',
                        subject: 'release v0.2.0',
                        hash: '2c28dd2',
                    },
                ],
            },
        ],
    },
    {
        version: '0.1.0',
        tag: 'v0.1.0',
        date: '2026-06-14T17:10:03+09:00',
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
