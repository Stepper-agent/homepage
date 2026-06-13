'use client'

import { useEffect, useRef } from 'react'

export const CursorGlow = () => {
    const spotlightRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let frame = 0
        const handleMove = (event: PointerEvent) => {
            cancelAnimationFrame(frame)
            frame = requestAnimationFrame(() => {
                const node = spotlightRef.current
                if (!node) return
                node.style.setProperty('--mx', `${event.clientX}px`)
                node.style.setProperty('--my', `${event.clientY}px`)
            })
        }
        window.addEventListener('pointermove', handleMove, { passive: true })
        return () => {
            window.removeEventListener('pointermove', handleMove)
            cancelAnimationFrame(frame)
        }
    }, [])

    return (
        <div aria-hidden className='pointer-events-none fixed inset-0 z-0'>
            <div className='cursor-grid absolute inset-0' />
            <div ref={spotlightRef} className='cursor-spotlight absolute inset-0' />
        </div>
    )
}
