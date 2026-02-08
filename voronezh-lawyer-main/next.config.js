/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Оставляем только если реально используешь внешние картинки
      // В твоём случае — лучше удалить всё, кроме локальных
    ],
  },
};

module.exports = nextConfig;
