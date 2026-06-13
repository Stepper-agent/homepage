import type { PropsWithChildren } from 'react'
import { notFound } from 'next/navigation'
import { isLocale } from '@shared/i18n/config'
import { getDictionary } from '@shared/i18n/get-dictionary'
import { getDocNav } from '@entities/docs/docs.api'
import { DocsSidebar } from '@widgets/docs/docs-sidebar'

type DocsLayoutProps = PropsWithChildren<{ params: Promise<{ lang: string }> }>

const DocsLayout = async ({ children, params }: DocsLayoutProps) => {
    const { lang } = await params
    if (!isLocale(lang)) notFound()
    const dict = getDictionary(lang)
    const nav = getDocNav()

    return (
        <div className='mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[200px_minmax(0,1fr)] md:py-14 lg:grid-cols-[220px_minmax(0,1fr)]'>
            <aside className='md:sticky md:top-20 md:h-fit'>
                <DocsSidebar lang={lang} nav={nav} label={dict.docs.heading} overviewLabel='Overview' updateLogLabel='Update log' />
            </aside>
            <div className='min-w-0'>{children}</div>
        </div>
    )
}

export default DocsLayout
