/** @type {import('next').NextConfig} */
const nextConfig = {
  // TypeScript is now enabled for build checks
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/ux/:slug',
        destination: '/en/ux/:slug',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
