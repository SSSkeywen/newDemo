<template>
  <div class="hello">
    <div class="FooterBar">
      <div class="footerBanner"></div>
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="首页">
          <HomePage @getChange="getChange" @getsearch="getsearch"></HomePage>
        </mt-tab-container-item>
        <mt-tab-container-item id="贷款大全">
          <loan ref="getLoan" @getsearch="getsearch"></loan>
        </mt-tab-container-item>
        <mt-tab-container-item id="消息">
          <Chat></Chat>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <mine></mine>
        </mt-tab-container-item>
      </mt-tab-container>

      <mt-tabbar v-model="selected">
        <mt-tab-item id="首页">
          <img src="/static/images/icon_home_page_nor.png" alt v-if="selected != '首页'">
          <img src="/static/images/icon_home_page_sel.png" alt v-else>
          <p>首页</p>
        </mt-tab-item>
        <mt-tab-item id="贷款大全">
          <img src="/static/images/icon_loan_nor.png" alt v-if="selected != '贷款大全'">
          <img src="/static/images/icon_loan_sel.png" alt v-else>
          <p>贷款大全</p>
        </mt-tab-item>
        <mt-tab-item id="消息">
          <img src="/static/images/icon_news_nor.png" alt v-if="selected != '消息'">
          <img src="/static/images/icon_news_sel.png" alt v-else>
          <p>消息</p>
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img src="/static/images/icon_mine_nor.png" alt v-if="selected != '我的'">
          <img src="/static/images/icon_mine_sel.png" alt v-else>
          <p>我的</p>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabItem } from "mint-ui";
import loan from "./loan/loan.vue";
import HomePage from "./HomePage/HomePage.vue";
import Chat from "./News/Chat.vue";
import Mine from "./Mine/Mine.vue";
export default {
  name: "Home",
  data() {
    return {
      selected: "首页"
    };
  },
  components: {
    Tabbar,
    TabItem,
    loan,
    HomePage,
    Chat,
    Mine
  },
  created() {
    this.selected = this.$route.query.selected || "首页";
  },
  methods: {
    getChange(selected, productChannelId) {
      this.selected = selected;
      this.$refs.getLoan.getProductList(productChannelId);
    },
    getsearch(selected) {
      this.selected = selected;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.FooterBar img {
  width: 5.667vw;
  margin-bottom: 1.333vw;
}

.FooterBar {
  color: #999999;
}
</style>
