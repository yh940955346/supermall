<!--  -->
<template>
  <div class="personal-info">
    <div class="info-top">
      <div class="profile-name">{{ name }}</div>
      <div class="profile-photo">
        <img src="~assets/img/common/neko.jpg" alt="" />
      </div>
    </div>
    <div class="info-bottom">
      <div class="item" v-for="item in property" :key="item.index">
        <span class="top">{{ item.count }}</span>
        <span class="bottom">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      property: [
        { name: "余额", count: 0 },
        { name: "优惠券", count: 0 },
        { name: "红包", count: 0 },
        { name: "积分", count: 0 },
      ],
      name: "summerKids",
    };
  },
};
</script>

<style  scoped>
.personal-info {
  background-color: rgba(201, 134, 148, 0.6);
  padding: 20px 5px;
  box-shadow: 0 3px 3px rgba(201, 134, 148, 0.4);
}
.info-top {
  overflow: hidden;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.profile-photo {
  width: 50px;
  height: 50px;
  text-align: center;
  margin: 5px;
}
.profile-photo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.profile-name {
  color: #fff;
  font-weight: 700;
}
.info-bottom {
  display: flex;
    font-size: 14px;
}
.info-bottom .item {
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1;
}
span.top {
  margin-bottom: 3px;
}
</style>
