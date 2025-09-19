/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // ❌ Skip ESLint errors during build (useful for Vercel deploys)
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
