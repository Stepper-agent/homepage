import type { Locale } from '@shared/i18n/config'
import { DEFAULT_LOCALE } from '@shared/i18n/config'
import { en, type Dictionary } from '@shared/i18n/dictionaries/en'
import { ko } from '@shared/i18n/dictionaries/ko'
import { ja } from '@shared/i18n/dictionaries/ja'

const DICTIONARIES: Record<Locale, Dictionary> = { en, ko, ja }

export const getDictionary = (locale: Locale): Dictionary => DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE]
