// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
    'vuetify/styles',
    '@/assets/css/main.css'
  ],
  build: {
    transpile: ['vuetify']
  },
  app: {
    head: {
      link: [
        { 
          rel: 'icon', 
          type: 'image/x-icon', 
          href: '/favicon_new.ico'
        }
      ]
    }
  }
})
