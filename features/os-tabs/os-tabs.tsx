'use client'

import { FC, KeyboardEvent, ReactNode, useId, useState } from 'react'
import { cn } from '@shared/lib/utils'

type OsTabsItem = { key: string; label: string; panel: ReactNode }

type OsTabsProps = { items: OsTabsItem[]; ariaLabel: string }

export const OsTabs: FC<OsTabsProps> = ({ items, ariaLabel }) => {
    const baseId = useId()
    const [active, setActive] = useState(items[0]?.key)

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        const index = items.findIndex((item) => item.key === active)
        if (event.key === 'ArrowRight') setActive(items[(index + 1) % items.length].key)
        if (event.key === 'ArrowLeft') setActive(items[(index - 1 + items.length) % items.length].key)
    }

    return (
        <div>
            <div role='tablist' aria-label={ariaLabel} className='inline-flex gap-1 rounded-md border bg-card p-1 shadow-xs'>
                {items.map((item) => (
                    <button
                        key={item.key}
                        type='button'
                        role='tab'
                        id={`${baseId}-tab-${item.key}`}
                        aria-selected={active === item.key}
                        aria-controls={`${baseId}-panel-${item.key}`}
                        tabIndex={active === item.key ? 0 : -1}
                        onClick={() => setActive(item.key)}
                        onKeyDown={handleKeyDown}
                        className={cn(
                            'rounded-sm px-3 py-1.5 text-sm font-medium transition-colors outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                            active === item.key ? 'bg-secondary text-secondary-foreground' : 'text-muted-foreground hover:text-foreground',
                        )}>
                        {item.label}
                    </button>
                ))}
            </div>
            {items.map((item) => (
                <div
                    key={item.key}
                    role='tabpanel'
                    id={`${baseId}-panel-${item.key}`}
                    aria-labelledby={`${baseId}-tab-${item.key}`}
                    hidden={active !== item.key}
                    className='mt-3'>
                    {item.panel}
                </div>
            ))}
        </div>
    )
}
