<template>
  <div class="new-box">
    <header>
      <p class="h-header-title" @click="goBank">
        <img :src="bankImgSrc" width="100%">
      </p>
      <div class="h-header-search">
        <p>贷款频道</p>
      </div>
      <div class="h-header-search-gps">
        <div class="h-header-search-gps-img">
          <img :src="navImgSrc" width="100%">
        </div>
      </div>
    </header>
    <div style="width:100%;height:45px;"></div>
    <nav class="h-nav" style="background-color: transparent;" v-if="openAllMessage">
      <ul>
        <li @click="goHomePage">
          <p>首页</p>
        </li>
        <li v-for="(item,index) in navLists" :key="index" @click="searchMessage(index)">
          <p :class="item.isSelectShow?'select-nav':''">{{item.newsChannelName}}</p>
        </li>
        <li @click="openAllMessageFn" v-if="navLists.length>11">
          <img :src="openNavImgSrc" alt>
        </li>
      </ul>
    </nav>
    <div v-else class="h-nav-two">
      <nav class="h-nav">
        <ul>
          <li  @click="goHomePage">
            <p>首页</p>
          </li>
          <li v-for="(item,index) in navLists" :key="index" @click="searchMessage(index)">
            <p :class="item.isSelectShow?'select-nav':''">{{item.newsChannelName}}</p>
          </li>
          <li @click="openAllMessageFn">
            <img :src="openNavImgSrc" class="to-dwon">
          </li>
        </ul>
      </nav>
    </div>
    <div class="h-top-list">
      <ul>
        <li v-for="(item,index) in homeTopLists" :key="index">
          <p class="h-top-icon">置顶</p>
          <p class="h-top-content">{{item.newsTitle}}</p>
        </li>
      </ul>
    </div>
    <ul class="h-list-ul">
      <li class="h-list-li" @click="lookMessagePage()">
        <contentList></contentList>
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
      navImgSrc: require("../../../../static/headlineImg/icon@nav.png"),
      openAllMessage: true,
      navLists: [],
      contentLists: [],
      numberOfElements: "",
      homeTopLists:[]
    };
  },
  components: {
    contentList
  },
  created() {
    this.contentLists = JSON.parse(this.$route.query.content);
    // console.log(content)
    this.getHomeData();
    this.getHomePageTopList();
  },
  methods: {
    //   获取首页信息
    getHomeData() {
      let params = new URLSearchParams();
      params.append("pageNumber", "1");
      params.append("pageSize", "10");
      this.$ajax({
        method: "post",
        url: this.$urlTop + "newsChannelList/queryPage",
        params
      }).then(data => {
        for (let item of data.data.data.content) {
          item.isSelectShow = false;
          if (item.newsChannelName == this.contentLists.newsChannelName) {
            item.isSelectShow = true;
          }
        }
        console.log(data.data.data.content);
        this.navLists = data.data.data.content;
        this.numberOfElements = data.data.data.numberOfElements;
      });
    },

    //   获取首页置顶文章信息
    getHomePageTopList() {
      let params = new URLSearchParams();
      params.append("pageNumber", "1");
      params.append("pageSize", "2");
      this.$ajax({
        method: "post",
        url: this.$urlTop + "newsSortInformation/queryPageTop",
        params
      }).then(data => {
        this.homeTopLists = data.data.data.content;
      });
    },

    //切换nav内容方法
    searchMessage(index) {
        for(let item of this.navLists){
          item.isSelectShow = false;
        }
        this.navLists[index].isSelectShow = true;
        this.getHomePageList(this.navLists[index].newsChannelName)
    },

    //   获取首页文章信息
    getHomePageList(navContent) {
      let params = new URLSearchParams();
      params.append("titleOrKeyWord", navContent);
      params.append("menu", navContent);
      params.append("pageNumber", "1");
      params.append("pageSize", "10");
      this.$ajax({
        method: "post",
        url: this.$urlTop + "newsSortInformation/queryPageAnd",
        params
      }).then(data => {
          console.log(data)
        // this.navLists = data.data.data.content;
      });
    },

    //
    goHomePage(){
      this.$router.push({ path: "/Whome"});
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

    goBank() {
      this.$router.go(-1);
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
  flex: 1;
  line-height: 54px;
  font-family: MicrosoftYaHei;
  font-size: 34px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 3px;
  color: #ffffff;
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
  width: 30px;
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
.h-nav-two {
  position: fixed;
  background-color: #fff;
  top: 90px;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.h-nav {
  padding: 26px 0px 2px;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  background-color: #fff;
  top: 90px;
  left: 0;
}
.h-nav-two .h-nav {
  top: 0;
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
  margin: 2px auto 0;
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
}
.to-dwon {
  transform: rotate(180deg);
}
</style>