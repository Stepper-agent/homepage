import type { MetadataRoute } from 'next'
import { STEPPER } from '@shared/constants/stepper'

export const dynamic = 'force-static'

const robots = (): MetadataRoute.Robots => ({
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${STEPPER.siteUrl}/sitemap.xml`,
    host: STEPPER.siteUrl,
})

export default robots
