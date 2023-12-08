import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Login.vue')
  },
  {
    // path: '/home/:username', // 写法一
    // path: '/home', // 写法二
    // path: '/home/:username', // 写法三
    // name: 'home', // 写法三，加一个name
    path: '/home', // 写法四
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
