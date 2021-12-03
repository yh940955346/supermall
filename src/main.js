import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'

import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'
// 安装使用toast插件
Vue.use(toast)

// 使用图片懒加载
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/neko.jpg')
})

Vue.config.productionTip = false

// 解决移动端300ms延迟
FastClick.attach(document.body)

// 全局事务总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
