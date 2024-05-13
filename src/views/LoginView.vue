<template>
  <section class="login">
    <!-- temporary until add formkit -->
    <FormKit type="form" @submit="loginUser" class="login-container">
      <h1>Login</h1>
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
function loginUser() {
  // alert(values)
}
</script>

<style scoped>
.login {
  margin: 0 auto;
}
.goBackLink {
  margin: 0;
  padding: 0;
}

@media (min-width: 400px) {
  .login {
    width: 400px;
  }
}
</style>
