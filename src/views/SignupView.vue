<template>
  <section class="login">
    <h1>Signup</h1>
    <p v-if="signup_alert_display">{{ signup_alert_message }}</p>
    <FormKit type="form" @submit="signUpUser" class="login-container">
      <FormKit
        type="email"
        name="email"
        id="email"
        validation="required,length:8"
        label="Email"
        placeholder="email@example.com"
      />
      <FormKit
        type="password"
        name="password"
        id="password"
        validation="required,length:8,contains_lowercase,contains_uppercase,contains_symbol,contains_numeric"
        validation-visibility="live"
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
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { type LoginValues } from '@/common/types'

const userStore = useUserStore()
const router = useRouter()

const signup_alert_display = ref(false)
const signup_alert_message = ref('Registering account...')
const signup_in_submission = ref(false)

function signUpUser(values: LoginValues) {
  signup_alert_display.value = true
  signup_in_submission.value = true

  try {
    userStore.register(values)
  } catch (error) {
    console.log(error)
    return
  }

  signup_alert_message.value = 'Success'
  router.push('/profile')
}
</script>

<style scoped>
.login {
  margin: 0 auto;
  max-width: 400px;
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
