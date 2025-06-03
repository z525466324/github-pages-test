import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
  base: '/github-pages-test/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@views': resolve(__dirname, 'src/views'),
    }
  },
  build: {
    // 开启manifest生成
    manifest: 'detect-updates/manifest.json',
    rollupOptions: {
      output: {
        // 确保文件名包含哈希（默认已启用）
        entryFileNames: `[name].[hash].js`,
        chunkFileNames: `[name].[hash].js`,
        assetFileNames: `[name].[hash].[ext]`
      }
    },
  }
})
