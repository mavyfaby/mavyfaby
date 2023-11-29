import { defineConfig } from 'vite';
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') }
    ]
  },
  build: {
    rollupOptions: {
      input: {
        "index": resolve(__dirname, "index.html"),
        "privacy-policy": resolve(__dirname, "src/pages/privacy-policy/index.html"),
      },
      output: {
        compact: true,
        experimentalMinChunkSize: 200000,
        entryFileNames: `assets/mavy.[hash].js`,
        chunkFileNames: `assets/mavy.[hash].js`,
        assetFileNames: `assets/mavy.[hash].[ext]`,
      }
    }
  }
})
