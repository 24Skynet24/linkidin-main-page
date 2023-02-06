import { createRouter, createWebHistory } from 'vue-router'

const indexPage = () => import('../views/IndexPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: indexPage
    },
  ]
})

export default router
