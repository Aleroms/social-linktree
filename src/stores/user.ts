import { defineStore } from 'pinia'

import { type EmailAndPassword } from '@/common/types'

import { useStorage, useSessionStorage } from '@vueuse/core'

import { type SignUpOutput, type SignInInput } from 'aws-amplify/auth'
import {
  signUpWithAmplify,
  confirmSignUpWithAmplify,
  logoutWithAmplify,
  signInWithAmplify,
  DoesUsernameExist
} from '@/plugins/Amplify'

export const useUserStore = defineStore('userStore', () => {
  const userLoggedIn = useSessionStorage('userLoggedIn', false)
  const userEmail = useSessionStorage('user-email', '')
  const cognitoUID = useStorage('user-id', '')
  const username = useStorage('user_id', '')

  async function login(values: SignInInput) {
    await signInWithAmplify(values)
    userEmail.value = values.username
    userLoggedIn.value = true
  }
  function login2(values: SignInInput) {
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
  async function doesUserExist(user_id: string) {
    const res = await DoesUsernameExist(user_id)
    username.value = user_id
    return res
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
    login2,
    userEmail,
    logout,
    userLoggedIn,
    register,
    confirmSignup,
    profileUpdate,
    username,
    deleteUser,
    doesUserExist
  }
})
