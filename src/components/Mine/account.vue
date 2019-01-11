<template>
  <!-- 账户资料 -->
  <div class="account">
    <div class="header">
      <mt-header title="账户资料">
        <router-link :to="{ path:'/' ,query :{selected:'我的'} }" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="Content">
      <ul>
        <li>
          <p>头像</p>
          <div class="info-message">
            <label for="fileImg">
              <img :src="userImgSrc" class="head-icon" alt>
              <input
                type="file"
                name="fileimg"
                id="fileImg"
                value
                @change="getFile($event)"
                ref="avatarInput"
                style="display: none;"
              >
            </label>
            
            <img src="/static/images/icon_next.png" class="arrawy" alt>
          </div>
        </li>
        <li>
          <p>用户名</p>
          <div class="info-message" @click="changeNameFn">
            <span>{{userNickname}}</span>
            <img src="/static/images/icon_next.png" class="arrawy" alt>
          </div>
        </li>
        <li>
          <p>手机号</p>
          <div class="info-message">
            <span>{{userTelephone}}</span>
          </div>
        </li>
        <li>
          <p>生日</p>
          <div class="info-message" @click="openPicker">
            <span :class="userBirthday=='待完善'?'red':''">{{userBirthday}}</span>
            <img src="/static/images/icon_next.png" class="arrawy" alt>
          </div>
        </li>
        <li>
          <p>地区</p>
          <div class="info-message" @click="openAddress">
            <span :class="userLocation=='待完善'?'red':''">{{userLocation}}</span>
            <img src="/static/images/icon_next.png" class="arrawy" alt>
          </div>
        </li>
        <li>
          <p>身份情况</p>
          <div class="info-message" @click="userCardStyle">
            <span :class="identityStatus=='待完善'?'red':''">{{identityStatus}}</span>
            <img src="/static/images/icon_next.png" class="arrawy" alt>
          </div>
        </li>
      </ul>
    </div>
    <mt-datetime-picker
      v-model="pickerVisible"
      ref="picker"
      type="date"
      :startDate="starDate"
      :endDate="endDate"
      year-format="{value} "
      month-format="{value} "
      date-format="{value} "
      @confirm="handleConfirm"
    ></mt-datetime-picker>

    <mt-popup v-model="popupVisible" position="bottom" style="width:100%">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="cancleaddress">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="selectaddress">确定</span>
      </div>
      <mt-picker :slots="citySlots" @change="onValuesChange"></mt-picker>
    </mt-popup>

    <mt-actionsheet :actions="actionsLists" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>
<script>
import { Header } from "mint-ui";
import axios from "axios";
export default {
  name: "account ",
  data() {
    return {
      pathAddressUrl: "/loansupermarket-api/usercenter/v1.0.1/web/",
      userImgSrc: require("../../../static/images/icon_head_portrait_nor.png"),
      sheetVisible: false,
      userNickname: "",
      userTelephone: "",
      userBirthday: "待完善",
      userLocation: "待完善",
      identityStatus: "待完善",
      pickerVisible: new Date(),
      starDate: new Date(Date.parse("1900-01-01 14:00:00".replace(/-/g, "/"))),
      endDate: new Date(),
      popupVisible: false,
      cityid: "",
      provinceid: "",

      fileData: "",

      subSystemId: "",
      userId: "",
      userInformationId: "",
      addressLists: [],

      actionsLists: [
        { name: "上班族", method: this.selectContent },
        { name: "个体户", method: this.selectContent },
        { name: "自由职业者", method: this.selectContent },
        { name: "企业主", method: this.selectContent }
      ],
      upLoadPhoto: [{ name: "上班族", method: this.selectContent }],
      citySlots: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        }
      ],
      privinceName: "",
      cityName: "",

      base64: "",

      areaList: [],
      provinceCodeList: [],
      cityCodeList: []
    };
  },
  components: {
    Header
  },
  created() {
    console.log(this.$url)
    var informationId = localStorage.getItem("userInformationId");
    var params = new URLSearchParams();
    params.append("informationId", informationId);
    this.$ajax({
      method: "post",
      url: this.pathAddressUrl + "userInformation/queryById",
      params
    }).then(data => {
      this.userNickname = data.data.data.userNickname;
      this.userTelephone = data.data.data.userTelephone;
      this.userBirthday = data.data.data.userBirthday || "待完善";
      this.identityStatus = data.data.data.identityStatus || "待完善";
      this.userLocation = data.data.data.userLocation || "待完善";
      this.userId = data.data.data.userId;
      this.subSystemId = data.data.data.subSystemId;
      this.userInformationId = data.data.data.userInformationId;
      this.userImgSrc = data.data.data.userAvatar || this.userImgSrc;
    });

    //获取省市信息
    this.$ajax({
      method: "post",
      url: this.pathAddressUrl + "dccProvinces/findAll",
      params
    }).then(data => {
      let address = data.data.data.areaList;
      this.areaList.push(data.data.data.areaList);
      this.provinceCodeList.push(data.data.data.provinceCodeList);
      this.cityCodeList.push(data.data.data.cityCodeList);
      this.citySlots[0].values = Object.keys(address);
      this.citySlots[2].values = Object.values(address)[0];
    });
  },
  methods: {
    openPicker() {
      this.$refs.picker.open();
    },

    openAddress() {
      this.popupVisible = true;
    },

    //修改年月日
    handleConfirm(date) {
      var y = new Date(date).getFullYear();
      var m = new Date(date).getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = new Date(date).getDate();
      d = d < 10 ? "0" + d : d;
      this.userBirthday = y + "年" + m + "月" + d + "日";
      let params = new URLSearchParams();
      params.append("userBirthday", this.userBirthday);
      params.append("userInformationId", this.userInformationId);
      this.$ajax({
        method: "post",
        url: this.pathAddressUrl + "userInformation/updateById",
        params
      }).then(data => {});
    },

    onValuesChange(picker, values) {
      this.provinceid = this.provinceCodeList[0][values[0]];
      this.cityid = this.cityCodeList[0][values[1]];
      this.privinceName = values[0];
      this.cityName = values[1];
      picker.setSlotValues(1, this.areaList[0][values[0]]);
    },

    //修改身份
    selectContent(item, index) {
      this.identityStatus = item.name;
      let params = new URLSearchParams();
      params.append("identityStatus", this.identityStatus);
      params.append("userInformationId", this.userInformationId);
      this.$ajax({
        method: "post",
        url: this.$url + "userInformation/updateById",
        params
      }).then(data => {});
    },

    userCardStyle() {
      this.sheetVisible = true;
    },
    cancleaddress: function() {
      this.popupVisible = false;
    },

    //修改省市
    selectaddress: function() {
      this.popupVisible = false;
      this.userLocation = this.privinceName + "-" + this.cityName;

      let params = new URLSearchParams();
      params.append("userLocation", this.userLocation);
      params.append("provinceid", this.provinceid);
      params.append("cityid", this.cityid);
      params.append("userInformationId", this.userInformationId);
      this.$ajax({
        method: "post",
        url: this.pathAddressUrl + "userInformation/updateById",
        params
      }).then(data => {});
    },

    //跳转修改名称页面
    changeNameFn() {
      this.$router.push({
        path: "/changeName",
        query: {
          userNickname: this.userNickname,
          subSystemId: this.subSystemId,
          userInformationId: this.userInformationId
        }
      });
    },

    //上传图片
    getFile(event) {
      this.fileData = event.target.files[0];
      console.log(this.$refs.avatarInput.files[0]);
      var params = new FormData();
      params.append("file", this.$refs.avatarInput.files[0]);
      axios({
        method: "post",
        url:
          "/loansupermarket-api/news/v1.0.1/web/imageUploadOne/uploadImg",
        data: params,
        "Content-Type": "multipart/form-data"
      }).then(res => {
        console.log(res.data);
        this.userImgSrc = res.data.data;

        let params = new URLSearchParams();
        params.append("userAvatar", this.userImgSrc);
        params.append("userInformationId", this.userInformationId);
        this.$ajax({
          method: "post",
          url: this.pathAddressUrl + "userInformation/updateById",
          params
        }).then(data => {});
      });
    },

    //上传图片的方法
    onRead(file) {
      console.log(file);
    }
  }
};
</script>
<style scoped>
.account {
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

.Content {
  width: 100%;
  height: auto;
  float: left;
  background-color: white;
}

.Content img {
  float: left;
      margin-left: 1.933vw;
  margin-top: 17px;
}
.Content ul li {
      width: 95%;
    margin-left: 5%;
    height: 11vw;
    line-height: 11vw;
    /* float: left; */
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    font-family: MicrosoftYaHei;
    font-size: 4.133vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
    border-bottom: 1px solid #eeeeee;
}

.Content ul li:nth-last-child(1) {
  border-bottom: none;
}

.Content ul {
  padding: 0;
}
.Content .arrawy {
  width: 2.6vw;
    height: 4.133vw;
    float: right;
    margin-top: 3.933vw;
}

.Content ul li p {
  float: left;
}

.Content .server {
  color: #999999;
  display: inline-block;
  margin-left: 20%;
}

/* .Content ul li:nth-child(2) p {
  width: 75%;
} */
/* .Content ul li:nth-child(3) p {
  width: 70%;
} */
/* .Content ul li:nth-child(4) p {
  width: 76%;
} */
/* .Content ul li:nth-child(4) span {
  color: #fa3131;
} */
/* .Content ul li:nth-child(5) p {
  width: 76%;
} */
/* .Content ul li:nth-child(5) span {
  color: #fa3131;
} */
/* .Content ul li:nth-child(6) p {
  width: 76%;
} */
/* .Content ul li:nth-child(6) span {
  
} */
.red {
  color: #fa3131;
}

/* 新加样式 */
.info-message {
  display: flex;
  padding-right: 10px;
}
.Content .head-icon {
      width: 7.667vw;
    height: 7.667vw;
    border-radius: 4.667vw;
    margin-top: 1.867vw;
}
</style>

