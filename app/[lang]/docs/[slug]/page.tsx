import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LOCALES, isLocale } from '@shared/i18n/config'
import { getDocBySlug, getDocPages } from '@entities/docs/docs.api'
import { DocArticle } from '@widgets/docs/doc-article'

type DocPageProps = { params: Promise<{ lang: string; slug: string }> }

export const dynamicParams = false

export const generateStaticParams = () => LOCALES.flatMap((lang) => getDocPages(lang).map((page) => ({ lang, slug: page.slug })))

export const generateMetadata = async ({ params }: DocPageProps): Promise<Metadata> => {
    const { lang, slug } = await params
    if (!isLocale(lang)) return {}
    const page = getDocBySlug(lang, slug)
    if (!page) return {}
    return {
        title: `${page.title} — stepper docs`,
        description: page.description,
        alternates: { canonical: `/${lang}/docs/${slug}` },
    }
}

const DocPageRoute = async ({ params }: DocPageProps) => {
    const { lang, slug } = await params
    if (!isLocale(lang)) notFound()
    const page = getDocBySlug(lang, slug)
    if (!page) notFound()
    return <DocArticle page={page} />
}

export default DocPageRoute
