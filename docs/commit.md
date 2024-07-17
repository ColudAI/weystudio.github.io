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
  //
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2485108343&spec=640&img_type=jpg',
    name: 'Liu Shi an',
    title: 'Commit'
  },{
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1280993766&spec=640&img_type=jpg',
    name: '顾雨晨',
    title: 'Commit'
  },

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Commit
    </template>
    <template #lead></template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
