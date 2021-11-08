<!--  -->
<template>
  <div id="detail">
    <detail-nav @titleClick="titleClick" ref="detailNav" />
    <scroll
      class="content"
      ref="scroll"
      @scroll="changeNavStyle"
      :probeType="3"
    >
      <detail-swiper :topImgs="topImgs" />
      <detail-base :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="goodsImgLoad" />
      <detail-param-info :paramInfo="paramInfo" ref="param" />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <goods-list :goods="goodsRecommend" ref="recommend" />
    </scroll>
  </div>
</template>

<script>
import DetailSwiper from "./childDetail/DetailSwiper.vue";
import DetailNav from "./childDetail/DetailNav.vue";
import DetailBase from "./childDetail/DetailBase.vue";
import DetailShopInfo from "./childDetail/DetailShopInfo.vue";
import DetailGoodsInfo from "./childDetail/DetailGoodsInfo.vue";
import DetailParamInfo from "./childDetail/DetailParamInfo.vue";
import DetailCommentInfo from "./childDetail/DetailCommentInfo.vue";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
import { debounce } from "common/utils";

import {
  getDetail,
  getGoodsRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "network/detail";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImgs: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      goodsRecommend: [],
      refreshListener: null,
      themeTopYs: [0, null, null, null],
      refresh: null,
      getPosition: null,
    };
  },
  // computed: {
  //   getPosition(){
  //     this.$refs.scroll.
  //   }
  // },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBase,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
  },
  created() {
    this.iid = this.$route.params.iid;
    // 网络请求获取详情页相关数据
    getDetail(this.iid).then((res) => {
      this.topImgs = res.result.itemInfo.topImages;
      const data = res.result;
      // 获取商品数据
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 获取商家数据
      this.shop = new Shop(data.shopInfo);
      // 获取商品详细信息
      this.detailInfo = data.detailInfo;
      // 获取店铺商品信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 获取用户评论
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      // 方法1：通过nextTick函数监听渲染情况，一旦渲染完成回调nextTick函数获取offsetTop
      //  --- $el.offsetTop值不对，图片没渲染
      // this.$nextTick(() => {
      //   this.themeTopYs[1] = this.$refs.param.$el.offsetTop - 44;
      //   this.themeTopYs[2] = this.$refs.comment.$el.offsetTop - 44;
      //   this.themeTopYs[3] = this.$refs.recommend.$el.offsetTop - 44;
      //   console.log(this.themeTopYs);
      // });
    }),
      // 网络请求获取商品推荐信息
      getGoodsRecommend().then((res) => {
        this.goodsRecommend = res.data.list;
      });
  },
  mounted() {
    // 事件总线接收传递的信息，进行防抖刷新
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.refreshListener = () => {
      refresh();
    };
    this.$bus.$on("imgLoadFinish", this.refreshListener);
    // 防抖刷新
    this.refresh = debounce(this.$refs.scroll.refresh, 100);
    // 防抖获取新位置
    this.getPosition = debounce(() => {
      this.themeTopYs[1] = this.$refs.param.$el.offsetTop - 44;
      this.themeTopYs[2] = this.$refs.comment.$el.offsetTop - 44;
      this.themeTopYs[3] = this.$refs.recommend.$el.offsetTop - 44;
    }, 100);
  },
  // 方法2：刷新得到$el的offsetTop --- $el.offsetTop值不对，图片没渲染
  // updated() {
  //   this.$refs.scroll.refresh()
  //   this.themeTopYs[1] = this.$refs.param.$el.offsetTop - 44;
  //   this.themeTopYs[2] = this.$refs.comment.$el.offsetTop - 44;
  //   this.themeTopYs[3] = this.$refs.recommend.$el.offsetTop - 44;
  //   console.log(this.themeTopYs);
  // },
  destroyed() {
    this.$bus.$off("imgLoadFinish", this.refreshListener);
  },
  methods: {
    // 防抖函数
    goodsImgLoad() {
      // 防抖刷新
      this.refresh();
      // 防抖获取导航栏传送位置
      this.getPosition();
    },
    // 点击标题导航跳转对应位置
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 1000);
    },
    // 根据获取的y值改变导航对应标题部分
    // 方法二：
    changeNavStyle(position) {
      const Y = -position.y;
      for (let i = 0; i < 4; i++) {
        if (
          this.$refs.detailNav.currentIndex !== i &&
          ((i < 3 && this.themeTopYs[i] <= Y && Y < this.themeTopYs[i + 1]) ||
            (i === 3 && this.themeTopYs[i] <= Y))
        ) {
          this.$refs.detailNav.currentIndex = i;
        }
      }
      // 方法一：
      // if(0 <= Y && Y < this.themeTopYs[1]){
      //   this.$refs.detailNav.currentIndex = 0;
      // }else if (this.themeTopYs[1] <= Y && Y < this.themeTopYs[2]){
      //   this.$refs.detailNav.currentIndex = 1;
      // }else if (this.themeTopYs[2] <= Y && Y < this.themeTopYs[3]){
      //   this.$refs.detailNav.currentIndex = 2;
      // }else {
      //   this.$refs.detailNav.currentIndex = 3;
      // }
    },
  },
};
</script>

<style  scoped>
#detail {
  position: relative;
  z-index: 10;
  height: 100vh;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
