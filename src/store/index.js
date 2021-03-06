import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 安装插件

Vue.use(Vuex)

// 创建store对象

const state = {
  cartList: []
}

const store = new Vuex.Store({
  state,
  // mutation的存在目的就是改变state
  // 每个方法尽量完成的事情单一简单
  mutations,
  actions,
  getters,
})

// 挂载在vue实例上

export default store