import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL;
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  build: {
    // Página única: o CSS vai diretamente no HTML, sem pedido extra.
    inlineStylesheets: 'always',
  },
});
