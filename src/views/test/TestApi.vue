<template>
  <div>
    <h1>https://zvevemcl2i.execute-api.us-west-1.amazonaws.com/user</h1>
    <pre>{{ res }}</pre>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'
import { get } from 'aws-amplify/api'
const res = ref('')
onMounted(async () => {
  const response = await fetch('https://zvevemcl2i.execute-api.us-west-1.amazonaws.com/user/JessicaRandall')
  res.value = await response.json()
  
  // try {
  //   const restop = get({
  //     apiName: 'socialinktreeApi',
  //     path: '/user/'
  //   })
  //   const { body } = await restop.response
  //   const str = await body.text()
  //   res.value = str
  // } catch (e: any) {
  //   console.log(e)
  // }
})
</script>

<style scoped></style>
