import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

export const constantRouterMap = [{
  path: '',
  component: Layout,
  redirect: 'dashboard',
  children: [{
    path: 'dashboard',
    component: () =>
            import('@/views/dashboard/index'),
    name: 'dashboard',
    meta: {
      title: '面板'
    }
  }, {
    path: 'assort',
    name: 'assort',
    component: () => import('@/views/assort/index'),
    meta: { title: '分类' }
  }]
}]

const AppPath = process.env.APP_PATH
export default new Router({
  mode: 'history', // require service support
  base: AppPath,
  // 当开启history模式时，此项有效，实现返回上一个页面时默认将滚动条定位到原位置
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: constantRouterMap
})
