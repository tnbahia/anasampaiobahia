import { defineConfig } from 'astro/config';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const site = process.env.SITE_URL ?? 'https://tnbahia.github.io';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: isGitHubActions ? site : undefined,
  base: isGitHubActions ? base : '/',
  output: 'static',
});
