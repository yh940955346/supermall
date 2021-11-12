<!--  -->
<template>
  <div class="cart-calculate">
    <check-box class="check-box" @click.native="checkAll" :isCheck="isCheck2" />
    <div class="total">合计：￥{{totalPrice}}</div>
    <div class="count" @click="countClick">去结算 ({{count}})</div>
  </div>
</template>

<script>
import CheckBox from './CheckBox.vue'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  components: {
    CheckBox
  },
  computed: {
    ...mapGetters([
      'cartList'
    ]),
    totalPrice() {
      return this.cartList.filter(item => {
        return item.check
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    count() {
      return this.cartList.filter(item => item.check).reduce((preValue, item) => preValue + item.count,0)
    },
    isCheck2() {
      // return !(this.$store.state.cartList.filter(item => item.check == false)).length
      if (this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.check)
    },
  },
  methods: {
    checkAll(){
      if(this.isCheck2){
        this.cartList.forEach(item => item.check = false)
      }else {
        this.cartList.forEach(item => item.check = true)
      }
    },
    countClick(){
      if(this.cartList.filter(item => item.check).length == 0){
        this.$toast.show('请选择商品')
      }
    }
  },
}
</script>

<style  scoped>
.cart-calculate {
  width: 100%;
  height: 44px;
  background-color: rgb(200, 192, 224);
  position: fixed;
  bottom: 49px;
  display: flex;
}
.check-box {
  margin-top: 12px;
}
.total {
  flex: 1;
  margin-left: 20px;
  line-height: 44px;
}
.count {
  text-align: center;
  width: 100px;
  line-height: 44px;
  background-color: khaki;
}
</style>
