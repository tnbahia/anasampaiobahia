import { defineConfig } from 'astro/config';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://tnbahia.github.io',
  base: isGitHubActions ? '/anasampaiobahia' : '/',
  output: 'static',
});
