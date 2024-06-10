<template>
  <section class="signup">
    <h1>Signup</h1>
    <div v-if="confirm_signup === 'INIT'">
      <FormKit type="form" @submit="signUpUser">
        <p v-if="signup_alert_display">{{ signup_alert_message }}</p>
        <FormKit
          type="email"
          name="email"
          id="email"
          validation="required|length:8"
          validation-visibility="live"
          label="Email"
          placeholder="email@example.com"
        />
        <FormKit
          type="password"
          name="password"
          id="password"
          validation="required|length:8|contains_lowercase|contains_uppercase|contains_symbol|contains_numeric"
          validation-visibility="live"
          label="Password"
          placeholder="password"
          autocomplete="on"
        />
        <FormKit
          type="password"
          name="password_confirm"
          id="confirmpassword"
          validation="required|confirm"
          validation-label="Confirmation"
          label="Confirm Password"
          placeholder="password"
          autocomplete="on"
        />
      </FormKit>
      <RouterLink to="/">go back</RouterLink>
    </div>
    <div v-else-if="confirm_signup === 'CONFIRM_SIGN_UP'">
      <FormKit type="form" @submit="confirmUser">
        <h2>We Emailed You</h2>
        <p v-if="signup_alert_display">
          <strong>{{ signup_alert_message }}</strong>
        </p>
        <p>
          Your code is on the way. To log in, enter the code we emailed to
          {{ userStore.userEmail }}. This may take a minute to arrive.
        </p>
        <FormKit
          type="text"
          name="confirmationNumber"
          label="Confirmation Code"
          placeholder="Enter your code"
          validation="required|number"
          validation-visibility="live"
        />
      </FormKit>
      <RouterLink to="/" v-if="confirm_signup_fail">go back</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { type EmailAndPassword } from '@/common/types'

const userStore = useUserStore()
const router = useRouter()

const signup_alert_display = ref(false)
const signup_alert_message = ref('Registering account...')
const confirm_signup: Ref<string | unknown> = ref('INIT')
const confirm_signup_fail = ref(false)

async function signUpUser(values: EmailAndPassword) {
  signup_alert_display.value = true

  try {
    confirm_signup.value = await userStore.register(values)
  } catch (error) {
    signup_alert_message.value = "Error Occurred."
    return
  }

  signup_alert_display.value = false
}

async function confirmUser({ confirmationNumber }: { confirmationNumber: string }) {
  signup_alert_display.value = true
  confirm_signup_fail.value = false
  signup_alert_message.value = 'Confirming...'
  try {
    confirm_signup.value = await userStore.confirmSignup(confirmationNumber)
  } catch (error) {
    console.log(error)
    signup_alert_message.value = 'An Error Occurred'
    confirm_signup_fail.value = true
    return
  }
  router.push('/createUser')
}
</script>

<style scoped>
.signup {
  margin: 0 auto;
  max-width: 400px;
}

h1 {
  margin-bottom: 1rem;
}

@media (min-width: 400px) {
  .signup {
    width: 400px;
  }
}
</style>
