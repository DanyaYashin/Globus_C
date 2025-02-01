import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Указывает на статический экспорт
  images: {
    unoptimized: true, // Отключает оптимизацию изображений для статики
  },
};

module.exports = nextConfig;


export default nextConfig;
