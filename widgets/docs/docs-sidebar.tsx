'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { cn } from '@shared/lib/utils'
import type { Locale } from '@shared/i18n/config'
import type { DocNavItem } from '@entities/docs/docs.type'

type DocsSidebarProps = { lang: Locale; nav: DocNavItem[]; label: string; overviewLabel: string; updateLogLabel: string }

export const DocsSidebar: FC<DocsSidebarProps> = ({ lang, nav, label, overviewLabel, updateLogLabel }) => {
    const pathname = usePathname()

    const linkClass = (href: string) =>
        cn(
            'block rounded-md px-3 py-1.5 text-sm transition-colors',
            pathname === href ? 'bg-secondary font-medium text-secondary-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground',
        )

    return (
        <nav aria-label={label} className='flex gap-1 overflow-x-auto pb-2 md:flex-col md:gap-0.5 md:overflow-visible md:pb-0'>
            <Link href={`/${lang}/docs`} className={cn(linkClass(`/${lang}/docs`), 'shrink-0 whitespace-nowrap')}>
                {overviewLabel}
            </Link>
            {nav.map((item) => (
                <Link
                    key={item.slug}
                    href={`/${lang}/docs/${item.slug}`}
                    className={cn(linkClass(`/${lang}/docs/${item.slug}`), 'shrink-0 whitespace-nowrap')}>
                    {item.title}
                </Link>
            ))}
            <Link
                href={`/${lang}/docs/update-log`}
                className={cn(linkClass(`/${lang}/docs/update-log`), 'shrink-0 whitespace-nowrap md:mt-2 md:border-t md:pt-3')}>
                {updateLogLabel}
            </Link>
        </nav>
    )
}
