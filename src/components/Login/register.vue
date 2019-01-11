<template>
  <div class="register">
    <div class="header">
      <mt-header title="注册">
        <router-link :to="{ path:'/' ,query :{selected:'我的'} }" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right" @click="Login()">登录</mt-button>
      </mt-header>
    </div>
    <div class="settings">
      <ul>
        <li>
          <img src="/static/images/icon_mobile_phone.png" alt>
          <input type="text" placeholder="请输入您的手机号" v-model="PhoneNumber">
        </li>

        <li>
          <img src="/static/images/icon_verification_code.png" alt>
          <input type="text" placeholder="请输入验证码" v-model="keywords">
        </li>
      </ul>
    </div>

    <div class="change">
      <div class="changeInfo" @click="register()">立即注册</div>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";
import { Toast } from "mint-ui";
export default {
  name: "register",
  data() {
    return {
      PhoneNumber: "",
      keywords: ""
    };
  },
  components: {
    Header,
    Toast
  },
  methods: {
    Login() {
      this.$router.push({ path: "/Login" });
    },

    // 注册
    register() {
      var subAccountNumber = this.PhoneNumber;
      var subAccountPwd = this.keywords;
      var params = new URLSearchParams();
      params.append("subAccountNumber", subAccountNumber);
      params.append("subAccountPwd", subAccountPwd);
      params.append("subSystemId", 1078113898722639874);
      params.append("subAccountType", "phoneNumber");
      params.append("subAccountAuthority", "用户");
      params.append("createUser", "System");
      params.append("accessIp", "192.168.0.191");
      params.append("accessIp", "Steven");

      this.$ajax({
        method: "post",
        url: this.$url + "accountCenter/insert",
        params
      }).then(function(res) {
        Toast({
          message: res.data.msg,
          position: "top",
          duration: 5000
        });
        console.log();
      });
    }
  }
};
</script>
<style scoped>
.register {
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

