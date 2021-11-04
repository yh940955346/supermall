<!--  -->
<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props:{
      position:{
        type: Number,
        default: 0
      }
  },
  methods: {

  },
}
</script>

<style  scoped>
.back-top {
  position: fixed;
  right: 15px;
  bottom: 59px;
  /* width: 20px;
  height: 20px; */
}
.back-top img {
  width: 40px;
  height: 40px;
}
</style>
