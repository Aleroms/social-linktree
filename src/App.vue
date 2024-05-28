<script setup lang="ts">
import { RouterView } from 'vue-router'

// AWS Amplify configuration
import { Authenticator } from '@aws-amplify/ui-vue'
import '@aws-amplify/ui-vue/styles.css'

import { Amplify } from 'aws-amplify'
// import outputs from '../amplify_outputs.json'
import outputs from './amplifyconfiguration.json'
Amplify.configure(outputs)
</script>

<template>
  <main>
    <RouterView />
  </main>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>

<style scoped></style>
