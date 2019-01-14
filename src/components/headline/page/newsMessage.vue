<template>
  <div ref="newsBox" class="new-box">
    <header>
      <p class="h-header-title" @click="goBank">
        <img :src="bankImgSrc" width="100%">
      </p>
      <div class="h-header-search">
        <p>贷款频道</p>
      </div>
      <div class="h-header-search-gps">
        <div class="h-header-search-gps-img">
          <img :src="secondsImgSrc" width="100%">
        </div>
      </div>
    </header>
    <div class="news-content">
      <hgroup class="news-title">亚洲最穷国家之一，独立16年货币上印有汉字，获得我国大量援助</hgroup>
      <div class="news-author">
        <p>2017-09-20 12:55</p>
        <p>作者：某某</p>
        <div>
          <img :src="starImgSrc" width="100%">
        </div>
      </div>
      <!-- content star -->
      <div></div>
    </div>
    <!-- dwon star -->
    <div class="news-label">
      <p>金融</p>
    </div>

    <!-- 举报 -->
    <div class="news-report">
      <p class="news-report-p">声明：本文的版权归原作者所有，文章言论观点不代表信用头条的观点，信用头条不承担任何法律责任。</p>
      <div class="news-report-btn">
        <div>
          <img :src="reportImgSrc" alt>
        </div>
        <p>举报</p>
      </div>
    </div>

    <!-- next page -->
    <div class="news-next">
      <p>上一篇：P2P老板跑路前有先兆，百万招募“监控官” 网贷百万招募“监控官” 网贷百万招募“监控官” 网贷</p>
      <p>下一篇：高收益伴随高风险：千家跑路平台收益高出正常平...</p>
    </div>

    <div style="width:100%;height:16px;background-color: #eeeeee;"></div>
    <div class="news-apply">
      <div class="news-apply-div">
        <div class="news-apply-img">
          <img :src="applyLeftImgSrc" width="100%">
        </div>
        <div class="news-apply-content">
          <p>贷款申请</p>
          <p>简单、高效</p>
        </div>
      </div>
      <div class="news-apply-div">
        <div class="news-apply-content">
          <p>贷款申请</p>
          <p>简单、高效</p>
        </div>
        <div class="news-apply-img">
          <img :src="applyRightImgSrc" width="100%">
        </div>
      </div>
    </div>
    <div style="width:100%;height:16px;background-color: #eeeeee;"></div>
    <div>
      <div class="news-recommend">
        <div></div>
        <p>相关推荐</p>
      </div>
      <ul class="h-list-ul">
        <li class="h-list-li" @click="lookMessagePage()">
          <contentList></contentList>
        </li>
      </ul>
    </div>
    <div style="width:100%;height:16px;background-color: #eeeeee;"></div>
    <div>
      <div class="news-recommend">
        <div></div>
        <p>最新评论</p>
      </div>
      <div class="no-have-box" v-if="false">
        <div class="no-have-comnet">
          <img :src="noHaveCommnetImgSrc" width="100%">
        </div>
        <p class="no-comnet-text">暂无评论，快来抢沙发吧~</p>
      </div>
      <div class="no-have-box" v-else>
        <ul class="comment-ul">
          <li>
            <div class="comment-tuxiang">
              <img :src="goHomeIconSrc" width="100%">
            </div>
            <div class="comment-content">
                <div class="comment-name">
                    <p class="comment-name-p">188****3186</p>
                    <div class="commnet-good">
                        <div>
                            <img :src="goodOneIconSrc" width="100%">
                        </div>
                        <p>赞</p>
                    </div>
                </div>
                <p class="comment-content-font">网贷有风险，投资需谨慎！网贷有风险，投资</p>
                <div class="comment-content-time">
                    <p>09-20  09:20</p>
                    <p>回复</p>
                </div>
                <p class="comment-comment">188****6645：网贷有风险，投资需谨慎！</p>
            </div>
          </li>
        </ul>
        <p class="no-comnet-text" v-if="false">没有更多啦~</p>
        <p class="no-comnet-text look-add-comment" v-else>查看更多评论></p>
      </div>
      <div class="comnet-text">
        <div class="comnet-input" @click="toCompile">
          <input type="text" placeholder="发表一下您的看法吧！">
        </div>
        <div class="comnet-icon">
          <img :src="messageCommnetImgSrc" width="100%">
        </div>
      </div>
    </div>
    <div style="width:100%;height:16px;background-color: #eeeeee;"></div>
    <div>
      <div class="news-recommend">
        <div></div>
        <p>贷款服务</p>
      </div>
      <ul class="news-servier">
        <li>
          <div>
            <img :src="loanImgSrc" width="100%">
          </div>
          <p>身份证贷</p>
        </li>
      </ul>
    </div>
    <div style="width:100%;height:16px;background-color: #eeeeee;"></div>
    <div>
      <div class="news-recommend">
        <div></div>
        <p>网站地图</p>
      </div>
      <ul class="news-servier">
        <li>
          <p class="news-gps">首页</p>
        </li>
      </ul>
    </div>
    <div class="news-bottom">
      <ul class="news-bottom-list">
        <li>
          <p>找贷款</p>
        </li>
        <li>
          <p>大额贷款</p>
        </li>
        <li>
          <p>关于我们</p>
        </li>
      </ul>
      <p class="news-bottom-font">Copyright Reserved 2015-2019@信用头条</p>
      <p class="news-bottom-font">贷款有风险，出借需谨慎</p>
      <ul class="news-bottom-list news-bottom-ul">
        <li>
          <p>触屏版</p>
        </li>
        <li>
          <p>电脑版</p>
        </li>
      </ul>
    </div>
    <div class="news-app-download"  v-if="isShowDwonLoad">
      <div class="news-app-content">
        <div class="news-app-img">
          <img :src="appImgSrc" width="100%">
        </div>
        <p>查看更多专题，欢迎下载信用头条APP</p>
        <div class="news-app-close" @click="closeDwonLoadFn">
          <img :src="closeIconSrc" width="100%">
        </div>
      </div>
    </div>
    <!-- 固定导航 -->
    <div class="news-go-home">
      <div class="news-top" @click="goToTopFn">
        <img :src="toTopIconSrc" alt>
      </div>
      <div class="news-go-home" @click="goHomeFn">
        <img :src="goHomeIconSrc" alt>
      </div>
    </div>
  </div>
</template>

<script>
import contentList from "../wcomponents/contentList";
export default {
  data() {
    return {
      bankImgSrc: require("../../../../static/headlineImg/icon@bank.png"),
      secondsImgSrc: require("../../../../static/headlineImg/icon@15s.png"),
      starImgSrc: require("../../../../static/headlineImg/icon@yellowStar.png"),
      reportImgSrc: require("../../../../static/headlineImg/icon@report.png"),
      applyLeftImgSrc: require("../../../../static/headlineImg/img@applyLeft.png"),
      applyRightImgSrc: require("../../../../static/headlineImg/img@applyRight.png"),
      noHaveCommnetImgSrc: require("../../../../static/headlineImg/img@noHaveCommnet.png"),
      messageCommnetImgSrc: require("../../../../static/headlineImg/img@message.png"),
      appImgSrc: require("../../../../static/headlineImg/img@appImg.png"),
      closeIconSrc: require("../../../../static/headlineImg/icon@close.png"),
      goHomeIconSrc: require("../../../../static/headlineImg/icon@goHome.png"),
      toTopIconSrc: require("../../../../static/headlineImg/icon@toTop.png"),
      goodOneIconSrc: require("../../../../static/headlineImg/icon@goodOne.png"),
      loanImgSrc: require("../../../../static/images/icon_consumer_loan.png"),
      isShowDwonLoad:true,
    };
  },
  components: {
    contentList
  },
  created(){

  },
  methods: {
      //   文章详细信息
    getNewsMessage() {
      var params = new URLSearchParams();
      params.append("pageNum", "1");
      params.append("pageSize", "5");
      this.$ajax({
        method: "post",
        url: this.$url + "userInformation/queryById",
        params
      }).then(data => {
        // this.arr = data.data.data.list;
      });
    },

    goBank() {
      this.$router.go(-1);
    },

    toCompile() {
      this.$router.push({ path: "/myComment", query: { content: "111" } });
    },

    //回到首页
    goHomeFn(){
        this.$router.push({ path: "/Whome", query: { content: "111" } });
    },

    //回到顶部
    goToTopFn(){
        var sTop = document.body || document.documentElement;
        // console.log(this.$refs.newsBox.scrollTop)
        sTop.scrollIntoView();
    },

    // 关闭下载
    closeDwonLoadFn(){
        this.isShowDwonLoad = false
    },
  }
};
</script>

<style scoped>
img {
  display: block;
}
input {
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
}
header {
  width: 100%;
  height: 90px;
  display: flex;
  background-color: #527eee;
  padding: 20px;
  box-sizing: border-box;
}
.h-header-title {
  color: #fff;
  margin-right: 32px;
  width: 18px;
  padding-top: 10px;
}
.h-header-search {
  flex: 1;
  line-height: 54px;
  font-family: MicrosoftYaHei;
  font-size: 34px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 3px;
  color: #ffffff;
}
.h-header-search-icon {
  width: 20px;
  margin-right: 20px;
  padding-top: 2px;
}
.h-header-search-input {
  flex: 1;
  height: 25px;
}
.h-header-search-input input {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 25px;
  font-size: 24px;
}
.h-header-search-gps {
  display: flex;
  padding-top: 13px;
}
.h-header-search-gps-img {
  width: 130px;
  margin-right: 14px;
}
.h-header-search-gps p {
  font-family: MicrosoftYaHei;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
  line-height: 30px;
}
.news-content {
  padding: 30px;
}
.news-title {
  font-family: MicrosoftYaHei;
  font-size: 33px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
}

.news-author {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
}
.news-author p {
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #999999;
  margin-top: 30px;
}
.news-author div {
  width: 38px;
  padding-top: 25px;
}

/* 标签 */
.news-label {
  padding: 25px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
.news-label p {
  padding: 10px 24px;
  background-color: #f8f8f8;
  border-radius: 20px;
  font-family: MicrosoftYaHei;
  font-size: 23px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #666666;
}

/* 举报 */
.news-report {
  padding: 30px;
  position: relative;
}
.news-report .news-report-p {
  font-family: MicrosoftYaHei;
  font-size: 23px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 44px;
  letter-spacing: 0px;
  color: #999999;
}
.news-report .news-report-btn {
  width: 105px;
  height: 35px;
  background-color: #f8f8f8;
  border-radius: 15px;
  position: absolute;
  right: 35px;
  bottom: 31px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}
.news-report-btn div {
  width: 21px;
  padding-top: 8px;
  margin-right: 3px;
}
.news-report-btn div img {
  width: 100%;
}
.news-report-btn p {
  font-family: MicrosoftYaHei;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #666666;
}
.news-next {
  padding: 20px 25px;
  border-top: 1px solid #eee;
}
.news-next p {
  font-family: MicrosoftYaHei;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.news-next p:last-child {
  margin-top: 25px;
}
.news-apply {
  padding: 30px 75px;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
}
.news-apply-div {
  flex: 1;
  display: flex;
  border-right: 1px solid #eeeeee;
}
.news-apply-img {
  width: 73px;
  margin-right: 25px;
}
.news-apply > div:last-child {
  justify-content: flex-end;
  border-right: none;
}
.news-apply > div:last-child .news-apply-img {
  margin-right: 0px;
  margin-left: 25px;
}
.news-apply-content p {
  font-family: MicrosoftYaHei;
  font-size: 27px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #666666;
}
.news-apply-content p:last-child {
  color: #999999;
  margin-top: 2px;
}

/* 推荐 */
.news-recommend {
  padding: 20px;
  display: flex;
  display: -webkit-flex;
}
.news-recommend div {
  width: 10px;
  height: 29px;
  background-color: #527eee;
  margin-right: 15px;
  margin-top: 6px;
}
.news-recommend p {
  font-family: MicrosoftYaHei;
  font-size: 29px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
}

.h-list-ul {
  padding: 0 20px;
}
.h-list-li {
  padding: 21px 0 20px;
  border-top: 1px solid #eee;
}

/* 评论 */
.no-have-box {
  /* padding: 53px 0 0; */
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.no-have-comnet {
  width: 92px;
  margin: 53px auto 30px;
}
.no-comnet-text {
  font-family: MicrosoftYaHei;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 46px;
  letter-spacing: 0px;
  color: #c0c0c0;
  text-align: center;
}
.look-add-comment{
        width: 200px;
    margin: 15px auto;
    border-radius: 22px;
    border: 1px solid;
}
.comnet-text {
  padding: 20px 30px;
  display: flex;
  display: -webkit-flex;
}
.comnet-input {
  margin-right: 35px;
}
.comnet-input input {
  width: 542px;
  height: 57px;
  background-color: #f8f8f8;
  border-radius: 28px;
  border: solid 1px #cccccc;
  padding: 2px 20px;
  box-sizing: border-box;
}
.comnet-icon {
  width: 42px;
  height: 43px;
  padding-top: 10px;
}

/* 评论有内容 */
.comment-ul li{
    display: flex;
    display:-webkit-flex;
    padding: 30px 40px 15px 28px;
    border-top: 1px solid #eee;
}
.comment-tuxiang{
    width: 74px;
    margin-right: 23px;
}
.comment-content{
    flex: 1;
}
.comment-name{
    display: flex;
    display:-webkit-flex;
    justify-content: space-between;
}
.comment-name-p{
    font-family: MicrosoftYaHei;
	font-size: 31px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #666666;
}
.commnet-good{
    /* width: 66px; */
    display: flex;
    display: -webkit-flex;
}
.commnet-good div{
    width: 32px;
    margin-right: 20px;
}
.commnet-good p{
    font-family: AdobeHeitiStd-Regular;
	font-size: 27px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 46px;
	letter-spacing: 0px;
	color: #666666;
    line-height: 32px
}
.comment-content-font{
    font-family: MicrosoftYaHei;
	font-size: 29px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 46px;
	letter-spacing: 0px;
	color: #333333;
    margin-top: 25px;
}
.comment-content-time{
    display: flex;
    display: -webkit-flex;
    font-family: ArialMT;
	font-size: 25px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 46px;
	letter-spacing: 0px;
	color: #666666;
    margin-top: 22px;
}
.comment-content-time P:first-child{
    margin-right:20px;
}
.comment-comment{
    width: 580px;
	background-color: #f8f8f8;
	border-radius: 4px;
	border: solid 1px #eeeeee;
    font-family: MicrosoftYaHei;
	font-size: 23px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 46px;
	letter-spacing: 0px;
	color: #999999;
    padding: 15px 20px;
}

/* 贷款服务 */
.news-servier {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
  border-top: 1px solid #eeeeee;
}
.news-servier li {
  width: 20%;
}
.news-servier li div {
  width: 74px;
  margin: 30px auto 20px;
}
.news-servier li p {
  font-family: MicrosoftYaHei;
  font-size: 23px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #999999;
  text-align: center;
}
.news-gps {
  font-family: MicrosoftYaHei;
  font-size: 31px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #666666;
  margin-top: 25px;
}

/* 底部信息 */
.news-bottom {
  background-color: #eeeeee;
  padding: 51px 0 39px;
}
.news-bottom-list {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}
.news-bottom-list li {
  padding: 0 26px;
  font-family: MicrosoftYaHei;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #666666;
  text-align: center;
  border-right: 1px solid #666;
}
.news-bottom-list li:last-child {
  border-right: none;
}
.news-bottom-font {
  font-family: MicrosoftYaHei;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #999999;
  text-align: center;
  margin-top: 27px;
}
.news-bottom-ul {
  margin-top: 27px;
}

/* 下载app */
.news-app-download {
  height: 118px;
}
.news-app-content {
  height: 118px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 30px 40px 25px;
  box-sizing: border-box;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  background-color: #fff;
}
.news-app-img {
  width: 64px;
  margin-right: 29px;
}
.news-app-content p {
  line-height: 64px;
  font-family: MicrosoftYaHei;
  font-size: 29px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
}
.news-app-close {
  width: 27px;
  padding-top: 18px;
}

/* 页面导航 */
.news-go-home {
  position: fixed;
  top: 939px;
  right: 48px;
  width: 64px;
}
.news-go-home div {
  width: 64px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
}
.news-go-home div img {
  width: 100%;
}
.news-go-home div:last-child {
  margin-top: 31px;
}
</style>