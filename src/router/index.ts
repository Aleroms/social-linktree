import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/share',
      name: 'shareableLink',
      component: () => import('@/views/ShareView.vue')
      //find out a way to download user data that is passed
      //as a parameter
    },
    {
      path: '/profile',
      name: 'profile',
      beforeEnter: (to, from) => {
        // Todo: need to download user data when I am provided user credentials
        const user = useUserStore()
        if (!user.userLoggedIn) {
          router.push('/')
        }
      },
      component: () => import('@/views/ProfileView.vue')
    },
    {
      path: '/policy',
      name: 'policy',
      component: () => import('@/views/PolicyView.vue')
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: (to, from) => {
        const user = useUserStore()
        if (user.userLoggedIn) {
          router.push('/profile')
        }
      },
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignupView.vue')
    },
    {
      path: '/deleteAccount',
      name: 'deleteAccount',
      component: () => import('@/views/DeleteAccountView.vue'),
      beforeEnter: (to, from) => {
        // Todo: need to download user data when I am provided user credentials
        const user = useUserStore()
        if (!user.userLoggedIn) {
          router.push('/')
        }
      }
    },

    {
      path: '/user/:user_id',
      name: 'userProfile',
      component: () => import('@/views/UserView.vue'),
      props: true
    },
    {
      path: '/createUser',
      name: 'createUser',
      component: () => import('@/views/CreateUserView.vue'),
      beforeEnter: (to, from) => {
        // Todo: need to download user data when I am provided user credentials
        const user = useUserStore()
        if (!user.userLoggedIn) {
          router.push('/')
        }
      }
    }
  ]
})

export default router
