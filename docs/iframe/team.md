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
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2485108343&spec=640&img_type=jpg',
    name: 'Liu Shi an',
    title: '室长',
    links: [
      { icon: 'github', link: 'https://github.com/Lt2023' },
      { icon: 'youtube', link: 'https://www.youtube.com/@user-bv7mc6gv7k' }
    ]
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=399551261&spec=640&img_type=jpg',
    name: '劳资去泥的',
    title: '室长对象'
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
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3674726063&spec=640&img_type=jpg',
    name: '「云服部」一个疯了的氢氧化钠',
    title: '云服部 主管'
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
  }

]
const orgs = [
  {
    avatar: 'https://coludai.cn/img/users/5.png',
    name: '蜜蜂云',
    org:"ColudAI 云服务合作商",
    orgLink:"https://cloud.beecld.com/"
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/114594856?s=200&v=4',
    name: 'SuperLinkStudio',
    org:"Coludai AI合作商",
    orgLink:"https://superlinkstudio.top/"
  }
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