import type { UpdateLogEntry } from '@entities/update-log/update-log.type'

export const UPDATE_LOG: UpdateLogEntry[] = [
    {
        version: '0.1.0',
        date: '2026-06-13T23:08:08+09:00',
        groups: [
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
