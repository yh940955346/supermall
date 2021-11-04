<!--  -->
<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      @click="choose(index)"
      :key="index"
    >
      <span :class="{ active: index == currentIndex }"> {{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    choose(index) {
      this.currentIndex = index;
      this.$emit('changeGoodsType',index)
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style  scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  z-index: 1;
  margin-bottom: 5px;
}
.tab-control .tab-control-item {
  flex: 1;
}
.tab-control .tab-control-item span {
  padding: 5px;
}
.active {
  border-bottom: 3px solid red;
  color: rosybrown;
  font-weight: bolder;
}
</style>
