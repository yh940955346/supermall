<!--  -->
<template>
  <div id="detail">
    <detail-nav />
    <scroll class="content">
    <detail-swiper :topImgs="topImgs" />
    <detail-base :goods="goods" />
    <detail-shop-info :shop="shop" />
    </scroll>
  </div>
</template>

<script>
import DetailSwiper from "./childDetail/DetailSwiper.vue"
import DetailNav from "./childDetail/DetailNav.vue"
import DetailBase from "./childDetail/DetailBase.vue"
import DetailShopInfo from "./childDetail/DetailShopInfo.vue"

import Scroll from "components/common/scroll/Scroll"

import {getDetail, Goods, Shop} from "network/detail"

export default {
  name: 'detail',
  data () {
    return {
      iid: null,
      topImgs: [],
      goods: {},
      shop: {}
    }
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBase,
    DetailShopInfo,
    Scroll
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      this.topImgs = res.result.itemInfo.topImages;
      const data = res.result;
      // 获取商品数据
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      // 获取商家数据
      this.shop = new Shop(data.shopInfo)
    })
  },
}
</script>

<style  scoped>
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>
