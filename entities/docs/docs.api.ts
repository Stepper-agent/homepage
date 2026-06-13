import { DOC_PAGES } from '@entities/docs/docs.content'
import type { DocNavItem, DocPage } from '@entities/docs/docs.type'

export const getDocPages = (): DocPage[] => DOC_PAGES

export const getDocNav = (): DocNavItem[] => DOC_PAGES.map(({ slug, title, description }) => ({ slug, title, description }))

export const getDocBySlug = (slug: string): DocPage | undefined => DOC_PAGES.find((page) => page.slug === slug)
