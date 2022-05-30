import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

import UnoCSS from 'unocss/vite'
import { presetUno, presetTypography } from 'unocss'

import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

// https://astro.build/config
export default defineConfig({
  // site: "http://localhost:3000",
  site: 'https://example.com',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: { light: 'github-light', dark: 'github-dark' },
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word']
          }
        }
      ],
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }]
    ]
  },
  vite: {
    plugins: [
      UnoCSS({
        presets: [presetUno(), presetTypography()]
      })
    ]
  }
})
