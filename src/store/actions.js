import { ADD_COUNT,ADD_TO_CART } from "./mutations-types"
import Vue from 'vue'

export default  {
    addCart(context, payload){
      // 查找有无相同id
      return new Promise ((resolve, reject) => {
        let oldProduct = context.state.cartList.find(item => {
        return item.iid === payload.iid
      });
      // 判断是否存在oldProduct
      if(oldProduct){
        // oldProduct.count += 1;
        context.commit(ADD_COUNT, oldProduct)
        resolve('当前商品数量+1')
      }else{
        // 通过Vue的set方法把count添加进响应式系统中
        Vue.set(payload,'count', 1);
        // state.cartList.push(payload);
        context.commit(ADD_TO_CART, payload)
        resolve('添加了一个新商品')
      }
    })
  }
}