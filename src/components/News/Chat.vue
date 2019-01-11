<template>
  <div class="Chat">
    <div class="headder">
      <mt-header title="消息">
        <mt-button icon="back">返回</mt-button>
      </mt-header>
    </div>
    <div class="message">
      <ul>
        <li v-for="(item,index) in array " :key="index" @click="lookMessage(index)">
          <p class="notice">借款通知
            <span class="samll-pornit" v-if="!item.userMessageIsProcessed"></span>
          </p>
          <span class="time">{{item.userMessageReceivedTime}}</span>
          <p class="content">{{item.userMessageContent}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";

export default {
  name: "Chat",
  data() {
    return {
      array: ""
    };
  },
  components: {
    Header
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews() {
      var params = new URLSearchParams();
      params.append("pageNum", "1");
      params.append("pageSize", "5");
      this.$ajax({
        method: "post",
        url: "/loansupermarket-api/usercenter/v1.0.1/web/userMessage/queryPage",
        params
      }).then(data => {
        console.log(data);
        this.array = data.data.data.list;
      });
    },

    lookMessage(index) {
      var params = new URLSearchParams();
      params.append("id", this.array[index].id);
      params.append("modifyUser", this.array[index].modifyUser);
      this.$ajax({
        method: "post",
        url:
          "/loansupermarket-api/usercenter/v1.0.1/web/userMessage/selectById",
        params
      }).then(data => {
        console.log(data);
        this.array[index].userMessageIsProcessed = true;
      });
    }
  }
};
</script>

<style scoped>
.mint-header {
  height: 7vh;
	background-color: #527eee;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
}
.Chat {
  width: 100%;
  height: 100vh;
  background-color: #eeeeee;
  float: left;
}

.message {
  width: 100%;
  height: auto;
}

.message ul li {
  width: 100%;
  height: 17vw;
  background-color: #fff;
  margin-bottom: 1.333vw;
}

.message ul li .notice {
  width: 50%;
  float: left;
  font-size: 2.5vh;
  margin-top: 18px;
  margin-left: 5%;
  position: relative;
}
.message ul li .time {
  font-size: 2vh;
  color: #999999;
  font-size: 2vh;
  display: inline-block;
  margin-top: 18px;
  margin-left: 5%;
}

.message ul li .content {
  font-size: 2vh;
  color: #666;
  margin-top: 17px;
  width: 100%;
  margin-left: 5%;
  position: relative;
}
.samll-pornit {
  position: absolute;
  width: 6px;
  height: 6px;
  left: 80px;
  top: 5px;
  background-color: red;
  border-radius: 6px;
}
</style>



