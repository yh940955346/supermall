<!--  -->
<template>
  <div class="goods-list-item" @click="itemClick">
    <img @load="imgLoad" :src="showImg" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    showImg(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imgLoad(){
      // 方法1：判断路径发送不同事件
      // if(this.$route.path.indexOf('/home') !== -1){
      // this.$bus.$emit('homeImgLoadFinish')
      // }else if(this.$route.path.indexOf('/detail') !== -1){
      //   this.$bus.$emit('detailImgLoadFinish')
      // }
      // 方法2：通过$off销毁事件
      this.$bus.$emit('imgLoadFinish')
    },
    itemClick(){
      const id = this.goodsItem.iid ? this.goodsItem.iid : this.goodsItem.shop_id
      this.$router.push('/detail/' + id);
    }
  },
}
</script>

<style  scoped>
.goods-list-item{
  padding-bottom: 55px;
  position: relative;
  width: 46%;
}
.goods-list-item img{
  width: 100%;
  border-radius: 5px;
}
.goods-list-item .goods-info{
  font-size: 12px;
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-list-item .goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
  padding: 0 5px;
}
.goods-list-item .goods-info .price{
  margin-right: 20px;
}
.goods-list-item .goods-info .collect{
  position:relative
}
.goods-list-item .goods-info .collect::before{
  content: '';
  position: absolute;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  width:14px;
  height: 14px;
  left: -15px;
  top: -1px;
}
</style>
