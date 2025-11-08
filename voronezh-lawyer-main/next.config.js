/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'raw.githubusercontent.com',
      'github.com',
      'user-images.githubusercontent.com'
    ],
  },
};

module.exports = nextConfig;
