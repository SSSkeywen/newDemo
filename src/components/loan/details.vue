<template>
  <div class="detils">
    <div class="headder">
      <mt-header title="微贷网">
        <router-link :to="{ path:'/' ,query :{selected:'贷款大全'} }" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="area">
      <img src="/static/images/bg_loan_details.png" alt>
      <p class="rangeInfo">额度范围</p>
      <p class="range">{{Content.productLimitFrom}}-{{Content.productLimitTo}}</p>
      <div class="title">
        <ul>
          <li>
            <p>{{Content.productInterestRate}}%/{{Content.productCompany}}</p>
            <span>利率</span>
          </li>
          <li>
            <p>{{Content.productLoanPeriodFrom}}天-{{Content.productLoanPeriodTo}}天</p>
            <span>贷款期限</span>
          </li>
          <li>
            <p>{{Content.productTransactionTime}}</p>
            <span>放款时长</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="chance" v-show="isShow">
      <h6>贷款条件</h6>
      <span class="line"></span>
      <ul>
        <li v-for="item in productLoanCondition " :key="item">
          <div class="circle"></div>
          <p>{{item}}</p>
        </li>
      </ul>
    </div>
    <div class="chanceInfo" v-show="isShow">
      <h6>申请资料</h6>
      <span class="line"></span>
      <ul>
        <li v-for="item in productRegisterForm " :key="item">
          <div class="circle"></div>
          <p>{{item}}</p>
        </li>
      </ul>
    </div>
    <div class="rest" v-show="isShow">
      <h6>其他</h6>
      <span class="line"></span>
      <ul>
        <li>
          <div class="circle"></div>
          <p>{{productOthers}}</p>
        </li>
      </ul>
    </div>
    <div class="pack">
      <p @click="getPack()">收起更多详情</p>
    </div>

    <div class="showing">
      <h6>同类贷款产品推荐</h6>
      <span class="line"></span>
      <ul>
        <li v-for="item in product" class="infomation" @click="getdetils(item.productId)">
          <div class="ShowInfo">
            <img :src="item.productPicture" alt>
            <p>{{item.productName}}</p>
            <span class="one">大额贷款</span>
            <span>不看征信</span>
            <span>10分钟下款</span>
          </div>
          <div class="ShowBaner">
            <div class="Show1">
              <P>{{item.productLimitFrom}}-{{item.productLimitTo}}</P>
              <span>额度范围（元）</span>
            </div>
            <div class="Show2">
              <ul>
                <li>放款时长：{{item.productTransactionTime}}</li>
                <li>利率：{{item.productInterestRate}}%/月</li>
                <li>贷款期限：{{item.productLoanPeriodFrom}}-{{item.productLoanPeriodTo}}</li>
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

    <div class="apply">
      <p class="applyInfo">立即申请</p>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";
export default {
  name: "detils",
  data() {
    return {
      Content: "",
      productLoanCondition: "",
      productRegisterForm: "",
      productOthers: "",
      isShow: true,
      product: "",
      numberOfPepole: ""
    };
  },
  components: {
    Header
  },
  mounted() {
    var id = this.$route.query.productId;
    console.log(id);
    var params = new URLSearchParams();
    params.append("productId", id);
    this.$ajax({
      method: "post",
      url:
        "/loansupermarket-api/product/v1.0.1/web/productInformation/findById",
      params
    }).then(data => {
      console.log(data);
      var data = data.data.data;
      this.Content = data;
      this.productLoanCondition = data.productLoanCondition.split(",");
      this.productRegisterForm = data.productRegisterForm.split(",");
      this.productOthers = data.productOthers;
      console.log(this.Content);
    });
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
    });
  },
  methods: {
    getPack() {
      this.isShow = !this.isShow;
    },
    getdetils(id) {
      this.$router.push({ path: "/details", query: { productId: id } });
    }
  }
};
</script>
<style scoped>
.detils {
  width: 100%;
  height: auto;
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

.area {
  width: 100%;
  height: 40.667vw;
  position: relative;
  background-color: #fff;
}
.area img {
  width: 100%;
  margin-top: 1px;
}
.area .range {
  color: #fff;
  width: 24.667vw;
  height: 5.4vw;
  position: absolute;
  left: 50%;
  margin-left: -12.333vw;
  top: 9.333vw;
  text-align: center;
  font-size: 4.4vw;
}

.area .rangeInfo {
  color: #fff;
  width: 25.667vw;
  height: 2.4vw;
  position: absolute;
  left: 50%;
  margin-left: -13.333vw;
  top: 1.6vw;
  text-align: center;
  font-size: 3.867vw;
}
.title {
  width: 90%;
  height: 15vw;
  background-color: #fff;
  border: solid 1px #cccccc;
  position: absolute;
  left: 50%;
  margin-left: -45%;
  top: 20.667vw;
}

.title ul li {
  float: left;
  width: 30%;
  text-align: center;
}

.title ul li p {
  font-size: 4.4vw;
  color: #527eee;
  margin-top: 2.267vw;
}
.title ul li span {
  display: inline-block;
  font-size: 2.5vw;
  color: #999999;
  margin-top: 8px;
}

.chance,
.chanceInfo,
.rest {
  width: 100%;
  height: 42vw;
  background-color: #fff;
}
.chanceInfo {
  margin-top: 8px;
}
.rest {
  margin-top: 1.067vw;
  height: 23.333vw;
}
.chance p,
.chanceInfo p,
.rest p {
  width: 90%;
  margin-left: 5%;
  color: #666666;
  font-size: 2.4vw;
  font-size: 3.867vw;
  margin-top: 1vh;
}
.chance ul li,
.chanceInfo ul li,
.rest ul li {
  margin-left: 5%;
  margin-top: 8px;
  color: #666666;
}

.circle {
  width: 1.533vw;
  height: 1.533vw;
  border-radius: 0.533vw;
  background-color: #999999;
  float: left;
  margin-right: 1.333vw;
  margin-top: 1.067vw;
}
.chance h6,
.chanceInfo h6,
.rest h6 {
  font-family: MicrosoftYaHei;
  font-size: 4vw;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
  margin-left: 5%;
}

.chanceInfo h6,
.rest h6 {
  margin-top: 10px;
  float: left;
}

.line {
  width: 100%;
  height: 1px;
  display: inline-block;
  border-bottom: 1px solid #eeeeee;
}
.pack {
  width: 100%;
  text-align: center;
  font-family: MicrosoftYaHei;
  font-size: 2.8vw;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0px;
  color: #999999;
  margin: 0 auto;
  background-color: #fff;
}
.showing {
  width: 100%;
  background-color: #fff;
  margin-top: 8px;
}
.ShowInfo {
  width: 95%;
  height: 11.867vw;
  margin-left: 5%;
  margin-top: 3.333vw;
  float: left;
}
.ShowInfo img {
  float: left;
}
.ShowInfo p {
  width: 13vw;
  height: 1.867vw;
  font-family: MicrosoftYaHei;
  font-size: 2.867vw;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
  float: left;
  margin-left: 1.867vw;
  margin-top: 0.933vw;
}
.ShowInfo span {
  display: inline-block;
  width: 19.467vw;
  height: 5.667vw;
  border-radius: 2.4vw;
  border: solid 1px #999999;
  text-align: center;
  line-height: 5.667vw;
  margin-top: 0.667vw;
  font-size: 2.5vw;
}
.ShowInfo .one {
  margin-left: 5%;
}
.ShowInfo img {
  width: 6vw;
}
.ShowBaner {
  width: 95%;
  margin-left: 5%;
  height: 6.667vw;
  float: left;
}

.Show1,
.Show2,
.Show3 {
  width: 30%;
  height: 11.667vw;
  float: left;
}

.Show1 {
  border-right: 1px solid #eeeeee;
}
.Show1 p {
  color: #fa3131;
  font-size: 2.5vh;
}
.Show1 span {
  font-size: 2.5vw;
}

.Show2 {
  margin-left: 5%;
}
.Show2 ul li {
  float: left;
  font-size: 2.5vw;
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
}
.Show3 span {
  font-size: 2.8vw;
  display: inline-block;
  float: right;
  margin-top: 4px;
}
.infomation {
  width: 100%;
  height: 30vw;
  margin-bottom: 1.333vw;
  background-color: #fff;
}
.showing h6 {
  margin-top: 3.333vw;
  float: left;
  font-family: MicrosoftYaHei;
  font-size: 4vw;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
  margin-left: 5%;
}
.apply {
  width: 100%;
  height: 10.333vw;
  float: left;
  position: relative;
  margin-top: 1vw;
  margin-bottom: 4vw;
}
.applyInfo {
  width: 90%;
  position: absolute;
  left: 50%;
  color: #fff;
  height: 9.333vw;
  line-height: 9.333vw;
  text-align: center;
  margin-left: -45%;
  background-color: #527eee;
  border-radius: 4.933vw;
}

.Show2 ul li {
  color: #999999;
}
.Show1 span {
  color: #999999;
}
.Show3 span {
  color: #999999;
}

.ShowInfo {
  color: #999999;
}

.Show3 strong {
  color: #fa3131;
}
</style>
