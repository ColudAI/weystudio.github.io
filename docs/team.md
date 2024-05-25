---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://coludai.cn/img/users/1.png',
    name: 'Liu Shi an',
    title: '室长',
    links: [
      { icon: 'github', link: 'https://github.com/Lt2023' }
    ]
  },
  {
    avatar: 'https://coludai.cn/img/users/2.png',
    name: '劳资去泥的',
    title: '室长对象（工作室成员：^*^*&%&^$#^*）'
  },
  {
    avatar: 'https://coludai.cn/img/users/8.png',
    name: '刘钦宇',
    title: '五年级的2B 万能程序员',
    links: [
      { icon: 'github', link: 'https://github.com/Starry-Sky-World' }
    ]
  },
  {
    avatar: 'https://coludai.cn/img/users/3.png',
    name: '「云服部」一个疯了的氢氧化钠',
    title: '云服部 主管'
  },
  {
    avatar: 'https://coludai.cn/img/users/5.png',
    name: '爱分享的小黄鸭',
    org:"蜜蜂云&&创枫云&&Coludai合作商",
    orgLink:"https://cloud.beecld.com/"
  }

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Coludai Team
    </template>
    <template #lead>
      与未来对话，探索无限可能
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>