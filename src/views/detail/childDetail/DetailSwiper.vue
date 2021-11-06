<!--  -->
<template>
<div>
  <swiper class="detailSwiper">
    <swiper-item v-for="item in topImgs" :key="item.index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper"
export default {
  data () {
    return {
    }
  },
  props: {
    topImgs: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
    Swiper,
  }
}
</script>

<style  scoped>
.detailSwiper {
  height: 300px;
  overflow: hidden;
}
</style>
