import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Coludai Docs",
  description: "Coludai 官方文档",
  ignoreDeadLinks: true,
  lastUpdated: true,
  rewrites: {
    'source/:page': 'destination/:page'
  },
  themeConfig: {
    logo: 'https://img2.imgtp.com/2024/05/25/WNdbDY2s.png',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/开发与规范.html' } // 新增的文档按钮
    ],

    sidebar: [
      //示例-开始
      {
        text: '开始',
        items: [
          { text: '开发与规范', link: '/开发与规范.md' },
          // { text: 'Getting Started', link: '/getting-started' } 
          // { text: '新文档', link: '/new-document' } // 新增的文档链接
        ]
      }
      //示例-结束 
,
      { text: '关于', link: '/开发与规范.md' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WeyStudio/weystudio.github.io' }
    ]
  }
})
