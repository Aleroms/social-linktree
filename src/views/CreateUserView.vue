<template>
  <section class="create-user">
    <FormKit type="form" @submit="usernameHandler">
      <h1>Create a Username</h1>
      <p v-if="display">{{ display_msg }}</p>
      <FormKit
        type="text"
        name="user_id"
        placeholder="username"
        help="how people will find you"
        validation="required"
      />
    </FormKit>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { InsertUserToTable } from '@/plugins/Amplify'
import type { Profile } from '@/common/types'

const userStore = useUserStore()
const router = useRouter()

const display_msg = ref('')
const display = ref(false)
const isUsernameAvailable = ref(false)

async function usernameHandler({ user_id }: { user_id: string }) {
  display_msg.value = 'sending...'
  display.value = true
  try {
    isUsernameAvailable.value = await userStore.doesUserExist(user_id)
    if (!isUsernameAvailable.value) {
      const userEmptyValue: Profile = {
        user_id: user_id,
        email: userStore.userEmail,
        location: '',
        quote: '',
        linktree: [],
        name: ''
      }
      InsertUserToTable(userEmptyValue)
      userStore.username = user_id
      router.push('/profile')
    } else {
      display_msg.value = 'User Already Exists'
    }
  } catch (error) {
    console.log(error)
    display_msg.value = 'Error'
  }
}
</script>

<style scoped>
.create-user {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
