import { notFound } from 'next/navigation'
import { isLocale } from '@shared/i18n/config'
import { getDictionary } from '@shared/i18n/get-dictionary'
import { getLatestRelease } from '@entities/release/release.api'
import { HeroSection } from '@widgets/hero/hero-section'
import { WhatSection } from '@widgets/what/what-section'
import { FeaturesSection } from '@widgets/features/features-section'
import { InstallSection } from '@widgets/install/install-section'
import { QuickstartSection } from '@widgets/quickstart/quickstart-section'
import { DocsSection } from '@widgets/docs/docs-section'

type PageProps = { params: Promise<{ lang: string }> }

const Page = async ({ params }: PageProps) => {
    const { lang } = await params
    if (!isLocale(lang)) notFound()
    const dict = getDictionary(lang)
    const release = await getLatestRelease()

    return (
        <>
            <HeroSection dict={dict} release={release} />
            <WhatSection dict={dict} />
            <FeaturesSection dict={dict} />
            <InstallSection dict={dict} release={release} />
            <QuickstartSection dict={dict} />
            <DocsSection lang={lang} dict={dict} />
        </>
    )
}

export default Page
