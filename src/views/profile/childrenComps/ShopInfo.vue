<!--  -->
<template>
  <div id="shop-info">
    <div class="contain">
      <div class="item order">
        <img src="~assets/img/profile/订单.svg" alt="" />
        <div>全部订单</div>
      </div>
      <div class="item unpay">
        <img src="~assets/img/profile/待付款.svg" alt="" />
        <div>待付款</div>
      </div>
      <div class="item undelivery">
        <img src="~assets/img/profile/待发货.svg" alt="" />
        <div>待发货</div>
      </div>
      <div class="item deliveried">
        <img src="~assets/img/profile/已发货.svg" alt="" />
        <div>已发货</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style  scoped>
#shop-info {
  padding: 10px 10px;
  border: 10px 5px solid #f2f5f8;
}
.contain {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 5px;
  border-radius: 5px;
  background-color: #fff;
}
.contain div:first-child {
  border-right: 1px solid silver;
}
.item {
  flex: 1;
  flex-direction: column;
  font-size: 14px;
}
.item img {
  width: 25px;
  margin-bottom: 3px;

}
</style>
