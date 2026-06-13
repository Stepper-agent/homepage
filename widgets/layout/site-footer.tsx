import Link from 'next/link'
import { FC } from 'react'
import { BrandMark } from '@shared/ui/brand-mark'
import { GithubIcon } from '@shared/ui/icons/github'
import { STEPPER } from '@shared/constants/stepper'
import type { Locale } from '@shared/i18n/config'
import type { Dictionary } from '@shared/i18n/dictionaries/en'
import type { LatestRelease } from '@entities/release/release.type'

type SiteFooterProps = { lang: Locale; dict: Dictionary; release: LatestRelease | null }

export const SiteFooter: FC<SiteFooterProps> = ({ lang, dict, release }) => (
    <footer className='border-t'>
        <div className='mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col gap-3 sm:col-span-2 lg:col-span-1'>
                <div className='flex items-center gap-2 font-semibold'>
                    <BrandMark className='size-6' />
                    <span className='tracking-tight'>stepper</span>
                </div>
                <p className='text-sm text-muted-foreground'>{dict.footer.tagline}</p>
                <p className='text-xs text-muted-foreground'>{dict.footer.builtWith}</p>
            </div>

            <div className='flex flex-col gap-2 text-sm'>
                <span className='font-medium'>{dict.footer.product}</span>
                <Link href='#features' className='text-muted-foreground transition-colors hover:text-foreground'>
                    {dict.nav.features}
                </Link>
                <Link href='#install' className='text-muted-foreground transition-colors hover:text-foreground'>
                    {dict.nav.install}
                </Link>
                <Link href='#quickstart' className='text-muted-foreground transition-colors hover:text-foreground'>
                    {dict.nav.quickstart}
                </Link>
            </div>

            <div className='flex flex-col gap-2 text-sm'>
                <span className='font-medium'>{dict.footer.resources}</span>
                <Link
                    href={STEPPER.githubUrl}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground'>
                    <GithubIcon className='size-3.5' /> {dict.nav.github}
                </Link>
                <Link href={`/${lang}/docs`} className='text-muted-foreground transition-colors hover:text-foreground'>
                    {dict.nav.docs}
                </Link>
            </div>

            <div className='flex flex-col gap-2 text-sm'>
                <span className='font-medium'>{dict.footer.license}</span>
                <span className='text-muted-foreground'>{STEPPER.license}</span>
                {release && (
                    <span className='text-muted-foreground'>
                        {dict.footer.version}: <span className='font-mono'>{release.tagName}</span>
                    </span>
                )}
            </div>
        </div>

        <div className='border-t'>
            <div className='mx-auto max-w-5xl px-4 py-6 text-xs text-muted-foreground'>{dict.footer.rights}</div>
        </div>
    </footer>
)
