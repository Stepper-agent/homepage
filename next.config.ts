import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    reactCompiler: true,
    trailingSlash: true,
    images: { unoptimized: true },
    turbopack: {
        root: import.meta.dirname,
    },
}

export default nextConfig
