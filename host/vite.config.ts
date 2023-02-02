import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import federation from "@originjs/vite-plugin-federation"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // vue: 'vue/dist/vue.esm-bundler.js',
    }
  },
  plugins: [
    vue(), 
    vueJsx(),
    federation({
      name: 'host',
      remotes: {
        remote1: "http://localhost:5001/assets/remoteEntry.js",
        remote2: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ['vue', 'pinia']
    }),
  ],
  build: {
    minify: true,
  },
})
