<template>
  <section class="profile-container">
    <h1>My Profile</h1>
    <p>This is where you can add, remove and update information from your linktree.</p>
    <FormKit type="form" @submit="updateUserInfo">
      <h2>Update Form</h2>
      <FormKit
        type="file"
        label="Profile Image"
        accept=".png,.jpeg,.jpg"
        multiple="false"
      />
      <FormKit type="text" label="Full Name" name="fullname" validation="length:1,100" />
      <FormKit type="text" label="Location" name="location" validation="length:1,100" />
      <FormKit type="text" label="Title" name="title" validation="length:1,100" />
      <h2>Social Linktree</h2>
      <FormKit type="list" :value="[{}]" dynamic #default="{ items, node, value }">
        <FormKit type="group" v-for="(item, index) in items" :key="item" :index="index">
          <div class="group">
            <FormKit type="text" name="platform" label="Platform" placeholder="GitHub" />
            <FormKit type="url" name="url" label="Https://github.com/" />
            <button type="button" @click="() => node.input(value!.filter((_, i) => i !== index))">
              - Remove
            </button>
          </div>
        </FormKit>
        <button type="button" @click="() => node.input(value!.concat({}))">+ Add another</button>
      </FormKit>
    </FormKit>
  </section>
  <RouterLink to="/">go back</RouterLink>
  <RouterLink to="/" target="_blank">preview</RouterLink>
  <button @click="logout">Logout</button>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const user = useUserStore()
const router = useRouter()

const profile_in_submission = ref(false)
const profile_display = ref(false)
const profile_display_message = ref('submitting data')

function updateUserInfo() {
  alert('ra')
}

function logout() {
  user.logout()
  router.push('/')
}
</script>

<style scoped></style>
