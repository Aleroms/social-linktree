<template>
  <section class="delete-wrapper">
    <h1>Are you sure you want to delete your account?</h1>
    <div class="btns">
      <button @click="deleteAccount">Yes</button>
      <button @click="router.back()">No</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { DeleteUserFromTable } from '@/plugins/Amplify';
const router = useRouter()
function deleteAccount(){
    alert('account deleted')
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
