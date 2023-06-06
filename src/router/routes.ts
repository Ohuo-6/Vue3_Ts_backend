// 对外暴露配置路由

export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    // 登录成功后
    path: '/',
    name: 'layout',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
  {
    // 不符合的路径
    path: '/:pathMatch(.*)*',
    name: 'Any',
    redirect: '/404',
  },
]
