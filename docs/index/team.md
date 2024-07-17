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
    name: 'Liu Shi an',
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
    title: 'ColudAI联合创始人[离开]'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3140529679&spec=640&img_type=jpg',
    name: '龙apan之韵',
    title: 'App部门'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3220257676&spec=640&img_type=jpg',
    name: 'api.fuxsto.cn',
    title: '指导工程师'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1494266056&spec=640&img_type=jpg',
    name: '彬彬有礼',
    title: '云服务'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2405806947&spec=640&img_type=jpg',
    name: '登登←一只菜坤',
    title: 'CoCo'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3551623996&spec=640&img_type=jpg',
    name: '旧梦残颜',
    title: 'SAI主管'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3550684246&spec=640&img_type=jpg',
    name: 'Impan',
    title: '未知，等待完善'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=615769184&spec=640&img_type=jpg',
    name: '冷面小青龙',
    title: '安全业务指导'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1908809023&spec=640&img_type=jpg',
    name: 'Loading...',
    title: '未知，等待完善...'
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
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3030477311&spec=640&img_type=jpg',
    name: '哦，蛋仔派对！',
    title: 'CoCo | 蛋仔派对晚期'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3486325199&spec=640&img_type=jpg',
    name: '谬',
    title: '前端'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3640034275&spec=640&img_type=jpg',
    name: 'Sinpro',
    title: '安全'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3803746525&spec=640&img_type=jpg',
    name: '石榴 Grant·Pome',
    title: '整活部|TK Forum'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3803786563&spec=640&img_type=jpg',
    name: '石榴（群废物，正在摸鱼中）',
    title: '设计部 | 违规的训练师都到我嘴里！'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3463448740&spec=640&img_type=jpg',
    name: '数学不及格不改名',
    title: '指导-加密🔐'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1632287168&spec=640&img_type=jpg',
    name: '夏晨吖',
    title: '云服务'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3662659718&spec=640&img_type=jpg',
    name: '星河|哆啦A梦',
    title: 'SAI技术部'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3224063731&spec=640&img_type=jpg',
    name: '有为骚年',
    title: '未知'
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3408367085&spec=640&img_type=jpg',
    name: '　',
    title: 'SAI技术部 | 透明头像'
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
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=927953637&spec=640&img_type=jpg',
    name: '  ',
    title: '合作'
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