<template>
  <div>
    <div class="alert-style" v-if="isShowAlert">
      <div class="alert-content">
        <hgroup class="alert-title">温馨提示</hgroup>
        <p class="alert-count">您确定要退出登录吗？</p>
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
      isShowAlert: false
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
  width: 60.333vw;
  height: 27.667vw;
  background-color: #ffffff;
  border-radius: 0.8vw;
  overflow: hidden;
}
.alert-title {
  text-align: center;
  padding: 3.667vw 0 1.333vw;
  font-size: 3.733vw;
  color: #333333;
}
.alert-count {
  text-align: center;
  padding: 2.333vw 0;
  font-size: 2.467vw;
  color: #666666;
}
.alert-btn {
  display: flex;
  border-top: 1px solid #cccccc;
}
.alert-btn div {
  flex: 1;
  height: 9vw;
}
.alert-btn div button {
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  color: #527eee;
}
.alert-btn div:first-child button {
  border-right: 1px solid #cccccc;
  color: #999999;
}
</style>