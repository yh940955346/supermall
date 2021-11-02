<!--  -->
<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" >
      <!-- 使用别名alias要加 '~' 号 -->
        <img slot="item-icon" src="~assets/img/tabbar/首页.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/首页-填充.svg" alt="">
        <div slot="item-description">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" >
        <img slot="item-icon" src="~assets/img/tabbar/分类.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/分类-填充.svg" alt="">
        <div slot="item-description">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#008c8c">
        <img slot="item-icon" src="~assets/img/tabbar/购物车.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/购物车-填充.svg" alt="">
        <div slot="item-description">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#008c8c">
        <img slot="item-icon" src="~assets/img/tabbar/我的.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/我的-填充.svg" alt="">
        <div slot="item-description">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>


<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  data () {
    return {
    }
  },
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style  scoped>

</style>
