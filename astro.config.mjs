import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import mdx from '@astrojs/mdx'
import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
        }
      ],
      sitemap: true,
      host: 'https://holy-code.com'
    }), 
    mdx()
  ],
  output: 'static',
  site: 'https://holy-code.com/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  },
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
      wrap: true,
      transformers: []
    },
    remarkPlugins: [],
    rehypePlugins: []
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  server: {
    port: 3000,
    host: true
  },
  vite: {
    optimizeDeps: {
      include: ['@astrojs/mdx']
    }
  }
})
