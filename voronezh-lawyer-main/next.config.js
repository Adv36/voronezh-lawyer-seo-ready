/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'raw.githubusercontent.com',
      'github.com',
      'user-images.githubusercontent.com',
      'ext.same-assets.com', // ← если ты всё ещё используешь старые изображения (но лучше убрать)
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Опционально: если хочешь, чтобы site-verification был доступен — но не обязательно
  // redirects() {
  //   return [
  //     {
  //       source: '/googlebe2d8761443ffd45.html',
  //       destination: '/googlebe2d8761443ffd45.html',
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
