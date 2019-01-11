<template>
  <div class="home">
    <!-- 首页 -->
    <div class="headder">
      <mt-header title="首页">
        <mt-button icon="back">返回</mt-button>
      </mt-header>
    </div>
    <div class="titel">
      <ul class="clearfix">
        <li v-for="item in getChannel " @click="getChannelFn(item.productChannelId)">
          <img :src="item.productChannelPicturePath" alt>
          <p>{{item.productChannelName}}</p>
        </li>
      </ul>
    </div>
    <div class="titelInfo"></div>
    <!-- 广告部分 -->
    <div class="Advertisement">
      <ul class="clearfix">
        <li v-for="item in arr" @click="getdetils(item.productId)">
          <div class="content">
            <h6>{{item.productName}}</h6>
            <p>利率:{{item.productInterestRate}}%</p>
            <span>额度:{{item.productLimitFrom}}-{{item.productLimitTo}}/月</span>
          </div>
          <img :src="item.productPicture" alt>
        </li>
      </ul>

      <span class="line"></span>
    </div>
    <!-- 型号选择部分 -->
    <div class="chioce" @click="getsearch()">
      <ul class="clearfix">
        <li>默认排序</li>
        <li>
          额度
          <img src="/static/images/icon_classification_nor.png" alt>
        </li>
        <li>
          期限
          <img src="/static/images/icon_classification_nor.png" alt>
        </li>
        <li>
          类型
          <img src="/static/images/icon_classification_nor.png" alt>
        </li>
        <li>
          筛选
          <img src="/static/images/icon_classification_nor.png" alt>
        </li>
      </ul>
    </div>
    <div class="Tagging" v-show="isShow">
      <ul>
        <li>
          注：产品审批下款率高，不妨多申请试试。
          <img src="/static/images/icon_close.png" alt @click="getRemove()">
        </li>
      </ul>
    </div>
    <div class="showing">
      <ul>
        <li v-for="item in product" class="infomation clearfix" @click="getdetils(item.productId)">
          <div class="ShowInfo">
            <img :src="item.productPicture" alt>
            <p>{{item.productName}}</p>

            <span class="one" v-for="arr in productCategory">{{arr}}</span>
          </div>
          <div class="ShowBaner">
            <div class="Show1">
              <P>{{item.productLimitFrom}}-{{item.productLimitTo}}</P>
              <span>额度范围（元）</span>
            </div>
            <div class="Show2">
              <ul class="clearfix">
                <li>放款时长：{{item.productTransactionTime}}</li>
                <li>利率：{{item.productInterestRate}}%</li>
                <li>贷款期限：{{item.productLoanPeriodFrom}}-{{item.productLoanPeriodTo}}/月</li>
              </ul>
            </div>
            <div class="Show3">
              <p>立即申请</p>
              <span>
                已有
                <strong>{{item.numberOfPepole}}</strong>
                人申请
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";

export default {
  name: "HomePage",
  data() {
    return {
      arr: "",
      getChannel: "",
      isShow: true,
      product: "",
      numberOfPepole: "",
      productCategory: ""
    };
  },
  components: {
    Header
  },
  created() {
    this.getAdvice();
    this.Channel();
    this.getProductList();
  },
  methods: {
    //   广告信息接口
    getAdvice() {
      var params = new URLSearchParams();
      params.append("pageNum", "1");
      params.append("pageSize", "5");
      this.$ajax({
        method: "post",
        url:
          "/loansupermarket-api/product/v1.0.1/web/productAdvertising/queryPage",
        params
      }).then(data => {
        this.arr = data.data.data.list;
      });
    },

    // 频道信息接口
    Channel() {
      var params = new URLSearchParams();
      params.append("pageNum", "1");
      params.append("pageSize", "10");
      this.$ajax({
        method: "post",
        url: "/loansupermarket-api/product/v1.0.1/web/productChannel/queryPage",
        params
      }).then(data => {
        this.getChannel = data.data.data.list;
      });
    },
    getChannelFn(productChannelId) {
      this.$emit("getChange", "贷款大全", productChannelId);
    },
    getsearch() {
      this.$emit("getsearch", "贷款大全");
    },
    getRemove() {
      this.isShow = false;
    },
    // 列表信息
    getProductList() {
      var params = new URLSearchParams();
      params.append("pageNum", "1");
      params.append("pageSize", "2");
      this.$ajax({
        method: "post",
        url:
          "/loansupermarket-api/product/v1.0.1/web/productInformation/queryPage",
        params
      }).then(data => {
        for (let item of data.data.data.list) {
          item.numberOfPepole =
            item.productRegisterCount + item.productRegisterInitialize;
        }
        this.product = data.data.data.list;
        this.productCategory = data.data.data.list[0].productCategory.split(
          ","
        );
        console.log(this.productCategory);
      });
    },
    getdetils(id) {
      this.$router.push({ path: "/details", query: { productId: id } });
    }
  }
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background-color: #eee;
  padding-bottom: 70px;
  box-sizing: border-box;
  overflow-y: auto;
}
.mint-header {
  height: 7vh;
  background-color: #527eee;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
}
.titel {
  padding-bottom: 2vh;
}
.titel,
.titelInfo {
  width: 100%;
  background-color: #fff;
}
.titel ul li {
  float: left;
  width: 20%;
  /* height: 12.333vw; */
  text-align: center;
  font-family: MicrosoftYaHei;
  font-size: 2vh;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #999999;
}

.titel ul li {
  margin-top: 3vh;
}

.titel img,
.titelInfo img {
  width: 6vh;
}

.Advertisement {
  width: 100%;
  /* height: 22.2vw; */
  background-color: #fff;
  margin-top: 1vh;
  position: relative;
  padding: 2vh 4vh;
  box-sizing: border-box;
}
.Advertisement ul {
  display: flex;
  justify-content: space-between;
}
.Advertisement ul li {
  /* float: left; */
  /* margin-top: 10px; */
  display: flex;
  justify-content: space-between;
  padding-right: 3vh;
}
.Advertisement ul li img {
  width: 6vh;
  height: 6vh;
  position: relative;
  top: 1vh;
}

.Advertisement .content {
  width: 71%;

  /* height: 78px; */
  /* float: left; */
}
.Advertisement .contentInfo {
  width: 70%;
  height: 78px;
  float: left;
}
.content h6 {
  font-family: MicrosoftYaHei;
  font-size: 2vh;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0vh;
  color: #333333;
}

.Advertisement .line {
  display: inline-block;
  width: 1px;
  height: 9vh;
  background-color: #cccccc;
  position: absolute;
  left: 50%;
  top: 2vh;
}

.content p,
.contentInfo p {
  font-family: MicrosoftYaHei;
  font-size: 2vh;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0vh;
  color: #999999;
  margin-top: 0.7vh;
}
.content span,
.contentInfo span {
  font-family: MicrosoftYaHei;
  font-size: 1.7vh;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0vh;
  color: #999999;
  margin-top: 0.2vh;
  display: block;
}

.Advertisement ul li:nth-child(1) {
  width: 50%;
  /* height: 60px; */
  /* margin-left: 5%; */
}

.Advertisement ul li:nth-child(3) {
  width: 40%;
  /* height: 60px; */
  /* margin-left: 5%; */
}
.Advertisement ul li:nth-child(2) {
  width: 50%;
  padding-right: 0;
  padding-left: 3vh;
  /* height: 60px; */
  /* margin-left: 10%; */
}

.chioce {
  width: 100%;
  /* height: 10vw; */
  background-color: #fff;
  margin-top: 1vh;
}
.chioce ul {
  /* margin-left: 5%; */
}
.chioce ul li {
  width: 20%;
  /* height: 6vw;s */
  float: left;
  color: #999999;
  line-height: 10vw;

  font-family: MicrosoftYaHei;
  font-size: 2vh;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0vh;
  text-align: center;
}
.chioce img {
  width: 2.067vw;
}

.Tagging {
  width: 100%;
  height: 5vh;
}
.Tagging ul li {
  font-family: MicrosoftYaHei;
  font-size: 2vh;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0vh;
  color: #999999;
  margin-left: 5%;
  line-height: 5vh;
}
.Tagging img {
  width: 2vh;
  float: right;
  margin-top: 1.5vh;
  margin-right: 2.03vh;
}

.showing {
  width: 100%;
  /* height: 120px; */
  background-color: #fff;
}

.ShowInfo {
  width: 95%;
  /* height: 11.867vw; */
  margin-left: 2.4vh;
  margin-top: 1.5vh;
  float: left;
}

/* 原型搬运 */
.ShowInfo img {
  float: left;
}
.ShowInfo p {
  /* width: 13vw; */
  /* height: 1.867vw; */
  font-family: MicrosoftYaHei;
  /* font-size: 2.867vw; */
  /* font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333; */
  float: left;
  margin-left: 1.13vh;
  margin-top: 0.53vh;
  font-size: 2.19vh;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0vh;
  color: #333333;
}
.ShowInfo span {
  display: inline-block;
  text-align: center;
  line-height: 2.85vh;
  margin-top: 0.667vw;
  font-size: 2.5vw;
  width: 8.7vh;
  height: 2.85vh;
  border-radius: 2.85vh;
  border: solid 1px #999999;
  font-size: 1.41vh;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0vh;
  color: #999999;
  /* padding: 0.7vh 1.5vh; */
  /* box-sizing: border-box; */
}
.ShowInfo .one {
  margin-left: 1.53vh;
}
.ShowInfo img {
  width: 3.45vh;
}
.ShowBaner {
  width: 95%;
  margin-left: 2.7vh;
  /* height: 6.667vw; */
  float: left;
  margin-top: 0.45vh;
}
.Show1,
.Show2,
.Show3 {
  width: 30%;
  /* height: 11.667vw; */
  float: left;
}

.Show1 {
  border-right: 1px solid #eeeeee;
  padding-top: 1.5vh;
}
.Show1 p {
  font-size: 2.19vh;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0vh;
  color: #fa3131;
}
.Show1 span {
  font-family: MicrosoftYaHei;
  font-size: 1.56vh;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0vh;
  color: #999999;
}

.Show2 {
  margin-left: 3.9vh;
  margin-top: 0.38vh;
}
.Show2 ul li {
  float: left;
  font-size: 1.56vh;
  margin-top: 0.8vh;
  line-height: 1.56vh;
}

.Show3 {
  text-align: center;
}

.Show3 p {
  width: 24vw;
  height: 7.867vw;
  color: #fff;
  font-size: 2.5vw;
  text-align: center;
  line-height: 7.867vw;
  background-color: #527eee;
  border-radius: 3.733vw;
  float: right;
  width: 11.78vh;
  height: 4.58vh;
  line-height: 4.58vh;
  background-color: #527eee;
  border-radius: 2.23vh;
  font-family: MicrosoftYaHei;
  font-size: 1.87vh;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0vh;
  color: #ffffff;
}

.Show3 span {
  font-size: 2.6vw;
  display: inline-block;
  float: right;
  margin-right: 1vw;
  margin-top: 0.5vh;
}

.infomation {
  width: 100%;
  background-color: #fff;
  padding-bottom: 2.03vh;
  border-bottom: 1px solid #eee;
}

.chioce ul li:nth-child(1) {
  color: #527eee;
}

.Show3 strong {
  color: #fa3131;
}
</style>


