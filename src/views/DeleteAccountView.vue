<template>
  <section class="delete-wrapper">
    <h1>Are you sure you want to delete your account?</h1>
    <p>
      Data attached to {{ userStore.userEmail }} ({{ userStore.username }}) will be perminantly
      deleted.
    </p>
    <p v-if="delete_display">{{ delete_msg }}</p>
    <div class="btns">
      <button @click="deleteAccount">Yes</button>
      <button @click="router.back()">No</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { DeleteUserFromTable, deleteUserFromAmplify } from '@/plugins/Amplify'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
const router = useRouter()
const userStore = useUserStore()
const delete_display = ref(false)
const delete_msg = ref('deleting...')
async function deleteAccount() {
  delete_display.value = true
  if (userStore.username !== null || userStore.username !== '') {
    try {
      DeleteUserFromTable(userStore.username)
      await deleteUserFromAmplify()
      userStore.deleteUser()
      delete_msg.value = 'deleted!'
      router.push('/')
    } catch (error) {
      console.log(error)
      delete_msg.value = 'error occurred. Please sign out and sign back in to try again'
      return
    }
  } else {
    delete_msg.value = 'error occurred.'
  }
  //success
  router.push('/')
}
</script>

<style scoped>
.delete-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
}
.btns {
  display: flex;
  gap: 15px;
}
</style>
