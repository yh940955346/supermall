<!--  -->
<template>
  <div class="goods-category-content">
    <a
      v-for="(item, index) in categoryList"
      :key="index"
      :href="item.link"
      class="goods-content-item"
    >
      <img @load="imgLoaded" :src="item.image" alt="" />
      <span>{{ item.title }}</span>
    </a>
    <!-- <a class="goods-content-item">
      <img src="~assets/img/category/large9.jpg" alt="" />
      <span>猫猫</span>
    </a> -->
  </div>
</template>

<script>
import { getCategoryGoods } from "network/category";
import { debounce } from "common/utils";

export default {
  data() {
    return {
      categoryList: [],
      maitKey: 3627,
      test: null,
    };
  },
  props: {},
  created() {
    getCategoryGoods(this.maitKey).then((res) => {
      this.categoryList = res.data.list;
    });
    this.test = debounce(function(){this.$emit('imgLoaded')}, 200)
    
  },
  methods: {
    imgLoaded() {
      this.test()
    },
    // debounceTest() {
    //   // console.log("kk");
    //   debounce(function () {
    //     this.$emit("imgLoaded");
    //   }, 200);
    // },
  },
  watch: {
    maitKey: function (val) {
      getCategoryGoods(val).then((res) => {
        this.categoryList = res.data.list;
      });
    },
  },
};
</script>

<style  scoped>
.goods-category-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
}
.goods-content-item {
  width: 32%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2% 2% 0 0;
}
.goods-category-content a:nth-child(3n) {
  margin-right: 0;
}
.goods-content-item img {
  margin: 0px auto;
  width: 80%;
  border-radius: 50%;
}
.goods-content-item span {
  margin: 10px 0;
  font-size: 13px;
  color: var(--color-tint);
}
</style>
