import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote2',
      filename: 'remoteEntry.js',
      exposes: {
          './APP': './src/App.tsx',
      },
    })
  ],

  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
