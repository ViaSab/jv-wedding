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
    // Collection of utilities
    "@vueuse/nuxt",
    // Dev Tools
    "@nuxt/devtools",
    // Nuxt Images
    "@nuxt/image",
  ],
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
    detectBrowserLanguage: false,
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    //   redirectOn: 'root',  // recommended
    // }
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
  css: ["@/assets/style/main.scss", "element-plus/theme-chalk/display.css"],
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
