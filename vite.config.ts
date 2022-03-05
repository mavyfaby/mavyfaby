import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      '@': "/src",
    }
  },
  build: {
    rollupOptions: {
      input: {
        "index": resolve(__dirname, "index.html"),
        "privacy-policy": resolve(__dirname, "src/pages/privacy-policy/index.html"),
      }
    }
  }
})
