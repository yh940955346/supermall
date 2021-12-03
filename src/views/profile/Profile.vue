<!--  -->
<template>
  <div id="profile">
    <personal-info class="personal-info" />
    <shop-info />
  </div>
</template>

<script>
import PersonalInfo from "./childrenComps/PersonalInfo";
import ShopInfo from "./childrenComps/ShopInfo";
export default {
  data() {
    return {};
  },
  components: {
    PersonalInfo,
    ShopInfo,
  },
};
</script>

<style  scoped>
#profile {
  background-color: rgba(226, 223, 219, 0.4);
}
</style>
