import type { Locale } from '@shared/i18n/config'
import type { DocPage } from '@entities/docs/docs.type'
import { DOC_PAGES_EN } from '@entities/docs/docs.content.en'
import { DOC_PAGES_KO } from '@entities/docs/docs.content.ko'
import { DOC_PAGES_JA } from '@entities/docs/docs.content.ja'

export const DOC_PAGES_BY_LOCALE: Record<Locale, DocPage[]> = {
    en: DOC_PAGES_EN,
    ko: DOC_PAGES_KO,
    ja: DOC_PAGES_JA,
}
