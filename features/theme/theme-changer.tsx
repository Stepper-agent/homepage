'use client'

import { Loader2, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Button } from '@shared/ui/button'

type ThemeChangerProps = { label?: string }

const ThemeChangerComponent: FC<ThemeChangerProps> = ({ label = 'Toggle theme' }) => {
    const { setTheme, resolvedTheme } = useTheme()
    const Icon = resolvedTheme === 'dark' ? Moon : Sun

    return (
        <Button variant='ghost' size='icon' onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} aria-label={label}>
            <Icon />
        </Button>
    )
}

export const ThemeChanger = dynamic(() => Promise.resolve(ThemeChangerComponent), {
    ssr: false,
    loading: () => (
        <Button variant='ghost' size='icon' aria-label='Toggle theme' disabled>
            <Loader2 className='size-5 animate-spin' />
        </Button>
    ),
})
