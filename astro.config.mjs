import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://tnbahia.github.io';
const base = process.env.BASE_PATH ?? '/anasampaiobahia';

export default defineConfig({
  site,
  base,
  output: 'static',
});
