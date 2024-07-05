import { defineConfig } from "astro/config";
import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);
// https://astro.build/config
export default defineConfig({
  site: "https://lnear.dev",
  vite: {
    resolve: {
      alias: {
        "@common": path.resolve(__dirname, "../common"),
      },
    },
  },
});
