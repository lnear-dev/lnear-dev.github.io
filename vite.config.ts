import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    sourcemap: true,
    assetsDir: 'code',
    target: ['esnext', 'edge100', 'firefox100', 'chrome100', 'safari18'],
  },

  resolve: {
    alias: {
      "@resources": "../../resources",
    },
  }
});
