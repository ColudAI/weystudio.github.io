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
    logo: 'https://coludai.cn/data_img/Logo.png',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/index/开发与规范.html' }, // 新增的文档按钮
      { text: 'Team', link: '/index/team.md' }
    ],

    sidebar: {
      //示例-开始
      '/dev/':[
        {
          text: '开始',
          items: [
            { text: '开发', link: '/dev/index.md' },
            { text: '基础文档', link: '/dev/MainDocs.md' },
            // { text: 'Getting Started', link: '/getting-started' } 
            // { text: '新文档', link: '/new-document' } // 新增的文档链接
        ]
        },
        { text: 'Team', link: '/index/team.md' }
      ],
      '/index/':[
        {
          text: '开始',
          items: [
            { text: '开发', link: '/dev/index.md' },
            // { text: 'Getting Started', link: '/getting-started' } 
            // { text: '新文档', link: '/new-document' } // 新增的文档链接
        ]
        },
        { text: 'Team', link: '/index/team.md' }
      ],
      //示例-结束
      //{ text: 'Team', link: '/index/team.md' },
      //{ text: '关于', link: '/index/开发与规范.md' }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WeyStudio/weystudio.github.io' },
      { icon: 'twitter', link: 'https://twitter.com/LSA141431'}
    ]
  }
})
