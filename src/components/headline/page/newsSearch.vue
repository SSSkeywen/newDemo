<template>
  <div class="new-box">
    <header>
      <p class="h-header-title" @click="goBank">
        <img :src="bankImgSrc" width="100%">
      </p>
      <div class="h-header-search">
        <div class="h-header-search-icon">
          <img :src="searchImgSrc" width="100%">
        </div>
        <div class="h-header-search-input">
          <input type="text" v-model="searchData" placeholder="请输入您想搜索的关键字">
        </div>
      </div>
      <div class="h-header-search-gps" @click="searchContentFn">
        <p>搜索</p>
      </div>
    </header>
    <div v-if="true">
      <ul class="ns-nav">
        <li>
          <p>余额记账法</p>
        </li>
        <li>
          <p>余额记账法</p>
        </li>
        <li>
          <p>余额记账法</p>
        </li>
      </ul>
      <div class="big-line"></div>
      <p class="search-title">猜你想搜</p>
      <ul class="search-content">
        <li>
          <p>90后带来消费信用贷款</p>
        </li>
        <li>
          <p>90后带来消费信用贷款</p>
        </li>
        <li>
          <p>90后带来消费信用贷款</p>
        </li>
        <li>
          <p>90后带来消费信用贷款</p>
        </li>
        <li>
          <p>90后带来消费信用贷款</p>
        </li>
        <li>
          <p>90后带来消费信用贷款</p>
        </li>
        <li>
          <p>90后带来消费信用贷款</p>
        </li>
      </ul>
    </div>
    <ul class="h-list-ul" v-else>
            <li class="h-list-li" @click="lookMessagePage()">
                <contentList></contentList>
            </li>
        </ul>
  </div>
</template>

<script>
import contentList from '../wcomponents/contentList'
export default {
  data() {
    return {
      searchImgSrc: require("../../../../static/headlineImg/icon@search.png"),
      gpsImgSrc: require("../../../../static/headlineImg/icon@GPS.png"),
      bankImgSrc: require("../../../../static/headlineImg/icon@bank.png"),
      searchData: ""
    };
  },
  components:{
            contentList
        },
  methods: {
    //   查询信息
    selectMessage() {
      var params = new URLSearchParams();
      params.append("pageNum", "1");
      params.append("pageSize", "5");
      this.$ajax({
        method: "post",
        url: this.$url + "userInformation/queryById",
        params
      }).then(data => {
        // this.arr = data.data.data.list;
      });
    },

    //跳转到文章页面
    lookMessagePage() {
      this.$router.push({ path: "/newsMessage", query: { id: "111" } });
    },

    goBank() {
      this.$router.go(-1);
    },

    searchContentFn() {
      console.log(this.searchData);
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
}
.h-header-title {
  color: #fff;
  margin-right: 32px;
  width: 18px;
  padding-top: 10px;
}
.h-header-search {
  width: 550px;
  height: 54px;
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  padding: 15px 28px;
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

/* 查询信息nav */
.ns-nav {
  display: flex;
  display: -webkit-flex;
}
.ns-nav li {
  flex: 1;
  line-height: 83px;
  text-align: center;
  border-right: solid 1px #eeeeee;
}
.ns-nav li:last-child {
  border-right: none;
}
.ns-nav li p {
  font-family: MicrosoftYaHei;
  font-size: 29px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #666666;
}

.big-line {
  width: 100%;
  height: 16px;
  background-color: #eeeeee;
}

.search-title {
  line-height: 83px;
  padding: 0 30px;
  font-size: 29px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #999999;
}
.search-content {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  border-top: 1px solid #eeeeee;
}
.search-content li {
  width: 50%;
  border-right: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  line-height: 83px;
  padding-left: 34px;
  box-sizing: border-box;
}
.search-content li p {
  font-size: 27px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
}
.search-content li:nth-of-type(2n) {
  border-right: none;
}
.h-list-ul{
    padding: 0 20px;
}
.h-list-li{
    padding: 21px 0 20px;
    border-top: 1px solid #eee;
}
</style>