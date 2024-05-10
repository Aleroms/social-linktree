<template>
  <div class="button-wrapper">
    <p @click="redirectToLink(details.link)">{{ details.platform }}</p>
  </div>
</template>

<script setup lang="ts">
function redirectToLink(link: string) {
  //todo: redirect to actual link
  alert(link)
}
defineProps({
  details: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.button-wrapper {
  margin: 1rem;
  padding: 0.625rem 0;
  border-radius: var(--border-radius);
  background-color: var(--color-background-mute);
  cursor: pointer;
  transition: 0.4s;
}
p {
  font-weight: 600;
}

@media (hover: hover) {
  .button-wrapper:hover {
    background-color: var(--color-heading);
    color: var(--color-background);
  }
}
</style>
