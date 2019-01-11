<template>
  <div class="AboutUs">
    <!-- 关于我们 -->
    <div class="header">
      <mt-header title="关于我们">
        <router-link :to="{ path:'/' ,query :{selected:'我的'} }" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="center">
      <img src="/static/images/icon_daikuanchaoshi.png" alt>
      <span class="banben">v.1.10.0</span>
    </div>
    <div class="messige">
      <ul>
        <li style="color: #333333;">
          <img src="/static/images/icon_business_cooperation.png" alt>
          商务合作
        </li>
        <li>
          邮箱：
          <span>shangwuhezuo@163.com</span>
        </li>
        <li>欢迎金融、市场、APP推广的各类合作咨询</li>
      </ul>
    </div>
    <div class="messige">
      <ul>
        <li style="color: #333333;">
          <img src="/static/images/icon_media_relations.png" alt>
          媒体公关
        </li>
        <li>
          邮箱：
          <span>meitigongguan@163.com</span>
        </li>
        <li>欢迎媒体各类合作咨询</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";
export default {
  name: "AboutUs",
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>
<style scoped>
.AboutUs {
  width: 100%;
  height: 100vh;
  background-color: #eeeeee;
}
.mint-header {
  background-color: #527eee;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
}

.center {
  width: 100%;
  height: 10rem;
  float: left;
  border-bottom: 1px solid #eeeeee;
  position: relative;
  background-color: #fff;
}
.center img {
  width: 8rem;
  position: absolute;
  left: 50%;
  top: 4rem;
  margin-left: -4rem;
}
.banben {
  width: 5rem;
  display: inline-block;
  /* height: 3vh; */
  color: #999999;
  position: absolute;
  left: 50%;
  margin-left: -9vw;
  font-size: 5vw;
  top: 7rem;
}

.messige {
  width: 100%;
  height: 9rem;
  float: left;
  text-align: left;
  color: #666666;
  border-bottom: 1px solid #eeeeee;
  background-color: #fff;
}
.messige ul li {
  margin-top: 0.5rem;
}

.messige ul li img {
  vertical-align: middle;
  width: 1.5rem;
  margin-right: 5%;
}
.messige ul {
  width: 90%;
  margin-left: 5%;
}

.messige ul li:nth-child(2),
.messige ul li:nth-child(3) {
  padding-left: 13%;
}
</style>


