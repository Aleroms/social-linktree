<script setup lang="ts">
import SharableLinkVue from '@/components/ShareableLink.vue'

const test_data = {
  name: 'Jessica Randall',
  location: 'London, United Kingdom',
  quote: 'Front-end developer and avid reader.',
  linktree: [
    {
      platform: 'GitHub',
      link: 'https://github.com'
    },
    {
      platform: 'Frontend Mentor',
      link: 'https://frontendmentor.io'
    },
    {
      platform: 'LinkedIn',
      link: 'https://linkedin.com'
    },
    {
      platform: 'Twitter',
      link: 'https://twitter.com'
    },
    {
      platform: 'Instagram',
      link: 'https://instagram.com'
    }
  ],
  imageUrl: '/avatar-jessica.jpeg'
}
</script>

<template>
  <section class="home">
    <SharableLinkVue :data="test_data" />
  </section>
</template>

<style scoped>
.home{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
