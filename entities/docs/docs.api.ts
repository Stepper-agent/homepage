import { DOC_PAGES_BY_LOCALE } from '@entities/docs/docs.content'
import { DEFAULT_LOCALE, type Locale } from '@shared/i18n/config'
import type { DocNavItem, DocPage } from '@entities/docs/docs.type'

const pagesFor = (lang: Locale): DocPage[] => {
    const pages = DOC_PAGES_BY_LOCALE[lang]
    return pages.length ? pages : DOC_PAGES_BY_LOCALE[DEFAULT_LOCALE]
}

export const getDocPages = (lang: Locale): DocPage[] => pagesFor(lang)

export const getDocNav = (lang: Locale): DocNavItem[] => pagesFor(lang).map(({ slug, title, description }) => ({ slug, title, description }))

export const getDocBySlug = (lang: Locale, slug: string): DocPage | undefined =>
    pagesFor(lang).find((page) => page.slug === slug) ?? DOC_PAGES_BY_LOCALE[DEFAULT_LOCALE].find((page) => page.slug === slug)
