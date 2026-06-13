import { Fragment, FC, ReactNode } from 'react'
import type { DocBlock } from '@entities/docs/docs.type'
import { CodeSample } from '@features/code-sample/code-sample'

const renderInline = (text: string): ReactNode =>
    text.split('`').map((part, index) =>
        index % 2 === 1 ? (
            <code key={index} className='rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]'>
                {part}
            </code>
        ) : (
            <Fragment key={index}>{part}</Fragment>
        ),
    )

const DocBlockView: FC<{ block: DocBlock }> = ({ block }) => {
    if (block.kind === 'heading')
        return <h2 className='mt-12 scroll-mt-24 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0'>{block.text}</h2>
    if (block.kind === 'subheading') return <h3 className='mt-8 text-lg font-semibold tracking-tight'>{block.text}</h3>
    if (block.kind === 'paragraph') return <p className='mt-4 leading-7 text-foreground/90'>{renderInline(block.text ?? '')}</p>
    if (block.kind === 'code') return <CodeSample className='mt-4' code={block.code ?? ''} lang={block.lang} />
    if (block.kind === 'note')
        return (
            <div className='mt-4 rounded-md border-l-2 border-foreground/30 bg-muted/40 px-4 py-3 text-sm text-foreground/90'>
                {renderInline(block.text ?? '')}
            </div>
        )
    if (block.kind === 'list')
        return (
            <ul className='mt-4 ml-5 list-disc space-y-2 leading-7 marker:text-muted-foreground'>
                {(block.items ?? []).map((item, index) => (
                    <li key={index} className='pl-1 text-foreground/90'>
                        {renderInline(item)}
                    </li>
                ))}
            </ul>
        )
    if (block.kind === 'table')
        return (
            <div className='mt-4 w-full overflow-x-auto'>
                <table className='w-full text-left text-sm'>
                    <thead>
                        <tr className='border-b'>
                            {(block.head ?? []).map((cell, index) => (
                                <th key={index} className='px-3 py-2 font-semibold whitespace-nowrap'>
                                    {renderInline(cell)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {(block.rows ?? []).map((row, rowIndex) => (
                            <tr key={rowIndex} className='border-b last:border-0'>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className='px-3 py-2 align-top text-foreground/90'>
                                        {renderInline(cell)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    return null
}

export const DocBlocks: FC<{ blocks: DocBlock[] }> = ({ blocks }) => (
    <div className='flex flex-col'>
        {blocks.map((block, index) => (
            <DocBlockView key={index} block={block} />
        ))}
    </div>
)
