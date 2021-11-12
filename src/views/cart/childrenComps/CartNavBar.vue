<!--  -->
<template>
  <div class="nav-bar">
    <nav-bar><div slot="center">购物车({{cartListLength}})</div></nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'cartList',
      'cartListLength'
    ])
  },
  components: {
    NavBar
  },
}
</script>

<style  scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
