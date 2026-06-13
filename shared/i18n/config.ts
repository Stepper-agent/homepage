export const LOCALES = ['en', 'ko', 'ja'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

export const LOCALE_LABEL: Record<Locale, string> = {
    en: 'English',
    ko: '한국어',
    ja: '日本語',
}

export const LOCALE_SHORT: Record<Locale, string> = {
    en: 'EN',
    ko: 'KO',
    ja: 'JA',
}

export const isLocale = (value: string): value is Locale => (LOCALES as readonly string[]).includes(value)
