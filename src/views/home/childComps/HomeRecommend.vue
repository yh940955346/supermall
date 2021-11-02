<!--  -->
<template>
  <div class="recommends">
    <div class="recommends-item" v-for="item in recommends" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
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
    recommends: {
      type: Array,
      default: []
    }
  }
}
</script>

<style  scoped>
.recommends {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px 0;
  border-bottom: 8px solid rgb(250, 237, 237);
}
.recommends .recommends-item{
  flex: 1;

}
.recommends .recommends-item img{
  width: 80%;
  margin-bottom: 5px;
}
</style>
