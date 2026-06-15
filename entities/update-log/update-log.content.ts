import type { UpdateLogEntry } from '@entities/update-log/update-log.type'

export const UPDATE_LOG: UpdateLogEntry[] = [
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
