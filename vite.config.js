import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/camperfuchs-widgets',
  build:{
    outDir: 'docs'
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => ['booking-calendar', 'image-slider', 'vehicle-details'].includes(tag)
        }
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
