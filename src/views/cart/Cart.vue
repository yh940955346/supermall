<!--  -->
<template>
  <div class="cart">
    <!-- 购物车导航 -->
    <!-- <cart-nav-bar /> -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list />
    <!-- 结算栏 -->
    <cart-calculate />
  </div>
</template>

<script>
import CartList from "./childrenComps/CartList"
// import CartNavBar from "./childrenComps/CartNavBar"
import CartCalculate from './childrenComps/CartCalculate'

import NavBar from "components/common/navbar/NavBar"
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  components: {
    NavBar,
    CartList,
    // CartNavBar,
    CartCalculate
  },
  computed: {
    ...mapGetters([
    'cartList',
    'cartListLength'
    ])
  }
}
</script>

<style  scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
}
</style>
