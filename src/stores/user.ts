import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type EmailAndPassword } from '@/common/types'
import { type SignUpOutput } from 'aws-amplify/auth'
import { useStorage } from '@vueuse/core'
import { SignUpWithAmplify } from '@/plugins/Amplify'

export const useUserStore = defineStore('userStore', () => {
  const userLoggedIn = useStorage('userLoggedIn', false)
  const userEmail = ref('')
  const cognitoUID = useStorage('user-id', '')

  function login(values: EmailAndPassword) {
    //Todo: login user using aws cognito
    alert(values.email + '\n' + values.password)
    userLoggedIn.value = true
  }
  function logout() {
    // Todo: logout user using aws cognito
    alert('logging out')
    userLoggedIn.value = false
  }

  async function register(values: EmailAndPassword) {
    console.log(values)
    userEmail.value = values.email
    try {
      const { userId, nextStep }: SignUpOutput = await SignUpWithAmplify(values)
      cognitoUID.value = userId
      return nextStep.signUpStep
    } catch (error) {
      console.log(error)
    }
  }

  return { login, userEmail, logout, userLoggedIn, register }
})
