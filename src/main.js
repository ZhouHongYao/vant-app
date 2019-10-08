import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import './permission' // permission control
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/styles/base.css' // global css

Vue.use(Vant)
import { Lazyload } from 'vant'

Vue.use(Lazyload, {
  lazyComponent: true
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

