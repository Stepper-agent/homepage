export type DocBlockKind = 'heading' | 'subheading' | 'paragraph' | 'code' | 'list' | 'table' | 'note'

export type DocBlock = {
    kind: DocBlockKind
    text?: string
    code?: string
    lang?: string
    items?: string[]
    head?: string[]
    rows?: string[][]
}

export type DocPage = {
    slug: string
    title: string
    description: string
    blocks: DocBlock[]
}

export type DocNavItem = { slug: string; title: string; description: string }
