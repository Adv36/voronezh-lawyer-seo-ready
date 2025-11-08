/** @type {import('next').NextConfig} */
const nextConfig = {
  // Разрешить загрузку изображений с внешних доменов (если нужно)
  images: {
    domains: [
      'raw.githubusercontent.com',
      'github.com',
      'user-images.githubusercontent.com'
    ],
    // Удалите remotePatterns ниже, если не используете внешние изображения
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
    ],
  },

  // Оптимизация для production
  output: 'export',
  distDir: 'out',

  // Удалить telemetry (не отправлять данные Next.js)
  telemetry: false,

  // Поддержка React 18
  reactStrictMode: true,
};

module.exports = nextConfig;