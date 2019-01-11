<template>
  <!-- 建议反馈 -->
  <div class="proposal">
    <div class="header">
      <mt-header title="建议与反馈">
        <router-link :to="{ path:'/' ,query :{selected:'我的'} }" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="content">
      <ul>
        <li>请填写您的宝贵意见，我们会努力改进</li>
        <li>如果您在使用的过程中需要任何帮助，请联系 QQ：4275776363</li>
      </ul>
    </div>
    <div class="from">
      <textarea placeholder="请填写至少10个字的意见反馈，以便我们更好地帮助您" id="" cols="30" rows="10"></textarea>
    </div>
    <div class="phone">
      <input type="text" placeholder="请留下您的联系方式（选填）">
    </div>
    <div class="emial">
      <input type="text" placeholder="请输入您的电话或邮箱">
    </div>

    <div class="submit">
      <div class="submintInfo">提交反馈</div>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";

export default {
  name: "proposal",
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>
<style scoped>
.proposal {
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
.content {
  width: 90%;
  margin-left: 5%;
  color: #999999;
}
.content ul li {
  margin-top: 0.5rem;
  font-size: 1rem;
}

.from {
  width: 100%;
  height: 12.5rem;
  background-color: #fff;
  padding: 5px 15px;
  box-sizing: border-box;
}
.from textarea{
  width: 100%;
    height: 100%;
    border: none;
    outline: none;
}
.phone {
  width: 100%;
  height: 3.75rem;
  float: left;
}

.phone input {
  width: 90%;
  height: 3rem;
  margin-left: 5%;
  outline: none;
  border: none;
  margin-top: 5px;
  background-color: #eeeeee;
}
.emial {
  width: 100%;
  height: 3.75rem;
  float: left;
  background-color: #fff;
}

.emial input {
  width: 90%;
  height: 3rem;
  margin-left: 5%;
  outline: none;
  border: none;
  margin-top: 5px;
  font-size: 1rem;
}

.submit {
  width: 100%;
  height: 74px;
  float: left;
  margin-top: 51px;
  position: relative;
}

.submintInfo {
  width: 19rem;
  height: 3rem;
  background-color: #527eee;
  border-radius: 36px;
  position: absolute;
  left: 50%;
  margin-left: -9.5rem;
  color: #fff;
  text-align: center;
  line-height: 3rem;
}
</style>


