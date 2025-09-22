// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt',  [
      '@nuxtjs/i18n',
      {
        locales: [
          { code: 'es', iso: 'es-ES', file: 'es.json', name: 'Español' },
          { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
          { code: 'pt', iso: 'pt-BR', file: 'pt.json', name: 'Português' }
        ],
        defaultLocale: 'es',
        lazy: false,
        langDir: 'lang/',
        vueI18n: './i18n.config.ts',
        fallbackLocale: 'es'
      }
    ]],
  css: ['@/assets/css/main.css'],

  runtimeConfig: {
    public: {
      MODE: process.env.MODE,
      INTERNAL_EH_BASE_URL:
        process.env.MODE === 'development'
          ? process.env.INTERNAL_EH_BASE_URL_DEV
          : process.env.INTERNAL_EH_BASE_URL_PROD,
      OUR_EH_CAFETERIA_BASE_URL:
        process.env.MODE === 'development'
          ? process.env.OUR_EH_CAFETERIA_BASE_URL_DEV
          : process.env.OUR_EH_CAFETERIA_BASE_URL_PROD,
    },
  },
})