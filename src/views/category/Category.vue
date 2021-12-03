<!--  -->
<template>
  <div class="category">
    <nav-bar class="category-nav"><div slot="center">商品分类</div></nav-bar>
    <tab-control
      @changeGoodsType="changeGoodsType"
      :titles="['流行', '新款', '精选']"
      v-show="isFixed"
      ref="tabControl1"
      class="tab-flexible"
    />
    <div class="container">
      <scroll class="wrapper nav-side">
        <category-nav-side @keyChange="keyChange"></category-nav-side>
      </scroll>
      <scroll
        @scroll="contentScroll"
        ref="scroll"
        :probe-type="3"
        class="wrapper goods-category"
      >
        <category-goods-content
          @imgLoaded="imgLoad"
          ref="goodsCategory"
        ></category-goods-content>
        <tab-control
          @changeGoodsType="changeGoodsType"
          :titles="['流行', '新款', '精选']"
          ref="tabControl2"
        />
        <goods-list :goods="showGoods" />
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import CategoryNavSide from "./childrenComps/CategoryNavSide.vue";
import CategoryGoodsContent from "./childrenComps/CategoryGoodsContent.vue";

import { throttle } from "common/utils";

import { getGoodsInfo } from "network/category";

export default {
  data() {
    return {
      scroll: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      goodsType: "pop",
      miniWallkey: "10062603",
      isFixed: false,
      tabControlTop: 0,
      throttleTest: null,
    };
  },
  components: {
    NavBar,
    Scroll,
    CategoryNavSide,
    CategoryGoodsContent,
    TabControl,
    GoodsList,
  },
  computed: {
    showGoods() {
      return this.goods[this.goodsType].list;
    },
  },
  created() {
    // 2.请求商品数据
    // this.getGoodsInfo("pop");
    // this.getGoodsInfo("new");
    // this.getGoodsInfo("sell");
    this.getGoodsInfo("10062603", "pop");
    this.getGoodsInfo("10062603", "sell");
    this.getGoodsInfo("10062603", "new");
  },
  mounted() {},
  methods: {
    // 侧边栏点击切换maitKey和miniWallkey对应显示不同内容
    keyChange(keys) {
      this.$refs.goodsCategory.maitKey = keys[0];
      this.miniWallkey = keys[1];
    },
    getGoodsInfo(miniWallkey, type) {
      getGoodsInfo(miniWallkey, type).then((res) => {
        this.goods[type].list = res;

        // 调用scroll组件的finishPullUp方法再次请求数据
        // this.$refs.scroll.finishPullUp();
        this.$refs.scroll.refresh();
      });
    },
    contentScroll(position) {
      // this.isShow = -position.y > 1000;
      // 通过v-show决定tabControl是否显示
      this.throttleTest();
      this.isFixed = this.tabControlTop < -position.y;
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
    imgLoad() {
      // 防流函数拿高度
      this.throttleTest = throttle(function () {
        this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
        this.$refs.scroll.refresh();
      }, 10000);
      this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
    },
    // getGoodsInfo(type) {
    //   const page = this.goods[type].page + 1;
    //   getGoodsInfo(type, page).then((res) => {
    //     this.goods[type].list.push(...res.data.list);
    //     this.goods[type].page += 1;

    //     // 调用scroll组件的finishPullUp方法再次请求数据
    //     this.$refs.scroll.finishPullUp();
    //     this.$refs.scroll.refresh();
    //   });
    // },
  },
  mounted() {
    console.log(11);
    this.$refs.scroll.refresh();
    // console.log(222222);
  },
  activated() {
    this.$refs.scroll.refresh();
    console.log("好");
  },
  watch: {
    miniWallkey: function (val) {
      this.getGoodsInfo(val, "pop");
      this.getGoodsInfo(val, "sell");
      this.getGoodsInfo(val, "new");
    },
  },
};
</script>

<style  scoped>
.container {
  height: calc(100vh - 98px);
  display: flex;
}
.nav-side {
  height: 100%;
  width: 100px;
  background-color: rgb(230, 243, 242);
  overflow: hidden;
  text-align: center;
}
.tab-flexible {
  position: fixed;
  background-color: white;
  height: 44px;
  width: calc(100vw - 100px);
  top: 44px;
  right: 0;
}
.category-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.goods-category {
  flex: 1;
  height: 100%;
  width: 100px;
  background-color: white;
  overflow: hidden;
  text-align: center;
}
</style>
