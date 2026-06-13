import { codeToHtml } from 'shiki'
import { FC } from 'react'
import { cn } from '@shared/lib/utils'
import { CopyButton } from '@features/copy-button/copy-button'

type CodeSampleProps = { code: string; lang?: string; className?: string }

const LANG_ALIAS: Record<string, string> = {
    sh: 'bash',
    shell: 'bash',
    bash: 'bash',
    text: 'text',
    txt: 'text',
    json: 'json',
    jsonc: 'jsonc',
    md: 'markdown',
    markdown: 'markdown',
    yaml: 'yaml',
    yml: 'yaml',
    toml: 'toml',
    rust: 'rust',
    rs: 'rust',
    ts: 'typescript',
    tsx: 'tsx',
}

export const CodeSample: FC<CodeSampleProps> = async ({ code, lang, className }) => {
    const grammar = LANG_ALIAS[(lang ?? 'text').toLowerCase()] ?? 'text'
    const html = await codeToHtml(code, { lang: grammar, themes: { light: 'vitesse-light', dark: 'vitesse-dark' } })

    return (
        <div className={cn('overflow-hidden rounded-lg border bg-card', className)}>
            <div className='flex items-center justify-between border-b px-3 py-1'>
                <span className='font-mono text-2xs text-muted-foreground'>{lang ?? 'code'}</span>
                <CopyButton value={code} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}
