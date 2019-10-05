import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  const nextRoute = [
    'userCenter'
  ]
  if (nextRoute.indexOf(to.name) >= 0) {
    if (!store.getters.token) { // 未登录
      next({
        path: 'login'
      })
      NProgress.done()
    }
  }
  next()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
