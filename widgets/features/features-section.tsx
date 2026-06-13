import { FC } from 'react'
import { Section } from '@shared/ui/section'
import { Reveal } from '@shared/ui/reveal'
import type { Dictionary } from '@shared/i18n/dictionaries/en'

type FeaturesSectionProps = { dict: Dictionary }

export const FeaturesSection: FC<FeaturesSectionProps> = ({ dict }) => (
    <Section id='features' heading={dict.features.heading} lead={dict.features.lead} className='border-b'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {dict.features.items.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                    <article className='flex h-full flex-col gap-2 rounded-lg border bg-card p-5 shadow-sm transition-shadow hover:shadow-md'>
                        <span className='font-mono text-xs text-muted-foreground'>{String(index + 1).padStart(2, '0')}</span>
                        <h3 className='text-base font-bold'>{item.title}</h3>
                        <p className='text-sm leading-relaxed text-muted-foreground'>{item.description}</p>
                    </article>
                </Reveal>
            ))}
        </div>
    </Section>
)
