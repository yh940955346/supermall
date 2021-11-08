<!--  -->
<template>
  <div class="goods-recommend">
    <div v-for="item in goods-recommend" :key="item.index">
      <img :src="item.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    goodsRecommend: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style  scoped>

</style>
