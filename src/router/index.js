import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/index'

/* Router Modules */
import newsRouter from './modules/news' // 资讯

export const constantRouterMap = [{
  path: '', // 匹配路径
  component: Layout, // 映射组件路径
  redirect: 'dashboard', // 重定向
  children: [{
    path: 'dashboard',
    component: () => import('@/views/dashboard/index'),
    name: 'dashboard',
    meta: {
      title: '面板'
    }
  }, {
    path: 'assort',
    name: 'assort',
    component: () => import('@/views/assort/index'),
    meta: { title: '分类' }
  }, newsRouter, {
    path: 'user',
    name: 'user',
    component: () => import('@/views/user/index'),
    meta: { title: '会员中心' }
  }]
}, {
  path: '/404',
  name: '404',
  component: () => import('@/views/errorPage/404')
}, {
  path: '/403',
  name: '403',
  component: () => import('@/views/errorPage/403')
}, {
  path: '/500',
  name: '500',
  component: () => import('@/views/errorPage/500')
}, {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/index'),
  meta: {
    title: '登录'
  }
}, {
  path: '*', // 匹配所有错误路径
  redirect: '/404'
}]

export default new Router({
  mode: 'history', // require service support
  routes: constantRouterMap
})
