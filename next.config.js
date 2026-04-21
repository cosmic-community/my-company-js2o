/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.cosmicjs.com' },
      { protocol: 'https', hostname: 'imgix.cosmicjs.com' },
    ],
  },
}

module.exports = nextConfig