import type { MetadataRoute } from 'next'
import { LOCALES } from '@shared/i18n/config'
import { STEPPER } from '@shared/constants/stepper'
import { getDocPages } from '@entities/docs/docs.api'

export const dynamic = 'force-static'

const languages = Object.fromEntries(LOCALES.map((locale) => [locale, `${STEPPER.siteUrl}/${locale}`]))

const sitemap = (): MetadataRoute.Sitemap => {
    const home = LOCALES.map((lang) => ({
        url: `${STEPPER.siteUrl}/${lang}`,
        changeFrequency: 'weekly' as const,
        priority: lang === 'en' ? 1 : 0.8,
        alternates: { languages },
    }))
    const docsIndex = LOCALES.map((lang) => ({ url: `${STEPPER.siteUrl}/${lang}/docs`, changeFrequency: 'monthly' as const, priority: 0.6 }))
    const docPages = LOCALES.flatMap((lang) =>
        getDocPages().map((page) => ({ url: `${STEPPER.siteUrl}/${lang}/docs/${page.slug}`, changeFrequency: 'monthly' as const, priority: 0.5 })),
    )
    return [...home, ...docsIndex, ...docPages]
}

export default sitemap
