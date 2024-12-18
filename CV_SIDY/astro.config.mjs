import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://AobDalanda.github.io',
  base: 'CV_SIDY/CV_SIDY',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
