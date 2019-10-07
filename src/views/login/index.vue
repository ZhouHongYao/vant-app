<template>
  <div>
    <van-nav-bar title="登录" right-text="注册" left-arrow fixed @click-left="goback" />
    <div class="login">
      <div class="login_type">
        <ul class="clearfix">
          <li value="1" class="active">账号密码登录</li>
          <li value="2" class="">短信验证码登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    goback() {
      this.$route.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  margin-top: 44px;
  padding: 0 25px;
  .login_type {
    margin-top: 25px;
    ul li {
      float: left;
      font-size: 16px;
      font-weight: bold;
      margin-right: 25px;
      line-height: 30px;
    }
    .clearfix:after {
      clear: both;
      display: block;
      visibility: hidden;
      height: 0;
      line-height: 0;
      content: ".";
    }
  }
}
</style>
