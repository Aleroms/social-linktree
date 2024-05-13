<template>
  <div class="link-list-container">
    <LinkButton v-for="link in props.linktree" :key="link.platform" :details="link" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import LinkButton from '@/components/LinkButton.vue'

interface Props {
  linktree: [
    {
      platform: string
      link: string
    }
  ]
}

const props = defineProps<Props>()
</script>

<style scoped></style>
