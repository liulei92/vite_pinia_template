/*
 * @Description: router.config
 * @Date: 2022-03-24 15:45:08
 * @Author: LeiLiu
 */
import { RouterView } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
// import BlankLayout from '@/layouts/BlankLayout.vue';

const BlankLayout = () => {
  return h(RouterView);
};

export const routes: RouteRecordRaw[] = [
  {
    path: '/app',
    name: 'app',
    component: markRaw(BlankLayout),
    redirect: '/app/home',
    meta: { title: 'xxxx' },
    children: [
      {
        path: '/app/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: {
          title: '首页',
          icon: '',
          auth: ['home'],
        },
      },
      {
        path: '/app/about',
        component: () => import('@/views/about/index.vue'),
        name: 'about',
        meta: {
          title: '关于',
          icon: '',
          auth: ['about'],
        },
      },
    ],
  },
  {
    path: '/',
    name: 'Root',
    redirect: '/app',
    meta: {
      title: 'Root',
    },
  },
  {
    path: '/:pathMatch(.*)', // 未知路由匹配
    redirect: '/app',
  },
];
