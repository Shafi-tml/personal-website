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
    unoptimized: true,
    domains: ['e4bda9e1.personal-website-72m.pages.dev']
  },
  trailingSlash: true,
  distDir: 'out'
}

module.exports = nextConfig 