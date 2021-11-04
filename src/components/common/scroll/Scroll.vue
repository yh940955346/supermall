<!--  -->
<template>
<!-- ref/children -->
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  data() {
    return {
      scroll: null
    };
  },
  props:{
    probeType:{
      type: Number,
      default: 0
    },
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true,
      click: true,
      tab: true
    });
    this.scroll.on('scroll', (position)=>{
      this.$emit('scroll', position)
    });
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp');
      this.scroll.finishPullUp().refresh()
    })
  },
  methods: {
    scrollTo(x, y, time){
      this.scroll.scrollTo(x, y, time)
    },
    // finishPullUp(){
    //   this.scroll.finishPullUp()
    // }
  },
};
</script>

<style  scoped>
</style>
