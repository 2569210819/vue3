/*
 * @Descripttion:
 * @version:
 * @Author: wanggang
 * @Date: 2024-04-01 14:16:43
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-02 18:14:10
 */
import { createRouter, createWebHistory } from 'vue-router'
import ref from '../views/data/ref_reactive.vue'
import computed from '../views/data/computed.vue'
import watch from '../views/watch/watch.vue'
import hooks from '../views/hooks/hooks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ref',
      component: ref,
      meta: { title: '响应式数据ref_reactive' }
    },
    {
      path: '/computed',
      name: 'computed',
      component: computed,
      meta: { title: '响应式数据_computed' }
    },
    {
      path: '/watch',
      name: 'watch',
      component: watch,
      meta: { title: '数据监听_watch' }
    },
    {
      path: '/hooks',
      name: 'hooks',
      component: hooks,
      meta: { title: 'setup生命周期' }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
