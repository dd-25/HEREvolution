// vite.config.mjs
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/HEREvolution/index.html',
  build: {
    assetsDir: 'assets',
    outDir: 'dist',
    publicDir: 'public',
    rollupOptions: {
      input: 'src/main.js',
    },
    minify: 'terser',
    manifest: true,
  },
});
