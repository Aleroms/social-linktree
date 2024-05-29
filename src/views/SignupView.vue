<template>
  <section class="login">
    <h1>Signup</h1>
    <h2>{{ confirm_signup }} |</h2>
    <FormKit
      type="form"
      @submit="signUpUser"
      class="login-container"
      v-if="confirm_signup === 'INIT'"
    >
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

    <div v-else-if="confirm_signup === 'CONFIRM_SIGN_UP'">confirm signup</div>
    <FormKit type="form" @submit="confirmUser" class="login-container">
      <h2>We Emailed You</h2>
      <p>
        Your code is on the way. To log in, enter the code we emailed to {{ userStore.userEmail }}.
        This may take a minute to arrive.
      </p>
      <FormKit
        type="number"
        name="confirmationNumber"
        label="Confirmation Code"
        placeholder="Enter your code"
        number="integer"
        validation="required"
      />
    </FormKit>
    <RouterLink to="/"> go back</RouterLink>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { type EmailAndPassword, type ConfirmationCode } from '@/common/types'

const userStore = useUserStore()
const router = useRouter()

const signup_alert_display = ref(false)
const signup_alert_message = ref('Registering account...')
const signup_in_submission = ref(false)
const confirm_signup: Ref<string | unknown> = ref('INIT')

async function signUpUser(values: EmailAndPassword) {
  signup_alert_display.value = true
  signup_in_submission.value = true

  try {
    confirm_signup.value = await userStore.register(values)
  } catch (error) {
    console.log(error)
    signup_alert_message.value = 'An Error Occurred'
  }
}

function confirmUser(values: ConfirmationCode) {
  console.log(values.confirmationNumber)
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
