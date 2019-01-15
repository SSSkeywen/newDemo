<template>
  <div class="new-box">
    <header>
      <p class="h-header-title">信用头条</p>
      <div class="h-header-search">
        <div class="h-header-search-icon">
          <img :src="searchImgSrc" width="100%">
        </div>
        <div class="h-header-search-input" @click="searchFn">
          <input type="text" placeholder="请输入您想搜索的关键字">
        </div>
      </div>
      <div class="h-header-search-gps">
        <div class="h-header-search-gps-img">
          <img :src="gpsImgSrc" width="100%">
        </div>
        <p @click="toCompile">西安</p>
      </div>
    </header>
    <nav class="h-nav" v-if="openAllMessage">
      <ul>
        <li>
          <p class="select-nav">首页</p>
        </li>
        <li v-for="(item,index) in navLists" :key="index" @click="searchMessage(index)">
          <p>{{item.newsChannelName}}</p>
        </li>
        <li @click="openAllMessageFn" v-if="navLists.length>11">
          <img :src="openNavImgSrc" alt>
        </li>
      </ul>
    </nav>
    <nav class="h-nav" v-else>
      <ul>
        <li>
          <p class="select-nav">首页</p>
        </li>
        <li  v-for="(item,index) in navLists" :key="index" @click="searchMessage(index)">
          <p>{{item.newsChannelName}}</p>
        </li>
        <li @click="openAllMessageFn">
          <img :src="openNavImgSrc" class="to-dwon">
        </li>
      </ul>
    </nav>
    <div class="h-top-list">
      <ul>
        <li v-for="(item,index) in homeTopLists" :key="index" @click="lookMessagePage(index)">
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
      openAllMessage: true,
      navLists:[],
      homeTopLists:[],
      numberOfElements:'',
    };
  },
  components: {
    contentList
  },
  created() {
    this.getHomeData();
    this.getHomePageTopList();
    this.getHomePageList()
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
        this.navLists = data.data.data.content;
        this.numberOfElements = data.data.data.numberOfElements
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
          console.log(data)
        this.homeTopLists = data.data.data.content;
      });
    },

    //   获取首页文章信息
    getHomePageList() {
      let params = new URLSearchParams();
      params.append("titleOrKeyWord", "");
      params.append("menu", "首页");
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

    openAllMessageFn() {
      this.openAllMessage = !this.openAllMessage;
    },

    lookMessagePage(index) {
        console.log(index)
       
      this.$router.push({ path: "/newsMessage", query: { content: JSON.stringify(this.homeTopLists[index]) } });
    },

    //挑战查询页面
    searchFn() {
      this.$router.push({ path: "/newsSearch" });
    },

    //
    searchMessage(index) {
        console.log(index)
        console.log(this.navLists[index])
      this.$router.push({ path: "/newSearchTwo", query: { content: JSON.stringify(this.navLists[index]) } });
    },

    toCompile() {
      this.$router.push({ path: "/myCollect", query: { content: "111" } });
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
  font-family: ReeJi-BigRuixian-ThinGB;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #fff;
  line-height: 54px;
  margin-right: 19px;
}
.h-header-search {
  width: 430px;
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
}
.to-dwon {
  transform: rotate(180deg);
}
</style>