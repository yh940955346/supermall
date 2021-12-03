<!--  -->
<template>
  <div class="nav-side">
    <ul class="nav-side-content">
      <li
        @click="itemClick(item, index)"
        :class="{ active: index == currentIndex }"
        v-for="(item, index) in sideList"
        :key="index"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getCategorySide } from "network/category";

export default {
  data() {
    return {
      sideList: [],
      currentIndex: 0,
    };
  },
  created() {
    getCategorySide().then((res) => {
      console.log(res.data.category.list);
      this.sideList = res.data.category.list;
    });

  },
  methods: {
    itemClick(item, index) {
      this.currentIndex = index;
      this.$emit('keyChange', [item.maitKey, item.miniWallkey])
    },
  },
};
</script>

<style  scoped>
.nav-side ul li {
  height: 50px;
  line-height: 50px;
  color: #666;
  font-size: 14px;
}
.active {
  background-color: white;
  border-left: 3px solid;
  color: var(--color-tint);
  font-weight: 700;
  font-size: 15px;
}
</style>
