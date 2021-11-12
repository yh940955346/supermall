<!--  -->
<template>
  <div class="cart-list-item">
    <check-box class="check-box" :isCheck="product.check" @click.native="changeCheck"></check-box>
    <div class="product-img"><img :src="product.img" alt="商品图片"></div>
    <div class="goods-info">
      <div class="title">{{product.title}}</div>
      <div class="desc">商品描述：{{product.desc}}</div>
      <div class="price">
        <div class="real-price left">￥{{product.price}}</div>
        <div class="count right">X{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from './CheckBox.vue'

export default {
  data () {
    return {
    }
  },
  props: {
    product: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  components: {
    CheckBox
  },
  methods: {
    changeCheck(){
      this.product.check = !this.product.check
    }
  },
}
</script>

<style  scoped>
.cart-list-item {
  display: flex;
  width: 100%;
  height: 120px;
  margin: 10 0px;
  border-bottom: 1px solid rgb(226, 214, 214);
}
.check-box {
  width: 20px;
}
.product-img {
  height: 100%;
  vertical-align: middle;
  line-height: 120px;
}
.product-img img {
  width: 80px;
  height: 100px;
  margin-top: 9px;
  margin-right: 10px;
  border-radius: 5px;
}
.goods-info {
  width: 200px;
}
.goods-info .title, .goods-info .desc{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 10px 0;
}
.goods-info .desc {
  font-size: 12px;
  opacity: 0.9;
}
.goods-info .price {
  padding: 20px 0;
}

</style>
