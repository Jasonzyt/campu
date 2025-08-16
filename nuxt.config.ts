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
        dir: "./app/assets/icon/",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  content: {
    build: {
      markdown: {
        remarkPlugins: {
          "remark-math": {},
        },
        rehypePlugins: { "rehype-katex": {} },

        highlight: {
          theme: {
            default: "one-light",
            dark: "one-dark-pro",
            sepia: "monokai",
          },
          langs: [
            "json",
            "js",
            "ts",
            "html",
            "css",
            "vue",
            "shell",
            "mdc",
            "md",
            "yaml",
            "c",
            "cpp",
            "java",
            "kotlin",
            "cmake",
            "go",
            "lua",
            "python",
            "bash",
          ],
        },
      },
    },
  },
});
