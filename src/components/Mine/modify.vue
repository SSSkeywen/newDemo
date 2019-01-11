<template>
  <!-- 修改密码 -->
  <div class="modify">
    <div class="header">
      <mt-header title="修改密码">
        <router-link to="/Settings" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="settings">
      <ul>
        <li>
          <img src="/static/images/icon_input.png" alt>
          <input type="text" v-model="oldPassWord" placeholder="请输入原密码">
        </li>
        <li>
          <img src="/static/images/icon_set_password.png" alt>
          <input type="text" v-model="newPassWord" placeholder="请重新设置密码">
        </li>
        <li>
          <img src="/static/images/icon_password.png" alt>
          <input type="text" v-model="sureNewPassword" placeholder="请重新输入密码">
        </li>
      </ul>
    </div>

    <div class="change">
      <div class="changeInfo" @click="changePassword">修改密码</div>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";
import { Toast } from "mint-ui";
export default {
  name: "modify",
  data() {
    return {
      oldPassWord: "",
      newPassWord: "",
      sureNewPassword: ""
    };
  },
  components: { Header, Toast },
  methods: {
    changePassword() {
      if (this.oldPassWord == "") {
        Toast({
          message: "原始密码不能为空",
          position: "top",
          duration: 5000
        });
        return;
      }
      if (this.newPassWord == "") {
        Toast({
          message: "新密码不能为空",
          position: "top",
          duration: 5000
        });
        return;
      }
      if (this.newPassWord != this.sureNewPassword) {
        Toast({
          message: "两次密码不一致",
          position: "top",
          duration: 5000
        });
        return;
      }
      let accountCenterId = window.localStorage.getItem("accountCenterId");
      var params = new URLSearchParams();
      params.append("accountCenterId", accountCenterId);
      params.append("oldPassWord", this.oldPassWord);
      params.append("newPassWord", this.newPassWord);
      this.$ajax({
        method: "post",
        url:
          "/loansupermarket-api/usercenter/v1.0.1/web/accountCenter/changePassword",
        params
      }).then(data => {
        Toast({
          message: data.data.msg,
          position: "top",
          duration: 5000
        });
      });
    }
  }
};
</script>
<style scoped>
.modify {
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
  height: 42.4vw;
  background-color: #fff;
  float: left;
}

.settings img {
  float: left;
  width: 4.667vw;
  margin: 1.333vw 3.2vw 0 3.333vw;
}

.settings ul li {
  width: 90%;
  height: 9.333vw;
  margin-left: 5%;
  margin-top: 2.7vw;
  border-radius: 4.933vw;
  border: solid 1px #cccccc;
}
.settings input {
  outline: none;
  border: none;
  height: 7.8vw;
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
  width: 89vw;
  height: 7.933vw;
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
