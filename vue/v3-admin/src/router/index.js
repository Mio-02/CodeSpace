// 后台系统 History html5.pushState 不是用户访问而是公司内部使用的，用的是chrome
// 用户、移动项目没这个问题；PC端、政府、企业就有兼容性问题需要考虑
import { createRouter, createWebHistory } from 'vue-router'
import { usePermissStore } from '../store/permiss';
import Home from '../views/Home.vue' // 直接引入，会直接加载的组件（引入并执行）

// const data = usePermissStore(); // hooks
// console.log(data);

// 路由配置 后台管理系统
// 设置数组
// admin [1, 2, 3]
// user [1]
// uesRoute   meta.permiss 你要访问的页面的权限 includes true
const routes = [
  {
    path: '/',
    redirect: '/dashboard' // 重定向 30X
  },
  {
    path: '/',
    name: 'Home', // useRouter push
    component: Home, // Layout
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '系统首页', // 路由守卫
          permiss: '1' // 权限分级，简单理解为可以看的页面不同
        },
        // 动态挂载组件，只在需要时才会加载的组件
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: '/table',
        name: 'basetable',
        meta: {
          title: '列表',
          permiss: '2'
        },
        // 动态挂载组件，只在需要时才会加载的组件
        component: () => import('../views/Table.vue')
      }
    ]
  },
  {
    path: '/403',
    name: '403',
    meta: {
      title: '没有权限'
    },
    // 动态挂载组件，只在需要时才会加载的组件
    component: () => import('../views/403.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | 后台管理系统`;
  // 登录后的用户角色
  // const role = localStorage.getItem('ms_username');
  const role = 'admin';
  const permiss = usePermissStore();
  // console.log(permiss);
  if (!role && to.path !== '/login') { // 未登录
    next('/login');
  } else if (to.meta.permiss &&! permiss.roleList[role].includes(to.meta.permiss)) { // 权限不足
    next('/403');
  } else {
    next();
  }
})

export default router