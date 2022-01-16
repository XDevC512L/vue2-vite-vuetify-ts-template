import { createVuePlugin } from "vite-plugin-vue2";
import path from "path";
import Components from "unplugin-vue-components/vite";
import { VuetifyResolver } from "unplugin-vue-components/resolvers";
/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  resolve: {
    alias: [
      {
        find: "@/",
        replacement: `${path.resolve(__dirname, "./src")}/`,
      },
      {
        find: "src/",
        replacement: `${path.resolve(__dirname, "./src")}/`,
      },
    ],
  },
  plugins: [
    createVuePlugin(),
    Components({
      resolvers: [VuetifyResolver()],
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: [
          // vuetify variable overrides
          '@import "@/assets/styles/variables"',
          "",
        ].join("\n"),
      },
      scss: {
        sassOptions: {
          quietDeps: true,
        },
      },
    },
  },
};
