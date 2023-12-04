import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Newest from '../views/homeChild/newest.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                // 路由重定向，通常用于初次加载页面默认要展示的内容
                path: '/home',
                redirect: '/home/newest'
            },
            {
                path: 'newest', // 二级路由前不接斜杠"/"，要么就加斜杠补全路径"/home/newest"
                component: Newest
            },
            {
                path: 'recomend',
                component: () => import('../views/homeChild/recomend.vue')
            }
        ]
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(), // 路由history模式，hash模式
    routes
})

export default router