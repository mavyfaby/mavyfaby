// @ts-check
import { defineConfig } from 'astro/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  server: {
    port: 4000
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // Astro's static build runs separate Vite "environments" (prerender,
    // client, ssr). Top-level `build.rollupOptions.output` doesn't reach
    // the client phase reliably — Astro reads the override from
    // `environments.client.build.rollupOptions.output` and merges it AFTER
    // its own defaults, so user values win there.
    environments: {
      client: {
        build: {
          rollupOptions: {
            output: {
              entryFileNames: '_astro/mavyfaby.[hash].js',
              chunkFileNames: '_astro/mavyfaby.[hash].js',
              assetFileNames: '_astro/mavyfaby.[hash].[ext]',
            },
          },
        },
      },
    },
  },
});
