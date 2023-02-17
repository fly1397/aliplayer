import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: path.join(__dirname, 'src', 'renderer'),
  publicDir: 'public',
  server: {
      port: 8080,
  },
  build: {
      outDir: path.join(__dirname, 'build', 'renderer'),
      emptyOutDir: true,
  },
  plugins: [vue()],
})
