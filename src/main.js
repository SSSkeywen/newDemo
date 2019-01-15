// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import 'babel-polyfill'
Vue.use(MintUI)

Vue.config.productionTip = false

Vue.prototype.$ajax = axios
Vue.prototype.$url = "/loansupermarket-api/usercenter/v1.0.1/web/"

// 头条
Vue.prototype.$urlTop = "/loansupermarket-api/topnews/v1.0.1/web/"


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
