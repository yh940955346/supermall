import Vue from 'vue'
import Toast from './Toast.vue'
const obj ={}

obj.install = function(){
  // 创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 创建Vue实例
  const toast = new toastConstructor()
  // 挂载到到任意元素中
  toast.$mount(document.createElement('div'))
  // 渲染到页面中
  document.body.appendChild(toast.$el)
  
  Vue.prototype.$toast = toast
}

export default obj