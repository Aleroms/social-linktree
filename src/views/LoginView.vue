<template>
  <section class="login">
    <FormKit type="form" @submit="loginUser" class="login-container">
      <h1>Login</h1>
      <p v-if="login_alert_display">{{ login_alert_message }}</p>
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
        autocomplete="on"
      />
    </FormKit>
    <RouterLink to="/" class="goBackLink"> go back</RouterLink>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type LoginValues } from '@/common/types'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

//login display variables & methods
const login_alert_display = ref(false)
const login_alert_message = ref('Please wait, you are being logged in...')
const login_in_submission = ref(false)

function startLogin() {
  login_alert_display.value = true
  login_in_submission.value = true
}

function loginSuccess() {
  login_alert_message.value = 'Success'
  router.push('/profile')
}
function loginUser(values: LoginValues) {
  startLogin()

  try {
    userStore.login(values)
  } catch (error) {
    console.log(error)
  }

  loginSuccess()
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
