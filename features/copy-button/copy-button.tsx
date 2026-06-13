'use client'

import { Check, Copy } from 'lucide-react'
import { FC, useRef, useState } from 'react'
import { Button } from '@shared/ui/button'

type CopyButtonProps = {
    value: string
    label?: string
    copiedLabel?: string
    className?: string
}

export const CopyButton: FC<CopyButtonProps> = ({ value, label = 'Copy', copiedLabel = 'Copied', className }) => {
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null)
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(value)
        setCopied(true)
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => setCopied(false), 1500)
    }

    return (
        <Button type='button' variant='ghost' size='icon-sm' onClick={handleCopy} aria-label={copied ? copiedLabel : label} className={className}>
            {copied ? <Check className='text-primary' /> : <Copy />}
        </Button>
    )
}
