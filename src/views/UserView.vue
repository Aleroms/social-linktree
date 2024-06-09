<template>
  <div class="user-wrapper">
    <ShareableLink v-if="isReady" :data="userData" />
    <div v-else>
      <h2>{{ isReady_msg }}</h2>
    </div>
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { GetUserFromTable } from '@/plugins/Amplify'
import ShareableLink from '@/components/ShareableLink.vue'
import { ref } from 'vue'
const userData = ref({})
const isReady = ref(false)
const isReady_msg = ref('loading...')
const route = useRoute()
onMounted(async () => {
  try {
    if (typeof route.params.user_id === 'string') {
      const response = await GetUserFromTable(route.params.user_id)
      // console.log(response)
      userData.value = response
      isReady.value = true
    } else {
      console.log('string[]')
    }
  } catch (error) {
    console.log(error)
    isReady_msg.value = "User Not Found..."
  }
})
</script>

<style scoped>
.user-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
