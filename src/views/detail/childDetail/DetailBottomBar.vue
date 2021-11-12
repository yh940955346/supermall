<!--  -->
<template>
  <div class="bottom-bar">
    <div class="customer-shop">
      <div class="service shop-item">
        <i class="icon service-icon"></i>
        <span>客服</span>
      </div>
      <div class="shop shop-item">
        <i class="icon shop-icon"></i>
        <span>店铺</span>
      </div>
      <div class="collect shop-item">
        <i class="icon collect-icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="customer-buy">
      <div @click="cartClick" class="add-cart buy-item"><span>加入购物车</span></div>
      <div class="buy buy-item"><span>购买</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    cartClick(){
      this.$emit('cartClick')
    }
  },
}
</script>

<style  scoped>
.bottom-bar {
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(255, 255, 255);
  display: flex;
  text-align: center;
}
.customer-shop, .customer-buy {
  flex: 1;
  display: flex;
}
.customer-shop .shop-item {
  flex: 1;
}
.customer-shop span {
  font-size: 12px;
}
.customer-buy .buy-item {
  flex: 1;
  line-height: 49px;
  font-size: 14px;
}
.icon {
  display: block;
  width: 20px;
  height: 20px;
  margin: 3px auto 2px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.service-icon {
  background-position: 0 -47px;
}
.shop-icon {
  background-position: 0 -88px;
}
.collect-icon {
  background-position: 0 2px;
}
.customer-buy .add-cart {
  background-color: rgb(185, 236, 236);
}
.customer-buy .buy {
  background-color: rgb(219, 207, 207);
}
</style>
