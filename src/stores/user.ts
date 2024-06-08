import { defineStore } from 'pinia'

import { type EmailAndPassword } from '@/common/types'

import { useStorage } from '@vueuse/core'

import { type SignUpOutput, type SignInInput } from 'aws-amplify/auth'
import {
  signUpWithAmplify,
  confirmSignUpWithAmplify,
  logoutWithAmplify,
  signInWithAmplify
} from '@/plugins/Amplify'

export const useUserStore = defineStore('userStore', () => {
  const userLoggedIn = useStorage('userLoggedIn', false)
  const userEmail = useStorage('user-email', '')
  const cognitoUID = useStorage('user-id', '')
  const username = useStorage('user_id', '')

  async function login(values: SignInInput) {
    await signInWithAmplify(values)
    userEmail.value = values.username
    userLoggedIn.value = true
  }
  async function logout() {
    await logoutWithAmplify()
    userLoggedIn.value = false
    userEmail.value = ''
  }
  function profileUpdate(uid: string) {
    username.value = uid
  }
  function deleteUser() {
    userLoggedIn.value = false
    userEmail.value = ''
    cognitoUID.value = ''
    username.value = ''
  }

  async function register(values: EmailAndPassword) {
    userEmail.value = values.email

    const { userId, nextStep }: SignUpOutput = await signUpWithAmplify(values)
    cognitoUID.value = userId
    return nextStep.signUpStep
  }

  async function confirmSignup(confirmationCode: string) {
    const { isSignUpComplete, nextStep }: SignUpOutput = await confirmSignUpWithAmplify(
      userEmail.value,
      confirmationCode
    )

    if (isSignUpComplete) userLoggedIn.value = true
    return nextStep.signUpStep
  }

  return {
    login,
    userEmail,
    logout,
    userLoggedIn,
    register,
    confirmSignup,
    profileUpdate,
    username,
    deleteUser
  }
})
