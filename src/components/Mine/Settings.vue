<template>
  <!-- 账户设置 -->
  <div class="Settings">
    <div class="header">
      <mt-header title="账户设置">
        <router-link :to="{ path:'/' ,query :{selected:'我的'} }" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="message">
      <ul>
        <li>
          <img src="/static/images/icon_mobile_phone.png" alt>
          {{userTelephone}}
          <img src="/static/images/icon_next.png" class="arrawy" alt>
        </li>
        <li @click="modify()">
          <img src="/static/images/icon_change_password.png" alt>
          修改密码
          <img src="/static/images/icon_next.png" class="arrawy" alt>
        </li>
      </ul>
    </div>

    <div class="Push">
      <ul>
        <li>
          <img src="/static/images/icon_push.png" alt>
          推送通知
          <img src="/static/images/icon_next.png" class="arrawy" alt>
        </li>
        <li>
          <img src="/static/images/icon_clear_cache.png" alt>
          清除缓存
          <img src="/static/images/icon_next.png" class="arrawy" alt>
        </li>
      </ul>
    </div>

    <div class="Setout" @click="goExitFnTwo()">
      <div class="SignOut">退出登录</div>
    </div>
    <newAlert ref="alertComponent" @goExitFn="goExitFn"></newAlert>
  </div>
</template>
<script>
import { Header } from "mint-ui";
import newAlert from "../alert/newAlert";

export default {
  name: "Settings",
  data() {
    return {
      userTelephone: ""
    };
  },
  components: {
    Header,
    newAlert
  },
  created() {
    this.userTelephone = window.localStorage.getItem("userTelephone");
  },
  methods: {
    modify() {
      this.$router.push({ path: "/modify" });
    },
    goExitFnTwo() {
      this.$refs.alertComponent.openAlert();
    },
    goExitFn() {
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userInformationId");
      localStorage.removeItem("accountCenterId");
      localStorage.removeItem("userTelephone");
      window.location.reload();
      this.$router.push({ path: "/", query: { selected: "我的" } });
    }
  }
};
</script>

<style scoped>
.mint-header {
  background-color: #527eee;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
}

.Settings {
  width: 100%;
  height: 100vh;
  background-color: #eee;
}

.message,
.Push {
  width: 100%;
  height: 20vw;
  background-color: #fff;
}
.Push {
  margin-top: 14px;
}

.message img,
.Push img {
  width: 4.933vw;
  vertical-align: middle;
  margin-right: 1rem;
}

.message ul li,
.Push ul li {
  width: 95%;
  height: 10vw;
  margin-left: 5%;
  line-height: 10vw;
  border-bottom: 1px solid #eeeeee;
}
.message .arrawy,
.Push .arrawy {
  float: right;
  margin-top: 0.75rem;
  margin-right: 1rem;
}
.Setout {
  width: 100%;
  height: 10vw;
  background-color: #fff;
  color: #f61f1f;
  margin-top: 4.867vw;
  text-align: center;
  line-height: 10vw;
}
</style>


