<template>
  <div class="Login">
    <div class="header">
      <mt-header title="修改昵称">
        <router-link :to="{ path:'/account' }" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="settings">
      <ul>
        <li>
          <img src="/static/images/inputIcon.png" alt>
          <input type="text" placeholder="请输入" v-model="UserName">
        </li>
      </ul>
    </div>

    <div class="change">
      <div class="changeInfo" @click="login()">确认修改</div>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";

export default {
  name: "Login",
  data() {
    return {
      pathAddressUrl: "/loansupermarket-api/usercenter/v1.0.1/web/",
      UserName: ""
    };
  },
  components: {
    Header
  },
  methods: {
    login() {
      var userNickname = this.UserName;
      let params = new URLSearchParams();
      params.append("userNickname", userNickname);
      params.append("userInformationId", this.$route.query.userInformationId);
      this.$ajax({
        method: "post",
        url: this.$url + "userInformation/updateById",
        params
      }).then(data => {
        this.$router.push({ path: "/account" });
      });
    }
  }
};
</script>
<style scoped>
.Login {
  width: 100%;
  height: 100vh;
  background-color: #fff;
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
  height: 80px;
  background-color: #fff;
  float: left;
}

.settings img {
      float: left;
    width: 4.667vw;
    margin: 2.133vw 3.2vw 0 2.333vw;
}

.settings ul li {
      width: 90%;
    height: 8.333vw;
    margin-left: 5%;
    margin-top: 4.4vw;
    border-radius: 7.933vw;
    border: solid 1px #cccccc;

}
.settings input {
      outline: none;
    border: none;
    height: 6.8vw;
    float: left;
}

.settings ul li:nth-child(3) {
  border: none;
}
.settings ul li:nth-child(3) span {
  display: inline-block;
  float: right;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #aaaaaa;
}

.change {
      width: 100%;
    height: 4.933vw;
    float: left;
    margin-top: 8vw;
    position: relative;
}

.changeInfo {
      width: 90%;
    height: 9.933vw;
    color: #ffffff;
    line-height: 9.333vw;
    text-align: center;
    background-color: #527eee;
    border-radius: 5.333vw;
    /* position: absolute; */
    /* left: 50%; */
    /* margin-left: -157px; */
    margin: 0 auto;
}
</style>

