import { FC, PropsWithChildren, ReactNode } from 'react'
import { cn } from '@shared/lib/utils'
import { Reveal } from '@shared/ui/reveal'

type SectionProps = PropsWithChildren<{ id?: string; heading: ReactNode; lead?: ReactNode; className?: string }>

export const Section: FC<SectionProps> = ({ id, heading, lead, className, children }) => (
    <section id={id} className={cn('mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:py-20', className)}>
        <Reveal>
            <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>{heading}</h2>
            {lead && <p className='mt-3 max-w-2xl text-muted-foreground'>{lead}</p>}
        </Reveal>
        <div className='mt-10'>{children}</div>
    </section>
)
