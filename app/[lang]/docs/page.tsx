import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { isLocale } from '@shared/i18n/config'
import { getDictionary } from '@shared/i18n/get-dictionary'
import { getDocNav } from '@entities/docs/docs.api'

type DocsIndexProps = { params: Promise<{ lang: string }> }

const DocsIndex = async ({ params }: DocsIndexProps) => {
    const { lang } = await params
    if (!isLocale(lang)) notFound()
    const dict = getDictionary(lang)
    const nav = getDocNav(lang)

    return (
        <div>
            <h1 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>{dict.docs.heading}</h1>
            <p className='mt-3 text-lg text-muted-foreground'>{dict.docs.lead}</p>
            <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                {nav.map((item) => (
                    <Link
                        key={item.slug}
                        href={`/${lang}/docs/${item.slug}`}
                        className='group rounded-lg border bg-card p-5 shadow-sm transition-shadow hover:shadow-md'>
                        <div className='flex items-center justify-between gap-2'>
                            <h2 className='font-semibold'>{item.title}</h2>
                            <ArrowRight className='size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5' />
                        </div>
                        <p className='mt-2 text-sm text-muted-foreground'>{item.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default DocsIndex
