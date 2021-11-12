import { ADD_COUNT,ADD_TO_CART } from "./mutations-types"
import Vue from 'vue'

export default  {
    [ADD_COUNT](state, payload){
      payload.count ++  
    },
    [ADD_TO_CART](state, payload){
      Vue.set(payload, 'check', true)
      state.cartList.push(payload)
    },
    checkAll(state) {
      const list = state.cartList.filter(item => item.check == false);
      let length = list.length
      for(let i = 0; i < length; i++){
        list[i].check = true
      }
    }
}