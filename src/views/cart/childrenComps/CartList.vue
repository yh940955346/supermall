<!--  -->
<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="item in cartList"
        :key="item.iid"
        :product="item" />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Scroll from "components/common/scroll/Scroll";

import CartListItem from "./CartListItem.vue";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  methods: {},
  components: {
    Scroll,
    CartListItem,
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style  scoped>
.cart-list {
  height: 100vh;
  padding-top: 44px;
}
.content {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>
