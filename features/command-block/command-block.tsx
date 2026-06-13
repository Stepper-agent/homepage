import { FC } from 'react'
import { cn } from '@shared/lib/utils'
import { CopyButton } from '@features/copy-button/copy-button'

type CommandBlockProps = {
    command: string
    prompt?: string
    copyLabel?: string
    copiedLabel?: string
    className?: string
}

export const CommandBlock: FC<CommandBlockProps> = ({ command, prompt = '$', copyLabel, copiedLabel, className }) => (
    <div className={cn('flex items-center gap-3 rounded-md border bg-card px-4 py-3 font-mono text-sm shadow-xs', className)}>
        <span aria-hidden className='shrink-0 select-none text-muted-foreground'>
            {prompt}
        </span>
        <code className='flex-1 overflow-x-auto whitespace-nowrap text-card-foreground'>{command}</code>
        <CopyButton value={command} label={copyLabel} copiedLabel={copiedLabel} className='shrink-0' />
    </div>
)
