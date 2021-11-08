<!--  -->
<template>
  <div class="commentInfo">
    <div class="comment-title">
      <span class="left">用户评价</span>
      <span class="right">更多</span>
    </div>
    <div v-if="Object.keys(commentInfo).length !== 0" class="user-part">
      <div v-if="commentInfo.user.avatar"  class="user-info">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="user-comment">
        <span class="content">{{commentInfo.content}}</span>
        <div class="other-details">
          <span class="time">{{commentInfo.created | Timefilter}}</span>
          <span style="style">{{commentInfo.style}}</span>
        </div>
        <div class="comment-img">
          <img :src="item" alt=""  v-for="item in commentInfo.images" :key="item.index">
        </div>
      </div>
    </div>
    <div v-else class="no-comment"><span>暂无评价呢~</span></div>
    <div class="border"></div>
  </div>
</template>

<script>
import {formatDate} from "common/utils"
export default {
  data() {
    return {};
  },
  filters: {
    Timefilter(value) {
      let date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style  scoped>
.comment-title{
  height: 40px;
  margin: 15px 10px;
  line-height: 30px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  text-align: center;
}
.comment-title .left {
  font-size: 14px;
}
.comment-title .right {
  font-size: 12px;
  width: 50px;
}
.no-comment {
  text-align: center;
  height: 40px;
  font-size: 18px;
  margin: 15px 10px;
  line-height: 30px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}
.user-part {
  margin: 0 10px;
}
.user-info {
  position: relative;
}
.user-info img {
  width: 35px;
  height: 35px;
  border: 2px solid rgba(0,0,0,.1);
  border-radius: 50%;
  color: cornflowerblue;
}
.user-info span {
  font-size: 14px;
  position: absolute;
  left: 45px;
  top: 12px;
}
.user-comment {
  line-height: 1.2em;
  margin: 10px 0 20px 0;
}
.user-comment span {
  font-size: 14px;
}
.user-comment .other-details{
  margin-top: 5px;
}
.user-comment .other-details span {
  font-size: 12px;
  opacity: 0.8;
}
.user-comment .other-details .time {
  margin-right: 10px;
}
.user-comment .comment-img {
  margin-top: 10px;
}
.user-comment .comment-img img{
  width: 70px;
  height: 70px;
  margin-right: 5px; 
}
.user-comment .comment-img img:last-child {
  margin: none;
}
.border {
  margin-bottom: 25px;
  border-bottom: 5px solid #f2f5f8;
}
</style>
