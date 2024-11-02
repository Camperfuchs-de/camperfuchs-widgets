import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => ['booking-calendar', 'image-slider', 'vehicle-details'].includes(tag)
        }
      }
    }),
  ],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL)
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
