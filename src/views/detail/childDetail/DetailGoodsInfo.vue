<!--  -->
<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" 
      :src="item|imgFilter" :key="index" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      count: 0,
      imgLength: 0
    }
  },
  filters: {
    imgFilter: function(value){
      return "http:" + value
    }
  },
  props: {
    detailInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  // 监视属性变化
  // watch :{
  //   detailInfo(){
  //     this.imgLength = this.detailInfo.detailImage[0].list.length
  //   }
  // },
  methods: {
    // 1. 方法1反馈图片加载完成
    // imgLoad(){
    //   if(++ this.count === this.imgLength){
    //     console.log('图片加载完成');
    //     this.$emit('imgLoad')
    //   }
    // }
    // 方法2 防抖
    imgLoad(){
      this.$emit('imgLoad')
    }
  },
}
</script>

<style  scoped>
.goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 0 15px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .info-list img {
    width: 100%;
  }
</style>
