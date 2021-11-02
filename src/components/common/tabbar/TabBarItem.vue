<!--  -->
<template>
  <div class="tab-bar-item" @click="pageChange">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isActive: false,
    };
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#008c8c",
    },
  },
    computed: {
    isActive() {
      // 判断活跃状态的页面路径是否和当前路径匹配
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    pageChange() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style  scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  margin-top: 3px;
  height: 24px;
  vertical-align: middle;
}
</style>
