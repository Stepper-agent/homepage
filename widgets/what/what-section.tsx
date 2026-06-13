import { FC } from 'react'
import { Section } from '@shared/ui/section'
import type { Dictionary } from '@shared/i18n/dictionaries/en'
import { PipelineDiagram } from '@features/pipeline-diagram/pipeline-diagram'

type WhatSectionProps = { dict: Dictionary }

export const WhatSection: FC<WhatSectionProps> = ({ dict }) => (
    <Section id='how' heading={dict.what.heading} lead={dict.what.lead} className='border-b'>
        <PipelineDiagram content={dict.what} />
    </Section>
)
