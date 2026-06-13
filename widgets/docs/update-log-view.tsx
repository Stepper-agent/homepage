import Link from 'next/link'
import { FC } from 'react'
import { STEPPER } from '@shared/constants/stepper'
import type { UpdateLogEntry } from '@entities/update-log/update-log.type'

type UpdateLogViewProps = { entries: UpdateLogEntry[] }

const formatDate = (iso?: string) => (iso ? iso.slice(0, 10) : undefined)

export const UpdateLogView: FC<UpdateLogViewProps> = ({ entries }) => (
    <div className='flex flex-col gap-12'>
        {entries.map((entry) => (
            <section key={entry.version} className='scroll-mt-24'>
                <div className='flex flex-wrap items-baseline gap-3 border-b pb-2'>
                    <h2 className='font-mono text-2xl font-bold tracking-tight'>{entry.version}</h2>
                    {formatDate(entry.date) && <time className='text-sm text-muted-foreground'>{formatDate(entry.date)}</time>}
                </div>
                <div className='mt-5 flex flex-col gap-5'>
                    {entry.groups.map((groupItem) => (
                        <div key={groupItem.label}>
                            <h3 className='text-sm font-semibold text-muted-foreground'>{groupItem.label}</h3>
                            <ul className='mt-2 ml-5 list-disc space-y-1.5 leading-7 marker:text-muted-foreground'>
                                {groupItem.items.map((item) => (
                                    <li key={item.hash} className='text-foreground/90'>
                                        {item.scope && <span className='font-mono text-xs text-muted-foreground'>{item.scope}: </span>}
                                        {item.subject}{' '}
                                        <Link
                                            href={`${STEPPER.githubUrl}/commit/${item.hash}`}
                                            target='_blank'
                                            rel='noreferrer noopener'
                                            className='font-mono text-xs text-muted-foreground transition-colors hover:text-foreground'>
                                            {item.hash}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        ))}
    </div>
)
