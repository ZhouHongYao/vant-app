<template>
  <div>
    <van-nav-bar title="标题" :border="false" />
    <a class="head">
      <van-image round width="62" height="62" src="https://image.hongyantu.com/hongyantu/2017/11/18/056434090715109969071673145.jpg" class="ds-ink" />
      <div class="ds-ink lo-re">
        <span @click="login()">登录</span>
        <span> / </span>
        <span>注册</span>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {}
    }
  },
  methods: {
    login() {
      this.$router.push({ 'path': 'login' })
    }
  }
}
</script>
<style lang="less" scoped>
.van-nav-bar {
  background-color: #dd2727;
  .van-nav-bar__title {
    color: white;
  }
}
.head {
  background-color: #dd2727;
  padding: 18px 65px 40px 24px;
  display: block;
  .lo-re{
      line-height: 60px;
      color: white;
      padding-left: 20px;
  }
}
</style>
