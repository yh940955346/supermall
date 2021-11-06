<!--  -->
<template>
  <div id="detailNav">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="titleItem"
          @click="titleClick(index)"
          :class="{active: currentIndex === index}"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    titleClick(index){
      this.currentIndex = index
    },
    backClick(){
      this.$router.back()
    }
  },
};
</script>

<style  scoped>
/* #detailNav {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;
} */
.title {
  display: flex;
  font-size: 14px;
}
.title .titleItem {
  flex: 1;
}
.back {
  margin-top: 7px;
}
.active {
  color: var(--color-tint);
  font-weight: bolder;
}

</style>
