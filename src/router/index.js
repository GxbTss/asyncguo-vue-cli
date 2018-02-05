import Vue from 'vue'
import Router from 'vue-router'
import Config from './config'

Vue.use(Router)

const Manage = () => import('@/components/Manage')

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'manage',
      component: Manage,
      meta: {
        title: '基于vue的后台管理系统'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

new Config(router).render()

export default router
