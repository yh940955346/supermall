<!--  -->
<template>
    <div class="tab-bar">
      <slot></slot>
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
.tab-bar {
  display: flex;
  text-align: center;
  background-color: rgb(243, 245, 239);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -5px 10px rgba(223, 213, 213, 0.4);
  z-index: 2;
}
</style>
