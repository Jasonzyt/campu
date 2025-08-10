import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@pinia/nuxt",
  ],
  ui: {
    theme: {
      colors: ["primary", "neutral"],
    },
  },
  icon: {
    customCollections: [
      {
        prefix: "my",
        dir: "./app/assets/icon/my",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
