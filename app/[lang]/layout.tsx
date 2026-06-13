import '@app/globals.css'
import type { Metadata, Viewport } from 'next'
import type { PropsWithChildren } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ThemeProvider } from '@shared/lib/providers/theme-provider'
import { MotionProvider } from '@shared/lib/providers/motion-provider'
import { LOCALES, isLocale } from '@shared/i18n/config'
import { getDictionary } from '@shared/i18n/get-dictionary'
import { STEPPER } from '@shared/constants/stepper'
import { getLatestRelease } from '@entities/release/release.api'
import { SiteHeader } from '@widgets/layout/site-header'
import { SiteFooter } from '@widgets/layout/site-footer'
import { CursorGlow } from '@features/cursor-glow/cursor-glow'
import { VirtualScroll } from '@features/virtual-scroll/virtual-scroll'

type LangParams = { params: Promise<{ lang: string }> }

export const dynamicParams = false

export const viewport: Viewport = {
    colorScheme: 'light dark',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    ],
}

export const generateStaticParams = () => LOCALES.map((lang) => ({ lang }))

export const generateMetadata = async ({ params }: LangParams): Promise<Metadata> => {
    const { lang } = await params
    if (!isLocale(lang)) notFound()
    const dict = getDictionary(lang)
    return {
        metadataBase: new URL(STEPPER.siteUrl),
        title: dict.meta.title,
        description: dict.meta.description,
        alternates: {
            canonical: `/${lang}`,
            languages: Object.fromEntries(LOCALES.map((locale) => [locale, `/${locale}`])),
        },
        openGraph: {
            type: 'website',
            url: `/${lang}`,
            title: dict.meta.title,
            description: dict.meta.description,
            siteName: 'stepper',
            images: [{ url: '/icon-1024.png', width: 1024, height: 1024, alt: 'stepper' }],
        },
        twitter: { card: 'summary', title: dict.meta.title, description: dict.meta.description, images: ['/icon-1024.png'] },
        icons: { icon: '/favicon.ico', shortcut: '/icon.svg', apple: '/apple-touch-icon.png' },
    }
}

const RootLayout = async ({ children, params }: PropsWithChildren<LangParams>) => {
    const { lang } = await params
    if (!isLocale(lang)) notFound()
    const dict = getDictionary(lang)
    const release = await getLatestRelease()

    return (
        <html lang={lang} suppressHydrationWarning>
            <body className='relative antialiased'>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                    <MotionProvider>
                        <CursorGlow />
                        <div className='relative z-10 flex min-h-dvh flex-col'>
                            <Link
                                href='#main'
                                className='sr-only rounded-md border bg-background px-3 py-2 text-sm focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]'>
                                {dict.nav.skipToContent}
                            </Link>
                            <SiteHeader lang={lang} dict={dict} />
                            <main id='main' className='flex-1'>
                                {children}
                            </main>
                            <SiteFooter lang={lang} dict={dict} release={release} />
                        </div>
                        <VirtualScroll />
                    </MotionProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout
