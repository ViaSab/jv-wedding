// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Jillian and Vianney's wedding site",
    },
  },
  modules: [
    // Handle content files
    "@nuxt/content",
    // UI Framework
    "@element-plus/nuxt",
    // Multi-language
    "@nuxtjs/i18n",
  ],
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: "root",
    },
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
  css: ["@/assets/style/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/_variables.scss";',
        },
      },
    },
  },
});
