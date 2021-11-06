<!--  -->
<template>
  <div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
    <img @load="imgLoad" src="~assets/img/home/recommend_bg.jpg" alt=""></a>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    imgLoad(){
      this.$emit('featureImgLoad')
    }
  },
}
</script>

<style  scoped>
img {
  width: 100%;
}
</style>
