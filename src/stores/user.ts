import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type LoginValues } from '@/common/types'

export const useUserStore = defineStore('userStore', () => {
  const userLoggedIn = ref(false)

  function login(values: LoginValues) {
    //Todo: login user using aws cognito
    alert(values.username + '\n' + values.password)
    userLoggedIn.value = true
  }
  function logout() {
    // Todo: logout user using aws cognito
    alert('logging out')
    userLoggedIn.value = false
  }

  function register(values: LoginValues) {
    // Todo: register user using aws dynamoDB or cognito
    alert(values)
  }

  return { login, logout, userLoggedIn, register }
})
