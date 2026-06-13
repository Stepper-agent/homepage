import Link from 'next/link'
import { FC } from 'react'
import { Badge } from '@shared/ui/badge'
import { Button } from '@shared/ui/button'
import { BrandMark } from '@shared/ui/brand-mark'
import { GithubIcon } from '@shared/ui/icons/github'
import { STEPPER, INSTALL_COMMAND } from '@shared/constants/stepper'
import type { Dictionary } from '@shared/i18n/dictionaries/en'
import type { LatestRelease } from '@entities/release/release.type'
import { Reveal } from '@shared/ui/reveal'
import { OsTabs } from '@features/os-tabs/os-tabs'
import { CommandBlock } from '@features/command-block/command-block'

type HeroSectionProps = { dict: Dictionary; release: LatestRelease | null }

export const HeroSection: FC<HeroSectionProps> = ({ dict, release }) => {
    const osItems = [
        {
            key: 'unix',
            label: dict.hero.osTab.unix,
            panel: <CommandBlock command={INSTALL_COMMAND.unix} copyLabel={dict.hero.copy} copiedLabel={dict.hero.copied} />,
        },
        {
            key: 'windows',
            label: dict.hero.osTab.windows,
            panel: <CommandBlock command={INSTALL_COMMAND.windows} prompt='PS>' copyLabel={dict.hero.copy} copiedLabel={dict.hero.copied} />,
        },
    ]

    return (
        <section className='border-b'>
            <div className='mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center sm:py-28'>
                <Reveal>
                    <Badge variant='outline' className='gap-1.5 py-1 pl-1.5'>
                        <BrandMark className='size-4' />
                        {dict.hero.badge}
                    </Badge>
                </Reveal>

                <Reveal delay={0.05}>
                    <h1 className='mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-balance sm:text-6xl'>{dict.hero.title}</h1>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className='mt-5 max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg'>{dict.hero.subtitle}</p>
                </Reveal>

                <Reveal delay={0.15} className='mt-9 w-full max-w-xl text-left'>
                    <OsTabs items={osItems} ariaLabel={dict.nav.install} />
                    <p className='mt-3 text-center text-xs text-muted-foreground'>{dict.hero.installNote}</p>
                </Reveal>

                <Reveal delay={0.2} className='mt-9 flex flex-wrap items-center justify-center gap-3'>
                    <Button asChild size='lg'>
                        <Link href={STEPPER.githubUrl} target='_blank' rel='noreferrer noopener'>
                            <GithubIcon className='size-4' />
                            {dict.hero.viewOnGithub}
                        </Link>
                    </Button>
                    <Button asChild size='lg' variant='outline'>
                        <Link href='#install'>{dict.nav.install}</Link>
                    </Button>
                    {release && (
                        <Badge variant='secondary' className='font-mono'>
                            {dict.hero.latestVersion} {release.tagName}
                        </Badge>
                    )}
                </Reveal>
            </div>
        </section>
    )
}
