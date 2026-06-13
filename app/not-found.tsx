import '@app/globals.css'
import Link from 'next/link'
import { en } from '@shared/i18n/dictionaries/en'
import { Button } from '@shared/ui/button'
import { BrandMark } from '@shared/ui/brand-mark'

const NotFound = () => (
    <html lang='en' suppressHydrationWarning>
        <body className='flex min-h-dvh flex-col items-center justify-center gap-4 bg-background px-4 text-center text-foreground antialiased'>
            <BrandMark className='size-10' />
            <p className='text-5xl font-extrabold tracking-tight'>404</p>
            <p className='text-lg font-semibold'>{en.notFound.title}</p>
            <p className='text-muted-foreground'>{en.notFound.body}</p>
            <Button asChild className='mt-2'>
                <Link href='/en'>{en.notFound.home}</Link>
            </Button>
        </body>
    </html>
)

export default NotFound
