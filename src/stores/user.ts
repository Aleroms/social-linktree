import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type LoginValues } from '@/common/types'

export const useUserStore = defineStore('userStore', () => {
  const userLoggedIn = ref(false)

  function login(values: LoginValues) {
    console.log(values.username, values.password)
    userLoggedIn.value = true
  }
  function logout() {
    userLoggedIn.value = false
  }

  return { login, logout, userLoggedIn }
})
