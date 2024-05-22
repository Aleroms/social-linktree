<template>
  <section class="profile-container">
    <h1>My Profile</h1>
    <p>This is where you can add, remove and update information from your linktree.</p>
  </section>
  <RouterLink to="/">go back</RouterLink>
  <RouterLink to="/" target="_blank">preview</RouterLink>
  <button @click="logout">Logout</button>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const user = useUserStore()
const router = useRouter()
function logout() {
  user.logout()
  router.push('/')
}
</script>

<style scoped></style>
