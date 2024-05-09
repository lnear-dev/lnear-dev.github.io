import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    sourcemap: true,
    assetsDir: 'code',
    target: ['esnext', 'edge100', 'firefox100', 'chrome100', 'safari18'],
    // rollupOptions: {
    //   external: /^@microsoft\/fast-(element|components)/,
    // },
  },
  resolve: {
    alias: {
        "@": "/src",
        "@css": "/resources/css",
        "@media": "/src/assets",
        "@img": "/src/assets/img",
        "@icons": "/src/assets/icons",
        "@fonts": "/src/assets/fonts",
        "@components": "/src/components",
        "@pages": "/src/pages",
    },
},
  plugins: [
    VitePWA({
      strategies: 'injectManifest',
      injectManifest: {
        swSrc: 'public/sw.js',
        swDest: 'dist/sw.js',
        globDirectory: 'dist',
        globPatterns: ['**/*.{html,js,css,json, png}'],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
