import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FC } from 'react'
import { Section } from '@shared/ui/section'
import { Button } from '@shared/ui/button'
import type { Locale } from '@shared/i18n/config'
import type { Dictionary } from '@shared/i18n/dictionaries/en'
import { getDocNav } from '@entities/docs/docs.api'

type DocsSectionProps = { lang: Locale; dict: Dictionary }

export const DocsSection: FC<DocsSectionProps> = ({ lang, dict }) => {
    const nav = getDocNav()
    return (
        <Section id='docs' heading={dict.docs.heading} lead={dict.docs.lead}>
            <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                {nav.map((item) => (
                    <Link
                        key={item.slug}
                        href={`/${lang}/docs/${item.slug}`}
                        className='group flex items-center justify-between gap-2 rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md'>
                        <span className='font-medium'>{item.title}</span>
                        <ArrowRight className='size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5' />
                    </Link>
                ))}
            </div>
            <div className='mt-8'>
                <Button asChild>
                    <Link href={`/${lang}/docs`}>{dict.docs.cta}</Link>
                </Button>
            </div>
        </Section>
    )
}
