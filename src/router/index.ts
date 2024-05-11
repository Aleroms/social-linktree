import { createRouter, createWebHistory } from 'vue-router'

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
      path: '/policy',
      name: 'policy',
      component: () => import('@/views/PolicyView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignupView.vue')
    }
  ]
})

export default router
