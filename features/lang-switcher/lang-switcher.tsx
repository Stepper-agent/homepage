'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { LOCALES, LOCALE_SHORT, LOCALE_LABEL, isLocale, type Locale } from '@shared/i18n/config'
import { cn } from '@shared/lib/utils'

type LangSwitcherProps = { current: Locale; label: string }

export const LangSwitcher: FC<LangSwitcherProps> = ({ current, label }) => {
    const pathname = usePathname()

    const hrefFor = (locale: Locale) => {
        const segments = pathname.split('/')
        if (isLocale(segments[1])) segments[1] = locale
        else segments.splice(1, 0, locale)
        return segments.join('/') || `/${locale}`
    }

    return (
        <nav aria-label={label} className='flex items-center gap-0.5 rounded-md border p-0.5'>
            {LOCALES.map((locale) => (
                <Link
                    key={locale}
                    href={hrefFor(locale)}
                    hrefLang={locale}
                    aria-label={LOCALE_LABEL[locale]}
                    aria-current={locale === current ? 'page' : undefined}
                    className={cn(
                        'rounded-sm px-2 py-1 text-xs font-medium transition-colors',
                        locale === current ? 'bg-secondary text-secondary-foreground' : 'text-muted-foreground hover:text-foreground',
                    )}>
                    {LOCALE_SHORT[locale]}
                </Link>
            ))}
        </nav>
    )
}
