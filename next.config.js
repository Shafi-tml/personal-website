/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true
  },
  output: 'export',
  images: {
    unoptimized: true
  },
  assetPrefix: '',
  distDir: 'out'
}

module.exports = nextConfig 