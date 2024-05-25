import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Coludai Docs",
  description: "Coludai 官方文档",
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/about.md' } // 新增的文档按钮
    ],

    sidebar: [
      //示例-开始
      {
        text: '开始',
        items: [
          { text: '关于', link: '/about.md' },
          { text: 'Getting Started', link: '/getting-started' } 
        ]
      }
      //示例-结束 
,
      { text: '关于', link: '/about.md' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WeyStudio/weystudio.github.io' }
    ],
    logo: '/logo.svg'
  }
})
