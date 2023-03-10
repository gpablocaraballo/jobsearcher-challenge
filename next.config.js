/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  },
  images: {
    domains: ['cdn.shopify.com']
  }
}

module.exports = nextConfig
