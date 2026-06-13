import { FC } from 'react'
import type { DocPage } from '@entities/docs/docs.type'
import { DocBlocks } from '@features/docs/doc-blocks'

type DocArticleProps = { page: DocPage }

export const DocArticle: FC<DocArticleProps> = ({ page }) => (
    <article>
        <header>
            <h1 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>{page.title}</h1>
            <p className='mt-3 text-lg text-muted-foreground'>{page.description}</p>
        </header>
        <div className='mt-8'>
            <DocBlocks blocks={page.blocks} />
        </div>
    </article>
)
