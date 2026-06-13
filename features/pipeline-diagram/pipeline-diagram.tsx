import { ArrowDown } from 'lucide-react'
import { FC, Fragment } from 'react'
import { Badge } from '@shared/ui/badge'
import { BrandMark } from '@shared/ui/brand-mark'
import type { Dictionary } from '@shared/i18n/dictionaries/en'

type PipelineDiagramProps = { content: Dictionary['what'] }

export const PipelineDiagram: FC<PipelineDiagramProps> = ({ content }) => (
    <div className='mx-auto flex w-full max-w-md flex-col items-stretch'>
        <div className='rounded-lg border bg-card p-4 text-center shadow-sm'>
            <div className='flex items-center justify-center gap-2'>
                <BrandMark className='size-5' />
                <span className='font-mono text-sm font-semibold'>{content.orchestrator}</span>
            </div>
            <p className='mt-1 text-xs text-muted-foreground'>{content.orchestratorNote}</p>
        </div>

        {content.steps.map((step) => {
            const isParallel = step.name === 'implement'
            return (
                <Fragment key={step.name}>
                    <div className='flex flex-col items-center justify-center gap-1 py-3 text-muted-foreground'>
                        <span className='text-2xs font-medium'>{content.handoff}</span>
                        <ArrowDown className='size-4' aria-hidden />
                    </div>

                    <div className='rounded-lg border bg-card p-4 shadow-sm'>
                        <div className='flex items-center justify-between gap-2'>
                            <span className='font-mono text-sm font-semibold'>{step.name}</span>
                            {isParallel && (
                                <Badge variant='secondary' className='font-mono text-2xs'>
                                    {content.parallelLabel}
                                </Badge>
                            )}
                        </div>
                        <p className='mt-1 text-sm text-muted-foreground'>{step.note}</p>
                        <div className='mt-3 flex flex-wrap gap-2 text-2xs text-muted-foreground'>
                            <span className='rounded border px-2 py-0.5 font-mono'>
                                {content.layerModel}: {step.model}
                            </span>
                            <span className='rounded border px-2 py-0.5'>{content.layerContext}</span>
                        </div>

                        {isParallel && (
                            <div className='mt-3 border-t pt-3'>
                                <p className='text-2xs text-muted-foreground'>{content.parallelNote}</p>
                                <div className='mt-2 flex gap-2' aria-hidden>
                                    {[0, 1, 2].map((worker) => (
                                        <div key={worker} className='h-6 flex-1 rounded border bg-muted/50' />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </Fragment>
            )
        })}
    </div>
)
