<template>
  <div class="new-box">
    <header>
      <p class="h-header-title" @click="goBank">
        <img :src="bankImgSrc" width="100%">
      </p>
      <div class="h-header-search">
        <p>我的收藏</p>
      </div>
      <div class="h-header-search-gps">
        <p>{{compile}}</p>
      </div>
    </header>
    <ul class="h-list-ul">
      <li class="h-list-li" @click="lookMessagePage()">
        <contentList></contentList>
        <p class="delect">删除</p>
      </li>
    </ul>
  </div>
</template>

<script>
import contentList from "../wcomponents/contentList";
export default {
  data() {
    return {
      searchImgSrc: require("../../../../static/headlineImg/icon@search.png"),
      gpsImgSrc: require("../../../../static/headlineImg/icon@GPS.png"),
      openNavImgSrc: require("../../../../static/headlineImg/icon@openNav.png"),
      bankImgSrc: require("../../../../static/headlineImg/icon@bank.png"),
      openAllMessage: true,
      compile:'编辑'
    };
  },
  components: {
    contentList
  },
  methods: {
    goBank() {
      this.$router.go(-1);
    },

    openAllMessageFn() {
      this.openAllMessage = !this.openAllMessage;
    },

    lookMessagePage() {
      this.$router.push({ path: "/newsMessage", query: { id: "111" } });
    },

    //挑战查询页面
    searchFn() {
      this.$router.push({ path: "/newsSearch" });
    },

    //
    searchMessage() {
      this.$router.push({ path: "/newSearchTwo", query: { content: "111" } });
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

/* nav style */
.h-nav {
  padding: 26px 0px 2px;
  width: 100%;
  box-sizing: border-box;
}
.h-nav ul {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
.h-nav ul li {
  width: 125px;
  text-align: center;
  font-family: MicrosoftYaHei;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #666666;
  margin-bottom: 30px;
  line-height: 30px;
}
.h-nav ul li img {
  width: 30px;
  margin: 10px auto 0;
}
.h-nav ul li p.select-nav {
  color: #527eee;
}

.h-top-list ul li {
  display: flex;
  display: -webkit-flex;
  padding: 20px 20px 25px;
  border-top: 1px solid #eeeeee;
}
.h-top-icon {
  width: 44px;
  height: 22px;
  line-height: 24px;
  border-radius: 4px;
  border: solid 1px #527eee;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #527eee;
  text-align: center;
  margin-right: 28px;
  /* margin-top: 1px; */
}
.h-top-content {
  font-family: MicrosoftYaHei;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
  line-height: 28px;
}

.h-list-ul {
  padding: 0 20px;
}
.h-list-li {
  padding: 21px 0 20px;
  border-top: 1px solid #eee;
  position: relative;
}
.delect{
    position: absolute;
    right: 0;
    bottom: 18px;
    width: 102px;
	height: 40px;
	line-height: 40px;
	background-color: #f61f1f;
	border-radius: 20px;
    font-family: MicrosoftYaHei;
	font-size: 20px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #ffffff;
    text-align: center;
}
.to-dwon {
  transform: rotate(180deg);
}
</style>