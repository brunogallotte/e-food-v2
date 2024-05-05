/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'fake-api-tau.vercel.app',
      },
    ],
  },
}

export default nextConfig
