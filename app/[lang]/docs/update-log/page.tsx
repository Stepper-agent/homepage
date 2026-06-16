import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale } from '@shared/i18n/config'
import { getDictionary } from '@shared/i18n/get-dictionary'
import { getUpdateLog } from '@entities/update-log/update-log.api'
import { UpdateLogView } from '@widgets/docs/update-log-view'

type UpdateLogPageProps = { params: Promise<{ lang: string }> }

export const generateMetadata = async ({ params }: UpdateLogPageProps): Promise<Metadata> => {
    const { lang } = await params
    if (!isLocale(lang)) return {}
    const dict = getDictionary(lang)
    return { title: `${dict.docs.updateLog} — stepper docs`, description: dict.docs.updateLogLead }
}

const UpdateLogPage = async ({ params }: UpdateLogPageProps) => {
    const { lang } = await params
    if (!isLocale(lang)) notFound()
    const dict = getDictionary(lang)
    const entries = getUpdateLog()

    return (
        <div>
            <h1 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>{dict.docs.updateLog}</h1>
            <p className='mt-3 text-lg text-muted-foreground'>{dict.docs.updateLogLead}</p>
            <div className='mt-10'>
                <UpdateLogView entries={entries} />
            </div>
        </div>
    )
}

export default UpdateLogPage
