<script setup lang="ts">
import SharableLinkVue from '@/components/ShareableLink.vue'
import AuthButton from '@/components/AuthButton.vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user';
const user = useUserStore()
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
    <div class="auth-container">
      <AuthButton name="Login" link="login" v-if="!user.userLoggedIn"/>
      <AuthButton name="Profile" link="profile" v-else/>
      <AuthButton name="Sign up" link="signup" />
    </div>
    <RouterLink to="policy">Policy</RouterLink>
  </section>
</template>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.auth-container {
  margin: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
}
</style>
