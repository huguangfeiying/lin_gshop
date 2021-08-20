// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'
import loading from './common/imgs/loading.gif'
import './fiters'

Vue.config.productionTip = false

// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>

Vue.use(VueLazyload, {
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用上vue-router
  store // 使用vuex
})
