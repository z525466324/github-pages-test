import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/github-pages-test/',
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
