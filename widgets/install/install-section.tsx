import Link from 'next/link'
import { Download } from 'lucide-react'
import { FC } from 'react'
import { Section } from '@shared/ui/section'
import { Button } from '@shared/ui/button'
import { OS_TARGETS, INSTALL_COMMAND } from '@shared/constants/stepper'
import type { Dictionary } from '@shared/i18n/dictionaries/en'
import type { LatestRelease } from '@entities/release/release.type'
import { resolveAssetUrl } from '@entities/release/release.api'
import { CommandBlock } from '@features/command-block/command-block'

type InstallSectionProps = { dict: Dictionary; release: LatestRelease | null }

export const InstallSection: FC<InstallSectionProps> = ({ dict, release }) => (
    <Section id='install' heading={dict.install.heading} lead={dict.install.lead} className='border-b'>
        <div className='flex flex-col gap-4'>
            <div>
                <p className='mb-2 text-sm font-medium'>{dict.hero.osTab.unix}</p>
                <CommandBlock command={INSTALL_COMMAND.unix} copyLabel={dict.hero.copy} copiedLabel={dict.hero.copied} />
            </div>
            <div>
                <p className='mb-2 text-sm font-medium'>{dict.hero.osTab.windows}</p>
                <CommandBlock command={INSTALL_COMMAND.windows} prompt='PS>' copyLabel={dict.hero.copy} copiedLabel={dict.hero.copied} />
            </div>
        </div>

        <div className='mt-6 grid gap-4 sm:grid-cols-3'>
            {OS_TARGETS.map((os) => {
                const meta = dict.install.os[os.key]
                return (
                    <article key={os.key} className='flex flex-col gap-3 rounded-lg border bg-card p-5 shadow-sm'>
                        <div>
                            <h3 className='font-bold'>{meta.name}</h3>
                            <p className='text-xs text-muted-foreground'>{meta.sub}</p>
                        </div>
                        <code className='block w-fit rounded bg-muted px-2 py-1 font-mono text-2xs break-all text-muted-foreground'>{os.target}</code>
                        <Button asChild variant='outline' size='sm' className='mt-auto'>
                            <Link href={resolveAssetUrl(release, os.archive)} target='_blank' rel='noreferrer noopener'>
                                <Download className='size-4' />
                                {dict.install.downloadLabel}
                                <span className='font-mono text-2xs text-muted-foreground'>.{os.archiveExt}</span>
                            </Link>
                        </Button>
                    </article>
                )
            })}
        </div>

        <div className='mt-10'>
            <h3 className='text-lg font-semibold'>{dict.install.envHeading}</h3>
            <dl className='mt-4 divide-y rounded-lg border'>
                {dict.install.env.map((item) => (
                    <div key={item.name} className='flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:gap-4'>
                        <code className='font-mono text-sm font-medium'>{item.name}</code>
                        <code className='font-mono text-xs text-muted-foreground'>{item.value}</code>
                        <span className='text-sm text-muted-foreground sm:ml-auto'>{item.meaning}</span>
                    </div>
                ))}
            </dl>
        </div>

        <div className='mt-10'>
            <h3 className='text-lg font-semibold'>{dict.install.sourceHeading}</h3>
            <p className='mt-2 max-w-2xl text-sm text-muted-foreground'>{dict.install.sourceNote}</p>
            <div className='mt-3 max-w-xl'>
                <CommandBlock command={dict.install.sourceCommand} copyLabel={dict.hero.copy} copiedLabel={dict.hero.copied} />
            </div>
        </div>
    </Section>
)
