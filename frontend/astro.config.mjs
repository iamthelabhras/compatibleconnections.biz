import { defineConfig } from 'astro/config';

import astro from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.compatibleconnections.biz',
  integrations: [astro(
    {
      projectId: "0nvd9l6m",
      dataset: "production",
      apiVersion: 'v2021-03-25',
      useCdn: true,
    })]
});