<template>
  <div class="sharable-link-container">
    <img width="70" :src="data.imageUrl" :alt="data.name" v-if="data.imageUrl" />
    <h1>{{ data.name }}</h1>
    <h2>{{ data.location }}</h2>
    <p>"{{ data.quote }}"</p>
    <LinksList :linktree="data.linktree" v-if="data.linktree.length > 0" />
  </div>
</template>

<script setup lang="ts">
import LinksList from '@/components/LinksList.vue'

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.sharable-link-container {
  max-width: 400px;
  margin-bottom: 1rem;
  padding: 1.625rem 1rem 1rem;
  background-color: var(--color-background-soft);
  text-align: center;
  border-radius: var(--border-radius);
}
img {
  border-radius: 50px;
}
h2 {
  font-size: 14px;
  color: var(--color-heading);
}
p {
  margin-top: 1rem;
  opacity: 0.7;
}
@media (min-width: 400px) {
  .sharable-link-container {
    width: 400px;
  }
}
</style>
