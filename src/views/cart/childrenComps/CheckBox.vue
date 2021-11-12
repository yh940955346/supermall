<!--  -->
<template>
  <div class="check-box" :class="{checked: isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    isCheck: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style  scoped>
.check-box {
  width: 20px;
  height: 20px;
  border: 2px solid rgb(172, 172, 204);
  background-color: #fff;
  border-radius: 50%;
  margin: auto 10px;
}
.check-box img {
  width: 100%;
}
.checked {
  border: 2px solid rgb(173, 248, 61);
  background-color: rgb(206, 226, 177);
}
</style>
