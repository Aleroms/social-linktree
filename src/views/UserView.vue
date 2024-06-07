<template>
  <div></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { GetUserFromTable } from '@/plugins/Amplify'
const route = useRoute()
onMounted(async () => {
  try {
    if (typeof route.params.user_id === 'string') {
      const response = await GetUserFromTable(route.params.user_id)
      console.log(response)
    } else {
      console.log('string[]')
    }
  } catch (error) {
    console.log(error)
  }
})
</script>

<style scoped></style>
