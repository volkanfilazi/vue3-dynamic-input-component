import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/main.ts'),
      name: 'VInput',
      fileName: 'vue-dynamic-input-component'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  css: {
    modules: {
      generateScopedName: '[name]_[local]__[hash:base64:5]'
    },
    postcss: {
      plugins: [
        autoprefixer() // Autoprefixer'ı postcss eklentisi olarak ekleyin
      ]
    }
  }
})


