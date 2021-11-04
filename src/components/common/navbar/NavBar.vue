<!--  -->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 5px rgba(100, 100, 100, 0.3);
  /* background-color: rgb(240, 230, 221); */
}
.left, .right {
  width: 60px;
  /* background-color: rgb(236, 222, 233); */
}
.center {
  flex: 1;
}
</style>
