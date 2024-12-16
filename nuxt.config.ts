// https://nuxt.com/docs/api/configuration/nuxt-config
import dotenv from 'dotenv';
import path from 'path';

const envFilePath = process.env.NODE_ENV === 'production' ? path.resolve(__dirname, '.env.production') : path.resolve(__dirname, '.env.development');

dotenv.config({
  path: envFilePath
});

export default defineNuxtConfig({
  css: [
    '~/assets/styles/main.css'
  ],
  devtools: {
    enabled: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt'
  ],
  compatibilityDate: '2024-08-23'
});