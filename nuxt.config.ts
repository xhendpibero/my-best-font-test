// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'my-font-test',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
    }
  },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    [
      '@nuxtjs/google-fonts',
        {
          families: {
            download: true,
            preconnect: true,
            prefetch: true,
            display: "block",
            useStylesheet: true,
            "Mulish": { wght: [400, 600] },
          }
        }
    ]
  ]
})