'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect } from 'react'

const GLOW_SIZE = 640

export const CursorGlow = () => {
    const x = useMotionValue(-GLOW_SIZE)
    const y = useMotionValue(-GLOW_SIZE)
    const springX = useSpring(x, { stiffness: 140, damping: 22, mass: 0.4 })
    const springY = useSpring(y, { stiffness: 140, damping: 22, mass: 0.4 })

    useEffect(() => {
        const handleMove = (event: PointerEvent) => {
            x.set(event.clientX - GLOW_SIZE / 2)
            y.set(event.clientY - GLOW_SIZE / 2)
        }
        window.addEventListener('pointermove', handleMove, { passive: true })
        return () => window.removeEventListener('pointermove', handleMove)
    }, [x, y])

    return (
        <motion.div
            aria-hidden
            className='pointer-events-none fixed left-0 top-0 z-0 rounded-full'
            style={{
                x: springX,
                y: springY,
                width: GLOW_SIZE,
                height: GLOW_SIZE,
                background: 'radial-gradient(circle, var(--cursor-glow-color), transparent 70%)',
            }}
        />
    )
}
