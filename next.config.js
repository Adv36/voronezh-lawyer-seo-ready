/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'raw.githubusercontent.com',
      'github.com',
      'user-images.githubusercontent.com',
      'ext.same-assets.com'
    ]
  }
};

module.exports = nextConfig;