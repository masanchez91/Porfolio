import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import mdx from '@astrojs/mdx'

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt(), mdx()],
  output: 'static',
  site: 'https://holy-code.com/',
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
      wrap: true
    }
  }
})
