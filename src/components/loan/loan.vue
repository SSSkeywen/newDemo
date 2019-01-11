<template>
  <div class="loan">
    <!--贷款大全 -->
    <div class="headder">
      <mt-header title="贷款大全">
        <mt-button icon="back"></mt-button>
      </mt-header>
    </div>
    <div class="chioce">
      <div class="chioceNav">
        <ul>
          <li
            @click="getProductList()"
            :class="imgShow&&imgShow3&&imgShow5&&imgShow7?'secectBackground':''"
          >默认排序</li>
          <li @click="getshrink()" :class="imgShow?'':'secectBackground'">
            额度
            <img src="/static/images/icon_classification_nor.png" alt v-show="imgShow">
            <img src="/static/images/icon_open_nsel.png" alt v-show="imgShow2">
          </li>
          <li @click="getshrink2()" :class="imgShow3?'':'secectBackground'">
            期限
            <img src="/static/images/icon_classification_nor.png" alt v-show="imgShow3">
            <img src="/static/images/icon_open_nsel.png" alt v-show="imgShow4">
          </li>
          <li @click="getshrink3()" :class="imgShow5?'':'secectBackground'">
            类型
            <img src="/static/images/icon_classification_nor.png" alt v-show="imgShow5">
            <img src="/static/images/icon_open_nsel.png" alt v-show="imgShow6">
          </li>
          <li @click="getshrink4()" :class="imgShow7?'':'secectBackground'">
            筛选
            <img src="/static/images/icon_classification_nor.png" alt v-show="imgShow7">
            <img src="/static/images/icon_open_nsel.png" alt v-show="imgShow8">
          </li>
        </ul>
      </div>
      <!-- 默认排序 -->
      <div class="chioceFootrt" v-if="isShowSelectContent">
        <div class="mask" v-show="isShow1">
          <ul class="Quota">
            <li @click="getProductList()" v-bind:class="flag=='-1'?'secectBackground':''">不限额度</li>
            <li
              v-bind:class="flag==item.sortId?'secectBackground':''"
              v-for="item in periods"
              @click="getMoney(item.sortId,item.sortFrom,item.sortTo)"
            >{{item.sortFrom}}{{item.productCompany}}-{{item.sortTo}} {{item.productCompany}}</li>
          </ul>
        </div>
        <!-- 金额查询 -->
        <div class="mask" v-show="isShow2">
          <ul class="Quota">
            <li @click="getProductList()" v-bind:class="flag=='-1'?'secectBackground':''">不限期限</li>
            <li
              v-bind:class="flag==item.sortId?'secectBackground':''"
              v-for="item in limits"
              @click="getslip(item.sortId,item.sortFrom,item.sortTo,item.productCompany)"
            >{{item.sortFrom}}{{productCompany}} - {{item.sortTo}}{{item.productCompany}}</li>
          </ul>
        </div>
        <!-- 期限查询 -->
        <div class="mask" v-show="isShow3">
          <ul class="Quota">
            <li @click="getProductList()" v-bind:class="flag=='-1'?'secectBackground':''">不限类型</li>
            <li
              v-for="item in category"
              v-bind:class="flag==item.productCategoryDesc?'secectBackground':''"
              @click="getMole(item.productCategoryDesc)"
            >{{item.productCategoryDesc}}</li>
          </ul>
        </div>
        <!-- 综合筛选 -->
        <div class="mask" v-show="isShow4">
          <ul class="filtrate">
            <li class="sum">
              <p>金额</p>
              <ul>
                <li
                  v-for="item in periods"
                  v-bind:class="flaginfo==item.sortId?'secectBackgroundinfo':''"
                  @click="getConversionMoney(item.sortId,item.sortFrom,item.sortTo)"
                >{{item.sortFrom}}-{{item.sortTo}}</li>
              </ul>
            </li>
            <li class="deadline">
              <p>期限</p>
              <ul>
                <li
                  v-bind:class="flagBar==item.sortId?'secectBackgroundinfo':''"
                  @click="getConversionSlip(item.sortId,item.sortFrom,item.sortTo)"
                  v-for="item in limits "
                >{{item.sortFrom}}{{productCompany}} - {{item.sortTo}}{{item.productCompany}}</li>
              </ul>
            </li>
            <li class="genre">
              <p>类型</p>
              <ul>
                <li
                  v-for="item in category"
                  @click="getConversionMole(item.productCategoryDesc)"
                  v-bind:class="flagMole==item.productCategoryDesc?'secectBackgroundinfo':''"
                >{{item.productCategoryDesc}}</li>
              </ul>
            </li>
            <li>
              <div class="footbanner">
                <p @click="getRest()">重置</p>
                <p @click="submint()">完成</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
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
      <ul v-if="product.length != 0 && product!=''&& product!=undefined">
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
      <p class="available" v-else>暂时没有数据</p>
    </div>
  </div>
</template>
<script>
import { Navbar, TabItem } from "mint-ui";

export default {
  name: "loan",
  data() {
    return {
      isShowSelectContent: false,
      selected: "1",
      product: "",
      isShow: true,
      category: "",
      limits: "",
      periods: "",
      productCompany: "",
      flag: -1,
      flaginfo: -1,
      flagBar: -1,
      flagMole: -1,
      Money: [],
      Slip: [],
      Mole: [],
      numberOfPepole: "",
      isShow: true,
      isShow1: true,
      isShow2: true,
      isShow3: true,
      isShow4: true,
      //   切换图片
      imgShow: true,
      imgShow2: false,
      imgShow3: true,
      imgShow4: false,
      imgShow5: true,
      imgShow6: false,
      imgShow7: true,
      imgShow8: false
    };
  },
  components: {
    Navbar,
    TabItem
  },
  created() {
    this.getProductList();
    this.getType();
  },
  methods: {
    getRemove() {
      this.isShow = false;
    },
    // 获取类型ID
    getType() {
      var params = new URLSearchParams();
      params.append("pageNum", "1");
      params.append("pageSize", "10");
      this.$ajax({
        method: "post",
        url:
          "/loansupermarket-api/product/v1.0.1/web/conditionalOptions/findAll",

        params
      }).then(data => {
        var data = data.data.data;
        this.category = data.category.list.reverse();
        this.limits = data.limits.list.reverse();
        this.periods = data.periods.list.reverse();
        console.log(this.category);
      });
    },
    //   产品列表页面
    getProductList(productChannelId) {
      this.flag = "-1";
      this.selected = "1";
      this.isShowSelectContent = true;
      if (productChannelId != "" && productChannelId != undefined) {
        this.product = [];
        var params = new URLSearchParams();
        params.append("pageNum", "1");
        params.append("pageSize", "10");
        params.append("productChannelId", productChannelId);
        this.$ajax({
          method: "post",
          url:
            "/loansupermarket-api/product/v1.0.1/web/productInformation/queryPage",
          params
        }).then(data => {
          console.log(data);
          if (data.data.data) {
            for (let item of data.data.data.list) {
              item.numberOfPepole =
                item.productRegisterCount + item.productRegisterInitialize;
            }
            this.product = data.data.data.list;
            this.isShow1 = false;
            this.isShow2 = false;
            this.isShow3 = false;
            this.isShow4 = false;
            //控制显示金额
            this.imgShow = true;
            this.imgShow2 = false;
            //控制期限
            this.imgShow3 = true;
            this.imgShow4 = false;
            //控制类型
            this.imgShow5 = true;
            this.imgShow6 = false;
            //控制筛选
            this.imgShow7 = true;
            this.imgShow8 = false;
          }
        });
      } else {
        var params = new URLSearchParams();
        params.append("pageNum", "1");
        params.append("pageSize", "10");
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
          this.isShow1 = false;
          this.isShow2 = false;
          this.isShow3 = false;
          this.isShow4 = false;
          //控制显示金额
          this.imgShow = true;
          this.imgShow2 = false;
          //控制期限
          this.imgShow3 = true;
          this.imgShow4 = false;
          //控制类型
          this.imgShow5 = true;
          this.imgShow6 = false;
          //控制筛选
          this.imgShow7 = true;
          this.imgShow8 = false;
        });
      }
    },
    getdetils(id) {
      this.$router.push({ path: "/details", query: { productId: id } });
    },
    // 获取金额
    getMoney(sortId, sortFrom, sortTo) {
      this.flag = sortId;
      this.product = [];
      var params = new URLSearchParams();
      params.append("pageNum", "1");
      params.append("pageSize", "10");
      params.append("productLimitFrom", sortFrom);
      params.append("productLimitTo", sortTo);
      console.log(sortId, sortFrom, sortTo);
      this.$ajax({
        method: "post",
        url:
          "/loansupermarket-api/product/v1.0.1/web/productInformation/queryPage",
        params
      }).then(data => {
        if (
          data.data.data != "" &&
          data.data.data != null &&
          data.data.data != undefined
        ) {
          for (let item of data.data.data.list) {
            item.numberOfPepole =
              item.productRegisterCount + item.productRegisterInitialize;
          }
          this.product = data.data.data.list;
        }

        // this.selected = "1";
        this.isShow1 = false;
        this.imgShow = true;
        this.imgShow2 = false;
      });
    },
    //获取期限
    getslip(sortId, sortFrom, sortTo, productCompany) {
      this.flag = sortId;
      this.product = [];
      var params = new URLSearchParams();
      params.append("pageNum", "1");
      params.append("pageSize", "10");
      params.append("productLoanPeriodFrom", sortFrom);
      params.append("productLimitTo", sortTo);
      params.append("productCompany", productCompany);
      this.$ajax({
        method: "post",
        url:
          "/loansupermarket-api/product/v1.0.1/web/productInformation/queryPage",
        params
      }).then(data => {
        if (
          data.data.data != "" &&
          data.data.data != null &&
          data.data.data != undefined
        ) {
          for (let item of data.data.data.list) {
            item.numberOfPepole =
              item.productRegisterCount + item.productRegisterInitialize;
          }
          this.product = data.data.data.list;
        }

        this.selected = "1";
      });
      this.isShow2 = false;
      this.imgShow3 = true;
      this.imgShow4 = false;
      console.log(sortId, sortFrom, sortTo, productCompany);
    },
    // 获取类型
    getMole(productCategoryDesc) {
      this.product = [];
      this.flag = productCategoryDesc;
      var params = new URLSearchParams();
      params.append("pageNum", "1");
      params.append("pageSize", "10");
      params.append("productName", productCategoryDesc);

      this.$ajax({
        method: "post",
        url:
          "/loansupermarket-api/product/v1.0.1/web/productInformation/queryPage",
        params
      }).then(data => {
        if (
          data.data.data != "" &&
          data.data.data != null &&
          data.data.data != undefined
        ) {
          for (let item of data.data.data.list) {
            item.numberOfPepole =
              item.productRegisterCount + item.productRegisterInitialize;
          }
          this.product = data.data.data.list;
        }

        this.selected = "1";
        this.isShow3 = false;
        this.imgShow5 = true;
        this.imgShow6 = false;
      });
      console.log(productCategoryDesc);
    },
    // 筛选
    getConversionMoney(sortId, sortFrom, sortTo) {
      this.flaginfo = sortId;
      this.Money.push(sortFrom, sortTo);
      console.log(sortFrom, sortTo);
      console.log(this.Money);
    },
    getConversionSlip(sortId, sortFrom, sortTo) {
      this.flagBar = sortId;
      this.Slip.push(sortFrom, sortTo);
      console.log(sortFrom, sortTo);
      console.log(this.Slip);
    },
    getConversionMole(productCategoryDesc) {
      this.flagMole = productCategoryDesc;
      this.Mole.push(productCategoryDesc);
    },
    submint(Money, Slip, Mole) {
      console.log(this.Money[0]);
      console.log(this.Money, this.Slip, this.Mole);
      this.product = [];
      var params = new URLSearchParams();
      params.append("pageNum", "1");
      params.append("pageSize", "10");
      // 额度起
      params.append("productLimitFrom", this.Money[0]);
      //   额度止
      params.append("productLimitTo", this.Money[1]);
      //   贷款期限起
      params.append("productLoanPeriodFrom", this.Slip[0]);
      // 贷款期限止
      params.append("productLoanPeriodTo", this.Slip[1]);
      //   单位
      params.append("productCompany", this.Mole[0]);
      this.$ajax({
        method: "post",
        url:
          "/loansupermarket-api/product/v1.0.1/web/productInformation/queryPage",
        params
      }).then(data => {
        if (
          data.data.data != "" &&
          data.data.data != null &&
          data.data.data != undefined
        ) {
          for (let item of data.data.data.list) {
            item.numberOfPepole =
              item.productRegisterCount + item.productRegisterInitialize;
          }
          this.product = data.data.data.list;
        }

        this.selected = "1";
        this.isShow4 = false;
        this.imgShow7 = true;
        this.imgShow8 = false;
      });
    },
    getRest(Money, Slip, Mole) {
      this.Money = [];
      this.Slip = [];
      this.Mole = [];
      this.flaginfo = -1;
      this.flagBar = -1;
      this.flagMole = -1;
    },
    getshrink() {
      this.isShow1 = !this.isShow1;
      this.imgShow = !this.imgShow;
      this.imgShow2 = !this.imgShow2;
      this.isShow2 = false;
      this.isShow3 = false;
      this.isShow4 = false;
      //   控制期限的icon状态
      this.imgShow3 = true;
      this.imgShow4 = false;
      //   控制类型icon的状态
      this.imgShow5 = true;
      this.imgShow6 = false;
      //   控制筛选icon的状态
      this.imgShow7 = true;
      this.imgShow8 = false;
    },
    getshrink2() {
      this.isShow2 = !this.isShow2;
      this.isShow1 = false;
      this.isShow3 = false;
      this.isShow4 = false;
      //   切换图片
      this.imgShow3 = !this.imgShow3;
      this.imgShow4 = !this.imgShow4;
      //   控制金额的icon状态
      this.imgShow = true;
      this.imgShow2 = false;
      //   控制类型icon的状态
      this.imgShow5 = true;
      this.imgShow6 = false;
      //   控制筛选icon的状态
      this.imgShow7 = true;
      this.imgShow8 = false;
    },
    getshrink3() {
      this.isShow3 = !this.isShow3;
      this.isShow1 = false;
      this.isShow2 = false;
      this.isShow4 = false;
      //   切换图片
      this.imgShow5 = !this.imgShow5;
      this.imgShow6 = !this.imgShow6;
      //控制期限
      this.imgShow3 = true;
      this.imgShow4 = false;
      //   控制金额的icon状态
      this.imgShow = true;
      this.imgShow2 = false;
      //   控制筛选icon的状态
      this.imgShow7 = true;
      this.imgShow8 = false;
    },
    getshrink4() {
      this.isShow4 = !this.isShow4;
      this.isShow1 = false;
      this.isShow2 = false;
      this.isShow3 = false;
      //   切换图片
      this.imgShow7 = !this.imgShow7;
      this.imgShow8 = !this.imgShow8;
      //   切换图片
      this.imgShow3 = true;
      this.imgShow4 = false;
      //   控制金额的icon状态
      this.imgShow = true;
      this.imgShow2 = false;

      //   控制类型icon的状态
      this.imgShow5 = true;
      this.imgShow6 = false;
    }
  }
};
</script>
<style scoped>
.loan {
  width: 100%;
  height: 100vh;
  padding-bottom: 70px;
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

.chioce img {
  width: 2.111vw;
}

.Tagging {
  width: 100%;
  height: 8vw;
}

.Tagging ul li {
  font-family: MicrosoftYaHei;
  font-size: 1.333vw;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #999999;
  line-height: 8vw;
  margin-left: 5%;
}
.Tagging img {
  width: 2.6vw;
  float: right;
  margin-top: 3vw;
  margin-right: 5%;
}

.Quota {
  width: 100%;
  height: auto;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}

.Quota li {
  width: 100%;
  height: 12.25vw;
  font-size: 4vw;
  color: #999999;
  line-height: 12.25vw;
  margin-left: 5%;
}

.chioceFootrt {
  margin-top: 1.333vw;
  position: absolute;
  width: 100%;
  /* border-bottom: 1px solid #999; */
  position: absolute;
  width: 100%;
}

.showing {
  width: 100%;
  height: 120px;
  background-color: #fff;
  margin-top: 5px;
}

.ShowInfo {
  width: 95%;
  height: 11.867vw;
  margin-left: 5%;
  margin-top: 3.333vw;
  float: left;
}

/* 原型搬运 */
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
  font-size: 1.6vw;
}
.ShowInfo .one {
  margin-left: 5%;
}
.ShowInfo img {
  width: 30px;
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
  font-size: 2vh;
}
.Show1 span {
  font-size: 12px;
}

.Show2 {
  margin-left: 5%;
}
.Show2 ul li {
  float: left;
  font-size: 12px;
}

.Show3 {
  text-align: center;
}

.Show3 p {
  width: 24vw;
  height: 7.867vw;
  color: #fff;
  font-size: 1.867vw;
  text-align: center;
  line-height: 7.867vw;
  background-color: #527eee;
  border-radius: 3.733vw;
  float: right;
}

.Show3 span {
  font-size: 12px;
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
.filtrate {
  width: 100%;
  height: 67vh;
  background-color: #fff;
}
.filtrate p {
  width: 90%;
  margin-top: 2.083vw;
  margin-left: 5%;
  height: 5.778vw;
  float: left;
}
.filtrate li {
  width: 100%;
}

.filtrate .sum ul li {
  width: 30%;
  height: 7.889vw;
  line-height: 7.889vw;
  float: left;
  text-align: center;
  font-size: 3.944vw;
  background-color: #f8f8f8;
  margin-left: 2%;
  border-radius: 5.75vw;
  margin-top: 3.083vw;
}
.filtrate .deadline ul li {
  width: 30%;
  height: 8.889vw;
  line-height: 8.889vw;
  float: left;
  text-align: center;
  font-size: 3.944vw;
  background-color: #f8f8f8;
  margin-left: 2%;
  border-radius: 3.75vw;
  margin-top: 3.083vw;
}
.filtrate .genre ul li {
  width: 30%;
  height: 8.889vw;
  line-height: 8.889vw;
  float: left;
  text-align: center;
  font-size: 1.944vw;
  background-color: #f8f8f8;
  margin-left: 2%;
  border-radius: 4.75vw;
  margin-top: 3.083vw;
}
.filtrate .footbanner {
  width: 100%;
  margin-top: 15px;
  float: left;
  position: relative;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
}
.chioce .filtrate .footbanner p {
  width: 40%;
  float: left;
  text-align: center;
  margin-bottom: 2.083vw;
  font-size: 2.4vh;
}
.secectBackground {
  color: #527eee !important;
}
.secectBackgroundinfo {
  color: #fff;
  background-color: #527eee !important;
}

.showing .available {
  text-align: center;
  line-height: 110px;
}
.Show3 strong {
  color: #fa3131;
}

.mask {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
}

/* 顶部导航 */
.chioceNav ul {
  width: 100%;
  height: 8vh;
  background-color: #fff;
}
.chioceNav ul li {
  float: left;
  width: 20%;
  text-align: center;
  font-size: 1.867vw;
  padding-top: 20px;
}
</style>

