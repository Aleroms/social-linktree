<template>
  <section class="login">
    <FormKit type="form" @submit="loginUser" class="login-container">
      <h1>Login</h1>
      <p v-if="login_alert_display">{{ login_alert_message }}</p>
      <FormKit
        type="email"
        name="username"
        validation="required"
        label="Name"
        placeholder="username"
      />
      <FormKit
        type="password"
        name="password"
        validation="required"
        label="Password"
        placeholder="password"
        autocomplete="on"
      />
    </FormKit>
    <RouterLink to="/"> go back</RouterLink>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type SignInInput } from 'aws-amplify/auth'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

//login display variables & methods
const login_alert_display = ref(false)
const login_alert_message = ref('Please wait, you are being logged in...')
const login_in_submission = ref(false)

async function loginUser(values: SignInInput) {
  login_alert_display.value = true
  login_in_submission.value = true

  try {
    await userStore.login(values)
  } catch (error: any) {
    if (error instanceof Error) {
      login_alert_message.value = error.message
    }
    return
  }

  login_alert_message.value = 'Success'
  router.push('/profile')
}
</script>

<style scoped>
.login {
  margin: 0 auto;
}

@media (min-width: 400px) {
  .login {
    width: 400px;
  }
}
</style>
