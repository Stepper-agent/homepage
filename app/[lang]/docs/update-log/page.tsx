import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale } from '@shared/i18n/config'
import { getUpdateLog } from '@entities/update-log/update-log.api'
import { UpdateLogView } from '@widgets/docs/update-log-view'

type UpdateLogPageProps = { params: Promise<{ lang: string }> }

export const metadata: Metadata = {
    title: 'Update log — stepper docs',
    description: 'Version-by-version changes to stepper, generated from the repository.',
}

const UpdateLogPage = async ({ params }: UpdateLogPageProps) => {
    const { lang } = await params
    if (!isLocale(lang)) notFound()
    const entries = getUpdateLog()

    return (
        <div>
            <h1 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>Update log</h1>
            <p className='mt-3 text-lg text-muted-foreground'>Version-by-version changes to stepper, generated from the repository.</p>
            <div className='mt-10'>
                <UpdateLogView entries={entries} />
            </div>
        </div>
    )
}

export default UpdateLogPage
