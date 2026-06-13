import { ComponentProps, FC } from 'react'
import { cn } from '@shared/lib/utils'

export const BrandMark: FC<ComponentProps<'svg'>> = ({ className, ...props }) => (
    <svg
        viewBox='0 0 300 300'
        shapeRendering='crispEdges'
        role='img'
        aria-label='stepper'
        className={cn('size-7 text-foreground', className)}
        {...props}>
        <rect width='300' height='300' fill='currentColor' />
        <path d='M0 0 H200 V100 H100 V200 H0 Z' fill='var(--background)' />
    </svg>
)
