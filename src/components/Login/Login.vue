<template>
  <div class="Login">
    <div class="header">
      <mt-header title="登录">
        <router-link :to="{ path:'/' ,query :{selected:'我的'} }" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right" @click="register()">注册</mt-button>
      </mt-header>
    </div>
    <div class="settings">
      <ul>
        <li>
          <img src="/static/images/icon_mobile_phone.png" alt>
          <input type="text" placeholder="请输入您的手机号" v-model="UserName">
        </li>

        <li>
          <img src="/static/images/icon_password.png" alt>
          <input type="text" placeholder="请重新输入密码" v-model="PassWord">
        </li>
        <li>
          <span>忘记密码？</span>
        </li>
      </ul>
    </div>

    <div class="change">
      <div class="changeInfo" @click="login()">立即登录</div>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";
import { Toast } from "mint-ui";
export default {
  name: "Login",
  data() {
    return {
      UserName: "",
      PassWord: ""
    };
  },
  components: {
    Header
  },
  methods: {
    register() {
      this.$router.push({ path: "/register" });
    },

    login() {
      var loginName = this.UserName;
      var password = this.PassWord;
      if(this.UserName==''){
        Toast({
          message: '用户名不能为空',
          position: "top",
          duration: 5000
        });
        return false
      }
      if(this.UserName==''){
        Toast({
          message: '密码不能为空',
          position: "top",
          duration: 5000
        });
        return false
      }
      var params = new URLSearchParams();
      params.append("loginName", this.UserName);
      params.append("password", this.PassWord);
      //   params.append("subSystemId", 1078113898722639874);
      this.$ajax({
        method: "post",
        url: this.$url + "login",
        params
      }).then(data => {
        var userInfo = {
          userNickname: data.data.data.userInfo.userNickname,
          userBirthday: data.data.data.userInfo.userBirthday,
          userAddress: data.data.data.userInfo.userAddress,
          userAvatar: data.data.data.userInfo.userAvatar,
          userInformationId: data.data.data.userInfo.userInformationId
        };
        console.log(data.data.msg)
        Toast({
          message: data.data.msg,
          position: "top",
          duration: 5000
        });
        this.userInformationId = data.data.data.userInfo.userInformationId;
        localStorage.setItem("token", data.data.data.token);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        localStorage.setItem(
          "userInformationId",
          data.data.data.userInfo.userInformationId
        );
        
        this.$router.push({ path: "/", query: { selected: "我的" } });
      });
    }
  }
};
</script>
<style scoped>
.Login {
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

.settings {
  width: 100%;
  height: 40.667vw;
  background-color: #fff;
  float: left;
}

.settings img {
  float: left;
  width: 4.667vw;
  margin: 2.333vw 3.2vw 0 3.333vw;
}

.settings ul li {
  width: 90%;
  height: 9.333vw;
  margin-left: 5%;
  margin-top: 4.4vw;
  border-radius: 4.933vw;
  border: solid 1px #cccccc;
}
.settings input {
  outline: none;
  border: none;
  height: 7.6vw;
  float: left;
}

.settings ul li:nth-child(3) {
  border: none;
}
.settings ul li:nth-child(3) span {
  display: inline-block;
  float: right;
  font-family: MicrosoftYaHei;
  font-size: 3.867vw;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #aaaaaa;
}

.change {
  width: 100%;
  height: 37px;
  float: left;
  margin-top: 30px;
  position: relative;
}

.changeInfo {
  width: 90vw;
  height: 8.933vw;
  color: #ffffff;
  line-height: 7.933vw;
  text-align: center;
  background-color: #527eee;
  border-radius: 4.8vw;
  position: absolute;
  left: 50%;
  margin-left: -44.933vw;
}
</style>

