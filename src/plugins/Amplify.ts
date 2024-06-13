import {
  signUp,
  confirmSignUp,
  signOut,
  signIn,
  type SignInInput,
  deleteUser
} from 'aws-amplify/auth'
import { type EmailAndPassword, type Profile, type UploadFile } from '@/common/types'
import { uploadData } from 'aws-amplify/storage'
import { useUserStore } from '@/stores/user'


const lambdaApi = 'https://zvevemcl2i.execute-api.us-west-1.amazonaws.com'
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
  fetch(lambdaApi + '/user' + `/${uid}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
async function DoesUsernameExist(user_id: string): Promise<any> {
  console.log(user_id)
  const response = await fetch(lambdaApi + '/doesExist' + `/${user_id}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    // If response is not ok, throw an error with the response text
    const errorText = await response.text()
    throw new Error(errorText)
  }
  console.log(response)
  return response.json()
}
async function GetUserFromTable(user_id: string): Promise<any> {
  const response = await fetch(lambdaApi + '/user' + `/${user_id}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    // If response is not ok, throw an error with the response text
    const errorText = await response.text()
    throw new Error(errorText)
  }
  return response.json()
}
async function deleteUserFromAmplify() {
  await deleteUser()
}

function uploadFileToS3V2(input: File){
  fetch(lambdaApi + '/uploadFile',{
    method: 'POST',
    mode: 'cors',
    body: input,
    headers: {
      'X-S3-File-Name': input.name,
      'Content-Type': input.type
    },
    
  })
}
function InsertUserToTable(values: Profile) {
  fetch(lambdaApi + '/user', {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify({
      user_id: values.user_id,
      email: values.email,
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

async function uploadFileToS3(input: UploadFile) {
  const userStore = useUserStore()
  const {name, file} = input

  try {
    const result = await uploadData({
      path: `${userStore.username}/${name}`,
      data: file
    })
    console.log('Succeeded: ', result)
  } catch (error) {
    console.log('Error: ', error)
  }
}


export {
  signUpWithAmplify,
  confirmSignUpWithAmplify,
  logoutWithAmplify,
  signInWithAmplify,
  InsertUserToTable,
  DeleteUserFromTable,
  deleteUserFromAmplify,
  GetUserFromTable,
  DoesUsernameExist,
  uploadFileToS3
}
