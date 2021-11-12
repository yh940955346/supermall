<!--  -->
<template>
  <div v-show="isShow" class="toast">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      message: ''
    }
  },
  methods: {
    show(text='默认文字', time=2000) {
      this.isShow = true;
      this.message = text;
      setTimeout(() => {
        this.isShow = false
      }, time);
    }
  },
}
</script>

<style  scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(245, 245, 245,0.8);
  border-radius: 5px;
  padding: 8px 10px;
  color: rgb(94, 84, 84);
  z-index: 999;
}
</style>
