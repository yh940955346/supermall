<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      @changeGoodsType="changeGoodsType"
      :titles="['流行', '新款', '精选']"
      v-show="isFixed"
      ref="tabControl1"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
      <home-recommend :recommends="recommends" @recomImgLoad="recomImgLoad" />
      <home-feature @featureImgLoad="featureImgLoad" />
      <tab-control
        @changeGoodsType="changeGoodsType"
        :titles="['流行', '新款', '精选']"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommend from "./childComps/HomeRecommend.vue";
import HomeFeature from "./childComps/HomeFeature.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";

export default {
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      goodsType: "pop",
      isShow: false,
      isFixed: false,
      tabControlTop: 0,
      saveY: 0,
      refreshListener: null
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.goodsType].list;
    },
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.refreshListener = () => {
      refresh();
    }
    // 监听goodsListItem的图片加载完成
    // 利用事务总线接收信息
    this.$bus.$on("imgLoadFinish", this.refreshListener);
  },
  // 纪录离开页面的位置，切回时瞬间回到该位置
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    this.$bus.$off('imgLoadFinish', this.refreshListener)
  },
  methods: {
    // 网络请求相关代码
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // this.keywords = res.data.keywords.list;
        // this.dkeywords = res.data.dkeyword.list;
        this.result = res;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // 调用scroll组件的finishPullUp方法再次请求数据
        this.$refs.scroll.finishPullUp();
        // this.$refs.scroll.refresh()
      });
    },
    changeGoodsType(index) {
      switch (index) {
        case 0:
          this.goodsType = "pop";
          break;
        case 1:
          this.goodsType = "new";
          break;
        case 2:
          this.goodsType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 通过this.$refs拿到子组件的data,再用better-scroll的方法scrollTo返回顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    // 监听滚动距离，控制回到顶部按钮显示消失
    contentScroll(position) {
      this.isShow = -position.y > 1000;
      // 通过v-show决定tabControl是否显示
      this.isFixed = this.tabControlTop < -position.y;
    },
    // 上拉加载发送网络请求得到更多数据
    loadMore() {
      this.getHomeGoods(this.goodsType);
    },
    // 接收到轮播图图片加载完成的信号将真实高度保存
    recomImgLoad() {
      this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
    },
    featureImgLoad() {
      this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
    },
    swiperImgLoad() {
      this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
};
</script>

<style  scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10; */
}
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.tab-control {
  position: sticky;
  top: 44px;
  background-color: rgb(255, 255, 255);
  /* z-index: -1; */
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>
