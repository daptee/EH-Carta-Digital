// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['@/assets/css/main.css'],

  app: {
    head: {
      title: 'EH Café',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Jost:wght@200;300;400;500&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,250,0,0&display=block',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      MODE: process.env.MODE,
      PORT: process.env.PORT,
      INTERNAL_EH_BASE_URL:
        process.env.MODE === 'development'
          ? process.env.INTERNAL_EH_BASE_URL_DEV
          : process.env.INTERNAL_EH_BASE_URL_PROD,
      OUR_EH_CAFETERIA_BASE_URL:
        process.env.MODE === 'development'
          ? process.env.OUR_EH_CAFETERIA_BASE_URL_DEV
          : process.env.OUR_EH_CAFETERIA_BASE_URL_PROD,
      // API principal de EH (la del admin): orden de la carta (`/api/menu-order/carta_digital`).
      OUR_EH_INTERNAL_BASE_URL:
        process.env.MODE === 'development'
          ? process.env.OUR_EH_INTERNAL_BASE_URL_DEV
          : process.env.OUR_EH_INTERNAL_BASE_URL_PROD,
    },
  },
  devServer: {
    port: Number(process.env.PORT) || 3101,
    host: '0.0.0.0'
  },
})