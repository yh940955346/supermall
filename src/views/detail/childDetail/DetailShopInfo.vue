<!--  -->
<template>
  <div class="shopInfo">
    <div class="shop">
      <img :src="shop.logo|Imgfilter" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="details clearfix">
      <div class="left">
        <div class="sells item">
          <div class="top">{{shop.sells}}</div>
          <div class="down">总销量</div>
        </div>
        <div class="goods item">
          <div class="top">{{shop.goodsCount}}</div>
          <div class="down">全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <div v-for="item in shop.score" :key="item.index" class="rightDetails">
          <span class="item rightItem">{{item.name}}</span>
          <div>
          <span class="score littleItem rightItem" :class="item.isBetter ? 'color1' : 'color2'">{{item.score}}</span>
          <span class="class littleItem rightItem" :class="item.isBetter ? 'bac1' : 'bac2'">{{item.isBetter? '高' : '低'}}</span></div>
          </div>
      </div>
    </div>
    <br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  filters: {
    Imgfilter: function(value){
      return "http:" + value
    }
  },
  props: {
    shop: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style  scoped>
.clearfix::after{
  content: '';
  display: block;
  clear: both;
}
.shopInfo {
  padding: 30px 15px;
}
.shop {
  position: relative;
}
.shop img {
  width: 45px;
  height: 45px;
  border: 2px solid rgba(0,0,0,.1);
  border-radius: 50%;
  color: cornflowerblue;
}
.shop span {
  font-size: 15px;
  position: absolute;
  left: 60px;
  top: 18px;
}
.details {
  margin-top: 20px;
  font-size: 14px;
  /* display: flex; */
}
.details .top {
  margin-bottom: 5px;
  font-size: 18px;
}
.details .left{
  display: flex;
  width: 45%;
  /* flex: 1; */
  text-align: center;
  padding: 5px;
  border-right: 1px solid rgba(0,0,0,.1);
  margin-top: 10px;
}
.details .left .item{
  flex: 2;
}
.details .right{
  /* flex: 1; */
  width: 45%;
  margin-left: 20px;
}
.rightDetails {
  display: flex;
}
/* .rightDetails .item {
  display: flex;
  flex: 2;
} */
.rightDetails .rightItem {
  margin-bottom: 12px;
}
.rightDetails .score {
  display: inline-block;
  width: 25px;
  text-align: left;
  margin: 0 15px;
}
.rightDetails .class {
  padding: 2px;
}
.color1 {
  color: rgb(199, 187, 171);
}
.color2 {
  color: rgb(214, 118, 182);
}
.bac1 {
  color: #fff;
  background-color: rgb(199, 187, 171);
}
.bac2 {
  color: #fff;
  background-color: rgb(214, 118, 182);
}
</style>
