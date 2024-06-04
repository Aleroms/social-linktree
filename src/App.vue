<script setup lang="ts">
import { RouterView } from 'vue-router'

// // AWS Amplify configuration
import { Amplify } from 'aws-amplify'
// import outputs from '../amplify_outputs.json'
import outputs from './amplifyconfiguration.json'
Amplify.configure(outputs)
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
