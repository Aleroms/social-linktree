import {
  signUp,
  confirmSignUp,
  signOut,
  signIn,
  type SignInInput,
  deleteUser
} from 'aws-amplify/auth'
import { type EmailAndPassword, type Profile } from '@/common/types'

const dynamoDbApi = 'https://zvevemcl2i.execute-api.us-west-1.amazonaws.com/user'
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

function DeleteUserFromTable(uid: string) {
  fetch(dynamoDbApi + `/${uid}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

async function GetUserFromTable(user_id: string): Promise<any> {
  const response = await fetch(dynamoDbApi + `/${user_id}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    // If response is not ok, throw an error with the response text
    const errorText = await response.text();
    throw new Error(errorText);
  }

  return response.json();
}
async function deleteUserFromAmplify() {
  await deleteUser()
}

function InsertUserToTable(values: Profile) {
  fetch(dynamoDbApi, {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify({
      user_id: values.user_id,
      name: values.name,
      quote: values.quote,
      location: values.location,
      linktree: values.linktree
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (!response.ok) {
      // If response is not ok, throw an error
      return response.text().then((text) => {
        throw new Error(text)
      })
    }
    return response.json()
  })
}

export {
  signUpWithAmplify,
  confirmSignUpWithAmplify,
  logoutWithAmplify,
  signInWithAmplify,
  InsertUserToTable,
  DeleteUserFromTable,
  deleteUserFromAmplify,
  GetUserFromTable
}
