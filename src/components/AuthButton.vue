<template>
  <button class="wrapper" @click="redirect">
    <p>{{ name }}</p>
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function redirect() {
  router.push(props.link)
}
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  target: {
    type: String,
    required: false
  }
})
</script>

<style scoped>
.wrapper {
  background-color: var(--color-background-mute);
  font-size: 18px;
  border: none;
  color: var(--color-text);

  padding: 0.625rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: 0.4s;
}

@media (hover: hover) {
  .wrapper:hover {
    background-color: var(--color-heading);
    color: var(--color-background);
  }
}
</style>
