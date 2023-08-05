/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['res.cloudinary.com'],
  },
}

export default nextConfig
