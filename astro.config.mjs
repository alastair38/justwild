import {defineConfig} from 'astro/config'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'
import sitemap from '@astrojs/sitemap'

import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  site: 'https://justwild.netlify.app/',
  integrations: [
    tailwind(),
    image(),
    sitemap(),
    compress({
      css: true,
      html: false,
      js: false,
      img: false,
      svg: false,
    }),
  ],
})
