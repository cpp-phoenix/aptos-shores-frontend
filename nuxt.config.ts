// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    dirs: []
  },
  app: {
    pageTransition: false,
    layoutTransition: false
  },
  devtools: { enabled: true },
  css: ['~/app.scss'],
  modules: ['@nuxtjs/strapi'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://127.0.0.1:1337',
    prefix: '/api',
    version: 'v4',
  }
})
