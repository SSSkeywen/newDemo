<template>
  <div>
    <div v-if="true" class="one-photo">
      <div class="one-left">
        <p class="one-title">影视剧中插播互金广告 金融持牌强监管剑指灰色地带影视剧中插播金融持牌强监管剑指灰色地带影视剧中插播</p>
        <div class="one-name">
          <p>姓名:姓名</p>
          <p>30条评论</p>
          <p>2018-08-11 10:34</p>
        </div>
      </div>
      <div class="one-right">
        <img :src="contentListImgSrc" width="100%">
      </div>
    </div>
    <div v-else class="list-photo">
      <p class="list-title">90后带来消费信用贷款猛增 信用卡成股份行中收最大亮点</p>
      <ul class="list-img-ul">
        <li>
          <img :src="contentListImgSrc" width="100%">
        </li>
        <li>
          <img :src="contentListImgSrc" width="100%">
        </li>
        <li>
          <img :src="contentListImgSrc" width="100%">
        </li>
      </ul>
      <div class="list-message">
        <p>人民日报</p>
        <p>30条评论</p>
        <p>2018-08-11 10:34</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentListImgSrc: require("../../../../static/headlineImg/photo@article.jpg")
    };
  }
};
</script>

<style scoped>
img{
    display: block;
}
.one-photo {
  display: flex;
  display: -webkit-flex;
}
.one-left {
  flex: 1;
}
.one-right {
  width: 200px;
  margin-left: 21px;
}
.one-title {
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 1px;
  color: #333333;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.one-name {
  display: flex;
  display: -webkit-flex;
  font-family: MicrosoftYaHei;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #999999;
  margin-top: 30px;
}
.one-name p {
  line-height: 20px;
  margin-right: 20px;
}

/* 消息多个图片 */
.list-photo{

}
.list-title{
    font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 1px;
  color: #333333;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.list-img-ul{
    display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  margin-top: 20px;
}
.list-img-ul li{
    width: 216px;
}
.list-message{
    display: flex;
  display: -webkit-flex;
  font-family: MicrosoftYaHei;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #999999;
  margin-top: 20px;
}
.list-message p{
  line-height: 20px;
  margin-right: 20px;  
}
</style>