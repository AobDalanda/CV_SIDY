import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  sidy: 'https://AobDalanda.github.io',
  base: 'CV_SIDY',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
