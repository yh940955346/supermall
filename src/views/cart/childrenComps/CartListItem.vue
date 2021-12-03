<!--  -->
<template>
  <div class="cart-list-item" ref="goods" @touchstart="slide">
    <!-- <div class="opacity" @mouseover="over" @mouseleave="this.isShow = false"></div> -->
    <div ref="Delete" class="delete" @click="deleteItem">删除</div>
    <check-box
      class="check-box"
      :isCheck="product.check"
      @click.native="changeCheck"
    ></check-box>
    <div class="product-img"><img :src="product.img" alt="商品图片" /></div>
    <div class="goods-info">
      <div class="title">{{ product.title }}</div>
      <div class="desc">商品描述：{{ product.desc }}</div>
      <div class="price">
        <div class="real-price left">￥{{ product.price }}</div>
        <div class="count right">
          <span @click="countAdd(product)">+</span>{{ product.count
          }}<span @click="countSub(product)">-</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from "./CheckBox.vue";
import { mapGetters } from "vuex";
import { throttle } from "common/utils";
export default {
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    CheckBox,
  },
  methods: {
    changeCheck() {
      this.product.check = !this.product.check;
    },
    slide(e) {
      let X, x;
      x = e.touches[0].pageX;
      let key = false;
      this.$refs.goods.addEventListener("touchmove", function (event) {
        X = event.touches[0].pageX;
        if (x - X > 20 && !key) {
          key = true;
          appear();
        } else if (X - x > 20 && key) {
          key = false;
          disappear();
        }
      });
      // 获取dom
      let deleteTarget = this.$refs.Delete;
      // 样式出现
      let show = function () {
        deleteTarget.style.visibility = "visible";
        deleteTarget.style.opacity = 1;
        deleteTarget.style.transition = "all 0.5s";
        // console.log(2);
      };
      const appear = throttle(show, 1000);
      // 样式消失
      let unShow = function () {
        deleteTarget.style.opacity = 0;
        deleteTarget.style.transition = "all 0.5s";
        deleteTarget.style.visibility = "hidden";
        // console.log('x: ' + x,'X: ' +  X);
      };
      const disappear = throttle(unShow, 1000);
    },
    deleteItem() {
      // const target = this.cartList.find(item => item.iid === this.product.iid);
      // let position = this.cartList.indexOf(target);
      // this.cartList.splice(position, 1)
      this.cartList.forEach((item, index, arr) => {
        if (item.iid === this.product.iid) {
          arr.splice(index, 1);
        }
      });
    },
    countAdd(product) {
      product.count++;
    },
    countSub(product) {
      if (product.count == 0) {
        return;
      }
      product.count--;
    },
  },
};
</script>

<style  scoped>
.cart-list-item {
  display: flex;
  width: 100%;
  height: 120px;
  margin: 10 0px;
  border-bottom: 1px solid rgb(226, 214, 214);
  position: relative;
}
.delete {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 100px;
  height: 50px;
  background-color: rgb(104, 89, 69);
  line-height: 50px;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  opacity: 0;
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
.goods-info .title,
.goods-info .desc {
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
.goods-info .price span {
  text-align: center;
  display: inline-block;
  width: 25px;
  height: 20px;
  line-height: 20px;
  margin: 0 8px;
  border-radius: 5px;
  background-color: rgb(188, 217, 218);
}
.goods-info .price span:hover {
  background-color: cornsilk;
}
</style>
