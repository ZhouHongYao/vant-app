import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

router.beforeEach((to, from, next) => {
  console.log(to, from)
  NProgress.start() // start progress bar
  /* has token*/
  if (to.path === '/login') {
    next({
      path: '/'
    })
    NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
