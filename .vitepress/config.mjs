import { defineConfig } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "兼职创业",
  description: "独立开发|前端赚钱|自由职业|技术创业|开发者成长指南",
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '项目',
        link: '/project/'
      }
    ],
    logo: '/images/logo.png',

    sidebar: {
      'liveSlice/': { base: '/', items: sidebarLiveSlice() },
      // 'reference/': { base: 'reference/', items: sidebarReference() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yangbenyang' }
    ]
  },
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': "gallery"
      })
    }
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
      },
    ],
  ],
})

function sidebarLiveSlice() {
  return [
    {
      text: '基础入门',
      collapsed: false,
      items: [
        { text: '听泉赏宝切片介绍', link: 'liveSlice/guide/what-is-liveclip' },
        { text: '切片素材获取详细版', link: 'liveSlice/guide/material-acquisition' },
        { text: '工具选择', link: 'liveSlice/guide/tools' },
        { text: '如何授权', link: 'liveSlice/guide/authorization' }
      ]
    },
    {
      text: '实战教程',
      collapsed: false,
      items: [
        { text: '内容选择技巧', link: 'liveSlice/tutorial/content-selection' },
        { text: '录制与切片方法', link: 'liveSlice/tutorial/recording-clipping' },
        { text: '剪辑与包装', link: 'liveSlice/tutorial/editing-packaging' },
        { text: '发布与优化', link: 'liveSlice/tutorial/publishing' },
        { text: '变现技巧', link: 'liveSlice/tutorial/monetization' }
      ]
    },
  ]
}
