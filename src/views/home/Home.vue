<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper.vue"
import HomeRecommend from "./childComps/HomeRecommend.vue"

import { getHomeMultidata } from "network/home";

export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  data(){
    return {
      banners: [],
      recommends: [],
      // keywords: [],
      // dkeywords: []
      // result: null
    }
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // this.keywords = res.data.keywords.list;
      // this.dkeywords = res.data.dkeyword.list;
      this.result = res
    });
  },
};
</script>

<style  scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
