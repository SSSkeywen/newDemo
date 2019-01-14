<template>
  <div>
    <div class="alert-style" v-if="isShowAlert">
      <div class="alert-content">
        <hgroup class="alert-title">温馨提示</hgroup>
        <p class="alert-count">您确定要取消评论吗？</p>
        <div class="alert-btn">
          <div>
            <button @click="cancel">取消</button>
          </div>
          <div>
            <button @click="sureBtn">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowAlert: true
    };
  },
  methods: {
    cancel() {
      this.isShowAlert = false;
    },

    openAlert() {
      this.isShowAlert = true;
    },

    sureBtn() {
      this.$emit("goExitFn");
      this.isShowAlert = false;
    }
  }
};
</script>

<style scoped>
.alert-style {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
}
.alert-content {
  width: 440px;
  height: 250px;
  background-color: #ffffff;
  border-radius: 6px;
  overflow: hidden;
}
.alert-title {
  text-align: center;
  padding: 26px 0 20px;
  font-family: MicrosoftYaHei;
  font-size: 26px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #333333;
}
.alert-count {
  text-align: center;
  padding: 23px 0 50px;
  font-family: MicrosoftYaHei;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 1px;
  color: #666666;
}
.alert-btn {
  display: flex;
  border-top: 1px solid #cccccc;
}
.alert-btn div {
  flex: 1;
  height: 72px;
}
.alert-btn div button {
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  color: #527eee;
  font-size: 24px;
}
.alert-btn div:first-child button {
  border-right: 1px solid #cccccc;
  color: #999999;
}
</style>