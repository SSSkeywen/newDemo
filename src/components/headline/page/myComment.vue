<template>
  <div class="new-box">
    <header>
      <p class="h-header-title" @click="goBank">
        <img :src="bankImgSrc" width="100%">
      </p>
      <div class="h-header-search">
        <p>我的评论</p>
      </div>
      <div class="h-header-search-gps">
        <p></p>
      </div>
    </header>
    <div class="comment-box">
      <div class="comment-user-img">
        <img :src="searchImgSrc" width="100%">
      </div>
      <div class="comment-content">
        <textarea placeholder="我来说两句，不得少于3个字" name id></textarea>
      </div>
    </div>
    <div class="comment-btn">
      <p>取消</p>
      <p>发布</p>
    </div>
    <alertComponents></alertComponents>
  </div>
</template>

<script>
import alertComponents from '../wcomponents/alertComponents'
export default {
  data() {
    return {
      searchImgSrc: require("../../../../static/headlineImg/icon@search.png"),
      gpsImgSrc: require("../../../../static/headlineImg/icon@GPS.png"),
      openNavImgSrc: require("../../../../static/headlineImg/icon@openNav.png"),
      bankImgSrc: require("../../../../static/headlineImg/icon@bank.png"),
      openAllMessage: true,
      compile: "编辑"
    };
  },
  components:{
    alertComponents
  },
  methods: {
    goBank() {
      this.$router.go(-1);
    },

    openAllMessageFn() {
      this.openAllMessage = !this.openAllMessage;
    }
  }
};
</script>

<style scoped>
img {
  display: block;
}
input {
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
}
header {
  width: 100%;
  height: 90px;
  display: flex;
  background-color: #527eee;
  padding: 20px;
  box-sizing: border-box;
  justify-content: space-between;
}
.h-header-title {
  color: #fff;
  margin-right: 32px;
  width: 18px;
  padding-top: 10px;
}
.h-header-search {
  line-height: 54px;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
  margin-right: 20px;
}
.h-header-search-icon {
  width: 20px;
  margin-right: 20px;
  padding-top: 2px;
}
.h-header-search-input {
  flex: 1;
  height: 25px;
}
.h-header-search-input input {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 25px;
  font-size: 24px;
}
.h-header-search-gps {
  display: flex;
  padding-top: 13px;
}
.h-header-search-gps-img {
  width: 22px;
  margin-right: 14px;
}
.h-header-search-gps p {
  font-family: MicrosoftYaHei;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
  line-height: 30px;
}

.comment-box {
  padding: 30px;
  display: flex;
}
.comment-user-img {
  width: 50px;
  margin-right: 20px;
  height: 50px;
  border-radius: 50px;
}
.comment-content {
  flex: 1;
}
.comment-content textarea {
  width: 100%;
  height: 400px;
  outline: none;
  border-radius: 10px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 30px;
  border: none;
  background-color: #fff;
}
.comment-btn {
  display: flex;
  justify-content: flex-end;
}
.comment-btn p {
  width: 120px;
  height: 60px;
  margin-right: 30px;
  background-color: #dcdcdc;
  border-radius: 60px;
  text-align: center;
  line-height: 60px;
}
.comment-btn p:last-child {
  background-color: #527eee;
  color: #fff;
}
.new-box{
  width: 100%;
  min-height: 100vh;
  background-color: #eee;
}
</style>