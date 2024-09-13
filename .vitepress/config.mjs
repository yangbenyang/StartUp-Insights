import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "兼职创业",
  description: "独立开发|前端赚钱|自由职业|技术创业|开发者成长指南",
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    logo: '/images/logo.png',

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yangbenyang' }
    ]
  }
})
