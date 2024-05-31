<template>
  <div>
    <h1>https://nhymbk111j.execute-api.us-west-1.amazonaws.com/dev</h1>
    <p>{{ res }} </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'
import { get } from 'aws-amplify/api'

const testId = 421

const res = ref('')
onMounted(async () => {
  try {
    const restop = get({
      apiName: 'socialinktreeApi',
      path: '/user/' + testId
    })
    const { body } = await restop.response
    const str = await body.text()
    res.value = str
  } catch (e: any) {
    console.log(e)
  }
})
</script>

<style scoped></style>
