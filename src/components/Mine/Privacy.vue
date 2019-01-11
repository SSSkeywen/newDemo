<template>
  <div class="Privacy">
    <!-- 隐私 -->
    <div class="header">
      <mt-header title="隐私协议">
        <router-link :to="{ path:'/' ,query :{selected:'我的'} }" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="content">
      <p>
        贷款超市尊重和保护用户的隐私。本隐私政策将告诉
        您我们如何收集和使用有关您的信息，以及我们如何
        保护这些信息的安全。
        您成为贷款超市用户前务必仔细阅读本隐私条款并同
        意所有隐私条款。本隐私政策条款在您注册成为贷款
        超市用户后立即生效，并对您及借款产生约束力。
        一、我们可能收集的用户信息
        我们提供服务时，可能会收集、储存和使用下列与您
        有关的信息。如果您不提供相关信息，可能无法注册
        成为我们的用户或无法享受我们提供的某些服务，或
        者无法达到相关服务拟达到的效果。
        1、您提供的信息
        • 您在注册账户或使用我们的服务时，向我们提供的
        相关个人信息，例如电话号码、身份证号码、银行
        卡号等。
        • 您通过我们的服务向其他方提供的共享信息，以及
        您使用我们的服务时所储存的信息。
        2、其他方分享的您的信息
        • 其他方使用我们的服务时所提供有关您的共享信息。
        3、我们获取的您的信息
        您使用服务时我们可能收集如下信息：
        • 日志信息，指您使用我们的服务时，系统可能通过
        cookies、web beacon或其他方式自动采集的技
        术信息，包括：设备或软件信息，例如您的移动设
        备、网页浏览器或用于接入我们服务的其他程序所提
        供的配置信息、您的IP地址和移动设备所用的版本和
        设备识别码；以及您在使用我们服务时要求提供的其
        他信息和内容详情。
        • 位置信息，指您开启设备定位功能并使用我们基于
        位置提供的相关服务时，收集的有关您位置的信息。
        您可以通过关闭定位功能，停止对您的地理位置信息
        的收集。
        • 交易信息，指我们对您在借款平台上形成的交
        易数据信息进行分析并形成用户信用数据库。
        4、合作机构提供的您的信息
        • 我们会通过第三方机构（包括但不限于通过合法的
        征信机构个人信用信息基础数据库及外部数据）查
        询您的信用报告中的身份、联系方式等个人身份、
        电信信息、地址、位置等基本信息和关联人信息以
        及个人贷款、各类信用卡和对外担保等信用及在商
        业活动中形成的各类交易记录，个人信贷交易信息
        及公共费用缴纳、违法违规信息及非银行类信息的
        其他信息，获取的您的肖像、工作情况、收入情况、
        家庭情况、社会关系情况、招聘应聘以及您在信用
        头条的交易记录和使用信息等。
      </p>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";

export default {
  name: "Privacy",
  data() {
    return {};
  },
  components: {
    Header
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

.content {
  width: 100%;
  color: #666666;
}
.content p {
  width: 90%;
  margin-left: 5%;
  font-family: MicrosoftYaHei;
  margin-top: 20px;
  margin-bottom: 200px;
}
</style>


