<template>
  <div class="Mine">
    <div class="header">
      <mt-header title>
        <mt-button icon="back"></mt-button>
      </mt-header>
    </div>
    <div class="login">
      <div class="tx">
        <img :src="userAvatar" alt>
      </div>
      <!-- 登录注册  判断切换  -->
      <div v-if="userInfo" class="message">
        <p>{{userNickname}}</p>
        <span class="editor">查看并编辑个人资料</span>
      </div>
      <div class="operation" v-else>
        <p @click="Login()">登录/</p>
        <p @click="register()">注册</p>
      </div>
      <div class="setting">
        <img src="/static/images/icon_mine_set_up.png" alt @click="Settings()">
      </div>
    </div>
    <div class="Content">
      <ul>
        <li @click="account()">
          <img src="/static/images/icon_account_information.png" alt>
          账户资料
          <img src="/static/images/icon_next.png" class="arrawy" alt>
        </li>
        <li @click="proposal()">
          <img src="/static/images/icon_suggested_feedback.png" alt>
          建议反馈
          <img src="/static/images/icon_next.png" class="arrawy" alt>
        </li>
        <li @click="Privacy()">
          <img src="/static/images/icon_privacy_protocol.png" alt>
          隐私协议
          <img src="/static/images/icon_next.png" class="arrawy" alt>
        </li>
        <li>
          <img src="/static/images/icon_custom_service.png" alt>
          资询客服
          <span class="server">QQ：4275776363</span>
          <img src="/static/images/icon_next.png" class="arrawy" alt>
        </li>
        <!-- <li>
          <img src="/static/images/icon_praise.png" alt>
          好评一下
          <img src="/static/images/icon_next.png" class="arrawy" alt>
        </li> -->
        <li @click="get()">
          <img src="/static/images/icon_about_us.png" alt>
          关于我们
          <img src="/static/images/icon_next.png" class="arrawy" alt>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";

export default {
  name: "Mine",
  data() {
    return {
      userInfo: "",
      userBirthday: "",
      userNickname: "",
      userAvatar: require("../../../static/images/icon_head_portrait_nor.png"),
      userTelephone: "",
      accountCenterId: ""
    };
  },
  components: {
    Header
  },
  created() {
    if (localStorage.getItem("token")) {
      var informationId = localStorage.getItem("userInformationId");
      var params = new URLSearchParams();
      params.append("informationId", informationId);
      this.$ajax({
        method: "post",
        url:
          "/loansupermarket-api/usercenter/v1.0.1/web/userInformation/queryById",
        params
      }).then(data => {
        console.log(data);
        this.userInfo = data.data.data;
        this.userNickname =
          data.data.data.userNickname || data.data.data.userTelephone;
        this.userAvatar = data.data.data.userAvatar || this.userAvatar;
        this.userTelephone = this.userInfo.userTelephone;
        this.accountCenterId = this.userInfo.accountCenterId;
        console.log(this.accountCenterId);
        console.log("----------------");
        window.localStorage.setItem("accountCenterId", this.accountCenterId);
      });
    }
  },

  methods: {
    get() {
      this.$router.push({ path: "/AboutUs" });
    },
    Privacy() {
      this.$router.push({ path: "/Privacy" });
    },
    proposal() {
      this.$router.push({ path: "/proposal" });
    },
    account() {
      this.$router.push({ path: "/account" });
    },
    Settings() {
      this.$router.push({
        path: "/Settings",
        query: { userTelephone: this.userTelephone }
      });
      window.localStorage.setItem("userTelephone", this.userTelephone);
    },
    // 登陆注册
    Login() {
      this.$router.push({ path: "/Login" });
    },
    register() {
      this.$router.push({ path: "/register" });
    }
  }
};
</script>
<style scoped>
.Mine {
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
.login {
  width: 100%;
  height: 20vw;
  background-color: #527eee;
  float: left;
}
.login ul li {
  float: left;
  font-family: MicrosoftYaHei;
  font-size: 4.667vw;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
  position: relative;
}

.login ul li:nth-child(1) {
  margin-left: 10%;
}
.tx {
  width: 10.6vw;
  height: 10.6vw;
  background-color: #fff;
  border-radius: 5.6vw;
  float: left;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 12vw;
  top: 6vh;
}

.tx img {
  width: 100%;
}
.setting img {
  width: 4.667vw;
  margin-top: 1.333vw;
  margin-left: 14vw;
  position: absolute;
  left: 70vw;
  top: 7vh;
}

.login ul li:nth-child(4) {
  /* margin-left: 10%; */
  float: right;
  margin-right: 10%;
}

.login li:nth-child(2) {
  margin-left: 24px;
  line-height: 42px;
  width: 50%;
}
.login li:nth-child(3) {
  line-height: 42px;
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
  height: 14vw;
  line-height: 14vw;
  float: left;
  font-family: MicrosoftYaHei;
  font-size: 4.133vw;
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
  width: 3.6vw;
  height: 4.133vw;
  float: right;
  margin-top: 4.933vw;
}

.Content ul li p {
  float: left;
  margin: 17px 0 15px 0;
}

.Content .server {
  color: #999999;
  display: inline-block;
  margin-left: 20%;
}

.operation {
  width: 100%;
  height: 5.6vw;
  float: left;
  position: absolute;
  left: 26vw;
  top: 7vh;
  font-size: 2.6vh;
  color: #fff;
}
.operation p {
  float: left;
}

.message p {
  width: 32vw;
  height: 3vh;
  position: absolute;
  left: 26vw;
  color: #fff;
  top: 6vh;
  text-align: center;
  overflow: hidden;
  font-size: 2.6vh;
}
.message .editor {
  display: inline-block;
  width: 30vw;
  height: 3vh;
  position: absolute;
  left: 28vw;
  top: 10vh;
  font-size: 1.6vh;
  color: #fff;
}
</style>
