import { FC } from 'react'
import { Section } from '@shared/ui/section'
import type { Dictionary } from '@shared/i18n/dictionaries/en'
import { CommandBlock } from '@features/command-block/command-block'

type QuickstartSectionProps = { dict: Dictionary }

const SETTING_SAMPLE = `{
  "defaultModel": "anthropic/claude-sonnet-4",
  "mode": "accept-edits",
  "step": ["plan", "implement", "test"]
}`

export const QuickstartSection: FC<QuickstartSectionProps> = ({ dict }) => (
    <Section id='quickstart' heading={dict.quickstart.heading} lead={dict.quickstart.lead} className='border-b'>
        <div className='grid gap-8 lg:grid-cols-2'>
            <ol className='flex flex-col gap-6'>
                {dict.quickstart.steps.map((step, index) => (
                    <li key={step.title} className='flex gap-4'>
                        <span className='flex size-7 shrink-0 items-center justify-center rounded-full border bg-card font-mono text-sm font-semibold'>
                            {index + 1}
                        </span>
                        <div className='min-w-0 flex-1'>
                            <h3 className='font-semibold'>{step.title}</h3>
                            <p className='mt-1 text-sm text-muted-foreground'>{step.body}</p>
                            <div className='mt-3'>
                                <CommandBlock command={step.command} copyLabel={dict.hero.copy} copiedLabel={dict.hero.copied} />
                            </div>
                        </div>
                    </li>
                ))}
            </ol>

            <div>
                <div className='rounded-t-lg border border-b-0 bg-muted px-4 py-2'>
                    <span className='font-mono text-xs text-muted-foreground'>{dict.quickstart.settingTitle}</span>
                </div>
                <pre className='overflow-x-auto rounded-b-lg border bg-card p-4 font-mono text-sm'>
                    <code>{SETTING_SAMPLE}</code>
                </pre>
                <p className='mt-3 text-sm text-muted-foreground'>{dict.quickstart.settingNote}</p>
            </div>
        </div>
    </Section>
)
