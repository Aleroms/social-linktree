<template>
  <div class="link-list-container">
    <LinkButton v-for="link in linktree" :key="link.platform" :details="link"/>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import LinkButton from '@/components/LinkButton.vue'

defineProps({
  linktree: {
    type: Array,
    required: true
  }
})
</script>

<style scoped></style>
