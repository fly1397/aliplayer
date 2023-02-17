import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

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
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import 'style.scss';" // 添加公共样式
      }
    }
  }
})
