import { defineConfig } from "astro/config";
import { CONFIG_SITE, CONFIG_BASE } from "./src/consts";
import purgecss from "astro-purgecss";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss(), sitemap()],
  site: CONFIG_SITE,
  base: CONFIG_BASE,
});
