import { signUp, confirmSignUp, signOut, signIn, type SignInInput } from 'aws-amplify/auth'

import { type EmailAndPassword } from '@/common/types'
async function signUpWithAmplify(values: EmailAndPassword) {
  const result = await signUp({
    username: values.email,
    password: values.password
  })
  return result
}

async function confirmSignUpWithAmplify(username: string, confirmationCode: string) {
  const result = await confirmSignUp({
    username: username,
    confirmationCode: confirmationCode
  })
  return result
}

async function logoutWithAmplify() {
  await signOut()
}

async function signInWithAmplify(input: SignInInput) {
  const result = await signIn(input)
  console.log(result)
}

export { signUpWithAmplify, confirmSignUpWithAmplify, logoutWithAmplify, signInWithAmplify }
