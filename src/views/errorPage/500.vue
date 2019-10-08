<template>
  <div class="wscn-http500">
    <div class="bullshit__oops">Oops!</div>
    <div class="bullshit__headline">{{ message }}</div>
    <div class="bullshit__info margin-top-30">服务器出错了，请点击以下按钮返回！</div>
    <a href="/" class="bullshit__return-home" @click="goback">返回上一页</a>
  </div>
</template>

<script>
import img_500 from '@/assets/500_images/500.png'

export default {
  name: 'Page500',
  data() {
    return {
      img_500
    }
  },
  computed: {
    message() {
      return '500 page error'
    }
  },
  methods: {
    goback() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ name: 'dashboard' })
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.wscn-http500 {
    transform: translate(10%, 50%);
  .bullshit {
    &__oops {
      font-size: 60px;
      font-weight: 700;
      line-height: 40px;
      color: #1482f0;
      opacity: 0;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
    &__headline {
      font-size: 20px;
      line-height: 24px;
      color: #1482f0;
      opacity: 0;
      margin-bottom: 10px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }
    &__info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      opacity: 0;
      margin-bottom: 30px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }
    &__return-home {
      display: block;
      float: left;
      width: 110px;
      height: 36px;
      background: #1482f0;
      border-radius: 100px;
      text-align: center;
      color: #ffffff;
      opacity: 0;
      font-size: 14px;
      line-height: 36px;
      cursor: pointer;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>
