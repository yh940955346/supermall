<!--  -->
<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  data() {
    return {
      load: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imgLoad() {
      if (!this.load) {
        this.$emit("swiperImgLoad");
        this.load = true
      }
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style  scoped>
</style>
