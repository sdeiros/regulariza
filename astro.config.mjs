import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://regularizavisa.com.br',
  integrations: [sitemap()],
});