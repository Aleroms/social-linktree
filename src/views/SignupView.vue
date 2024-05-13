<template>
  <section class="login">
    <!-- temporary until add formkit -->
    <h1>Signup</h1>
    <FormKit type="form" @submit="signUpUser" class="login-container">
      <FormKit
        type="text"
        name="username"
        id="name"
        validation="required"
        label="Name"
        placeholder="username"
      />
      <FormKit
        type="password"
        name="password"
        id="password"
        validation="required"
        label="Password"
        placeholder="password"
      />
    </FormKit>
    <RouterLink to="/" class="goBackLink"> go back</RouterLink>
  </section>
</template>

<script setup lang="ts">
function signUpUser(values: Object) {
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
