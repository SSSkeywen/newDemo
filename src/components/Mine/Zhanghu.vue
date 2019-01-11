<template>
  <!-- 账户资料 -->
  <div class="Zhanghu">
    <div class="header">
      <mt-header title="账户资料">
        <router-link :to="{ path:'/' ,query :{selected:'我的'} }" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="Content">
      <ul>
        <li>
          <p>头像</p>
          <img src="/static/images/icon_next.png" class="arrawy" alt>
        </li>
        <li>
          <p>用户名</p>
          <span>Stevev</span>
          <img src="/static/images/icon_next.png" class="arrawy" alt>
        </li>
        <li>
          <p>手机号</p>
          <span>15802939821</span>
        </li>
        <li>
          <p>生日</p>
          <span>待完善</span>
          <img src="/static/images/icon_next.png" class="arrawy" alt>
        </li>
        <li>
          <p>地区</p>
          <span>待完善</span>
          <img src="/static/images/icon_next.png" class="arrawy" alt>
        </li>
        <li>
          <p>身份情况</p>
          <span>待完善</span>
          <img src="/static/images/icon_next.png" class="arrawy" alt>
        </li>
      </ul>
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>
<script>
import { Header } from "mint-ui";
import { Actionsheet } from "mint-ui";
export default {
  name: "Zhanghu ",
  data() {
    return {};
  },
  components: {
    Header,
    Actionsheet
  }
};
</script>
<style scoped>
.Zhanghu {
  width: 100%;
  height: 100vh;
  background-color: #eee;
}
.mint-header {
  background-color: #527eee;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
}

.Content {
  width: 100%;
  height: auto;
  float: left;
  background-color: white;
}

.Content img {
  float: left;
  margin-right: 5%;
  margin-top: 17px;
}
.Content ul li {
  width: 95%;
  margin-left: 5%;
  height: 60px;
  line-height: 60px;
  float: left;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
  border-bottom: 1px solid #eeeeee;
}

.Content ul li:nth-last-child(1) {
  border-bottom: none;
}

.Content ul {
  padding: 0;
}
.Content .arrawy {
  width: 12px;
  height: 16px;
  float: right;
  margin-top: 22px;
}

.Content ul li p {
  float: left;
}

.Content .server {
  color: #999999;
  display: inline-block;
  margin-left: 20%;
}

.Content ul li:nth-child(2) p {
  width: 75%;
}
.Content ul li:nth-child(3) p {
  width: 70%;
}
.Content ul li:nth-child(4) p {
  width: 76%;
}
.Content ul li:nth-child(4) span {
  color: #fa3131;
}
.Content ul li:nth-child(5) p {
  width: 76%;
}
.Content ul li:nth-child(5) span {
  color: #fa3131;
}
.Content ul li:nth-child(6) p {
  width: 76%;
}
.Content ul li:nth-child(6) span {
  color: #fa3131;
}
</style>

