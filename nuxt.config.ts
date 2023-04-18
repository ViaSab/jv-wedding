// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Jillian and Vianney's wedding",
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    },
  },
});
