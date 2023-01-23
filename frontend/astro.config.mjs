import { defineConfig } from 'astro/config';

import astro from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.compatibleconnections.biz',
  integrations: [astro()]
});