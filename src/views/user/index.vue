<template>
  <div>
    <van-nav-bar title="标题" :border="false" />
    <a class="head">
      <van-image round width="62" height="62" :src="avatar?avatar:'https://image.hongyantu.com/hongyantu/2017/11/18/056434090715109969071673145.jpg'" class="ds-ink" />
      <div class="ds-ink lo-re">
        <div v-if="token && user.uname">
          <span>{{ user.uname }}</span>
        </div>
        <div v-else>
          <span @click="login()">登录</span>
          <span> / </span>
          <span>注册</span>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      avatar: ''
    }
  },
  computed: {
    ...mapState({
      token: state => state.token,
      user: state => state.user
    })
  },
  created() {
    this.avatar = this.user.avatar ? this.user.avatar : ''
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
