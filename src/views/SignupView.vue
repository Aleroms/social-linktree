<template>
  <section class="login">
    <!-- temporary until add formkit -->
    <form @submit="signUpUser" class="login-container">
      <h1>Signup</h1>
      <p>username</p>
      <p>password</p>
      <p>or</p>
      <p>sign up with github</p>
      <p>sign up with google</p>
    </form>
    <RouterLink to="/" class="goBackLink"> go back</RouterLink>
  </section>
</template>

<script setup lang="ts">
function signUpUser(values) {
  alert(values)
}
</script>

<style scoped>
.login {
  margin: 0 auto;
  max-width: 400px;
}
.goBackLink {
  margin: 0;
  padding: 0;
}
.login-container {
  padding: 1.625rem 1rem 1rem;
  background-color: var(--color-background-soft);
  text-align: center;
  border-radius: var(--border-radius);
}
h1 {
  margin-bottom: 1rem;
}

@media (min-width: 400px) {
  .login {
    width: 400px;
  }
}
</style>
