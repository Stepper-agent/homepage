import Link from 'next/link'
import { FC } from 'react'
import { Button } from '@shared/ui/button'
import { BrandMark } from '@shared/ui/brand-mark'
import { GithubIcon } from '@shared/ui/icons/github'
import { STEPPER } from '@shared/constants/stepper'
import type { Locale } from '@shared/i18n/config'
import type { Dictionary } from '@shared/i18n/dictionaries/en'
import { ThemeChanger } from '@features/theme/theme-changer'
import { LangSwitcher } from '@features/lang-switcher/lang-switcher'

type SiteHeaderProps = { lang: Locale; dict: Dictionary }

export const SiteHeader: FC<SiteHeaderProps> = ({ lang, dict }) => (
    <header className='sticky top-0 z-50 border-b bg-background/70 backdrop-blur-sm'>
        <div className='mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4'>
            <Link href={`/${lang}`} className='flex items-center gap-2 font-semibold'>
                <BrandMark className='size-6' />
                <span className='text-base tracking-tight'>stepper</span>
            </Link>

            <nav className='hidden items-center gap-1 md:flex' aria-label='Primary'>
                <Button asChild variant='ghost' size='sm'>
                    <Link href='#features'>{dict.nav.features}</Link>
                </Button>
                <Button asChild variant='ghost' size='sm'>
                    <Link href='#install'>{dict.nav.install}</Link>
                </Button>
                <Button asChild variant='ghost' size='sm'>
                    <Link href='#quickstart'>{dict.nav.quickstart}</Link>
                </Button>
                <Button asChild variant='ghost' size='sm'>
                    <Link href={`/${lang}/docs`}>{dict.nav.docs}</Link>
                </Button>
            </nav>

            <div className='flex items-center gap-1.5'>
                <LangSwitcher current={lang} label={dict.nav.languageLabel} />
                <ThemeChanger label={dict.nav.themeToggle} />
                <Button asChild variant='ghost' size='icon' aria-label={dict.nav.github}>
                    <Link href={STEPPER.githubUrl} target='_blank' rel='noreferrer noopener'>
                        <GithubIcon className='size-4' />
                    </Link>
                </Button>
            </div>
        </div>
    </header>
)
