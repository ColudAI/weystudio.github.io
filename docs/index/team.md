---
layout: page
---
<!--
          _____                   _______                   _____            _____                    _____                            _____                    _____          
         /\    \                 /::\    \                 /\    \          /\    \                  /\    \                          /\    \                  /\    \         
        /::\    \               /::::\    \               /::\____\        /::\____\                /::\    \                        /::\    \                /::\    \        
       /::::\    \             /::::::\    \             /:::/    /       /:::/    /               /::::\    \                      /::::\    \               \:::\    \       
      /::::::\    \           /::::::::\    \           /:::/    /       /:::/    /               /::::::\    \                    /::::::\    \               \:::\    \      
     /:::/\:::\    \         /:::/~~\:::\    \         /:::/    /       /:::/    /               /:::/\:::\    \                  /:::/\:::\    \               \:::\    \     
    /:::/  \:::\    \       /:::/    \:::\    \       /:::/    /       /:::/    /               /:::/  \:::\    \                /:::/__\:::\    \               \:::\    \    
   /:::/    \:::\    \     /:::/    / \:::\    \     /:::/    /       /:::/    /               /:::/    \:::\    \              /::::\   \:::\    \              /::::\    \   
  /:::/    / \:::\    \   /:::/____/   \:::\____\   /:::/    /       /:::/    /      _____    /:::/    / \:::\    \            /::::::\   \:::\    \    ____    /::::::\    \  
 /:::/    /   \:::\    \ |:::|    |     |:::|    | /:::/    /       /:::/____/      /\    \  /:::/    /   \:::\ ___\          /:::/\:::\   \:::\    \  /\   \  /:::/\:::\    \ 
/:::/____/     \:::\____\|:::|____|     |:::|    |/:::/____/       |:::|    /      /::\____\/:::/____/     \:::|    |        /:::/  \:::\   \:::\____\/::\   \/:::/  \:::\____\
\:::\    \      \::/    / \:::\    \   /:::/    / \:::\    \       |:::|____\     /:::/    /\:::\    \     /:::|____|        \::/    \:::\  /:::/    /\:::\  /:::/    \::/    /
 \:::\    \      \/____/   \:::\    \ /:::/    /   \:::\    \       \:::\    \   /:::/    /  \:::\    \   /:::/    /          \/____/ \:::\/:::/    /  \:::\/:::/    / \/____/ 
  \:::\    \                \:::\    /:::/    /     \:::\    \       \:::\    \ /:::/    /    \:::\    \ /:::/    /                    \::::::/    /    \::::::/    /          
   \:::\    \                \:::\__/:::/    /       \:::\    \       \:::\    /:::/    /      \:::\    /:::/    /                      \::::/    /      \::::/____/           
    \:::\    \                \::::::::/    /         \:::\    \       \:::\__/:::/    /        \:::\  /:::/    /                       /:::/    /        \:::\    \           
     \:::\    \                \::::::/    /           \:::\    \       \::::::::/    /          \:::\/:::/    /                       /:::/    /          \:::\    \          
      \:::\    \                \::::/    /             \:::\    \       \::::::/    /            \::::::/    /                       /:::/    /            \:::\    \         
       \:::\____\                \::/____/               \:::\____\       \::::/    /              \::::/    /                       /:::/    /              \:::\____\        
        \::/    /                 ~~                      \::/    /        \::/____/                \::/____/                        \::/    /                \::/    /        
         \/____/                                           \/____/          ~~                       ~~                               \/____/                  \/____/         
                                                                                                                                                                               
-->
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  //
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2485108343&spec=640&img_type=jpg',
    name: '刘时安',
    title: '室长',
    links: [
      { icon: 'github', link: 'https://github.com/Lt2023' },
      { icon: 'youtube', link: 'https://www.youtube.com/@user-bv7mc6gv7k' }
    ]
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1280993766&spec=640&img_type=jpg',
    name: '刘钦宇',
    title: '五年级的2B 万能程序员',
    links: [
      { icon: 'github', link: 'https://github.com/Starry-Sky-World' }
    ]
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3530284400&spec=640&img_type=jpg',
    name: '一个疯了的氢氧化钠',
    title: '副室长'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=210308731&spec=640&img_type=jpg',
    name: '碱式碳酸铜',
    title: 'UI设计'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2275475104&spec=640&img_type=jpg',
    name: '钟昊阳',
    title: 'ColudAI联合创始人'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1794916518&spec=640&img_type=jpg',
    name: '琦琦',
    title: 'CoCo部门'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3220257676&spec=640&img_type=jpg',
    name: 'api.fuxsto.cn',
    title: '指导工程师'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1494266056&spec=640&img_type=jpg',
    name: '彬彬有礼',
    title: '云计算'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2405806947&spec=640&img_type=jpg',
    name: '登登←一只菜坤',
    title: 'CoCo'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3551623996&spec=640&img_type=jpg',
    name: '旧梦残颜',
    title: '核心成员'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=615769184&spec=640&img_type=jpg',
    name: '冷面小青龙',
    title: '安全业务指导'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1908809023&spec=640&img_type=jpg',
    name: 'Loading...',
    title: '机器人工程师'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2678124929&spec=640&img_type=jpg',
    name: '兰熙不是兰溪 ~嗷呜',
    title: 'HK 负责人|Furry晚期'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=893919047&spec=640&img_type=jpg',
    name: '奋斗',
    title: '前端工程师'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3486325199&spec=640&img_type=jpg',
    name: '谬',
    title: '前端工程师'
  },
    {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3174251894&spec=640&img_type=jpg',
    name: '小宏XeLa',
    title: '前端工程师'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3803746525&spec=640&img_type=jpg',
    name: '石榴 Grant·Pome',
    title: '整活部|宣传片'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3803786563&spec=640&img_type=jpg',
    name: '石榴（群废物，正在摸鱼中）',
    title: '设计部 | 违规的训练师都到我嘴里！'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3463448740&spec=640&img_type=jpg',
    name: '数学不及格不改名',
    title: '指导'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3332760455&spec=640&img_type=jpg',
    name: 'Enzyme YouMing 酶游明',
    title: '前端工程师'
  },
    {
    avatar: 'https://coludai.cn/data_img/Logo.png',  // 可以使用一个占位符图片，或自定义头像
    name: '您梦寐以求的工作场所',
        links: [
      { icon: 'link', link: 'http://coludai.cn/careers' } // 在这里设置链接地址
    ],
    title: '点击加入我们'
  }
]
const orgs = [

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Coludai 核心成员
    </template>
    <template #lead>
      与未来对话，探索无限可能
      在这里，见证未来！
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<!-- 合作商 ORGS -->
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      合作商
    </template>
    <template #lead>
      Coludai官方合作商
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="orgs"
  />
</VPTeamPage>