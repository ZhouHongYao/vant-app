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
      <div class="login_form">
        <div class="password_login" style="display: block;">
          <ul>
            <li>
              <label><img src="https://image.hongyantu.com/hongyantu/2018/05/22/058029674515269527458308414.png" alt=""></label>
              <input v-model="phone" type="text" placeholder="请输入账号">
            </li>
            <li>
              <label><img src="https://image.hongyantu.com/hongyantu/2018/05/22/058029691015269529108521083.png" alt=""></label>
              <input v-model="pwd" type="password" placeholder="请输入密码">
            </li>
            <li class="imgcode">
              <label><img src="https://image.hongyantu.com/hongyantu/2018/05/22/058029711915269531193116042.png" alt=""></label>
              <input v-model="imgcode" type="text" placeholder="请输入图形验证码">
              <div class="yzm">
                <img class="img" :src="imgcodeurl" alt="" @click="yzmimg(1)">
              </div>
            </li>
          </ul>
          <van-button type="danger" class="red-btn" @click="login">登录</van-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { loginBypwd, getUser } from '@/api/login'

export default {
  data() {
    return {
      type: 1,
      phone: 'ered123',
      pwd: '123456',
      key: '',
      imgcode: '',
      imgcodeurl: ''
    }
  },
  created() {
    this.key = Math.random()
    this.imgcodeurl =
      'http://passporttest.hongyantu.com/index.php?r=index/piccodefulsh1&key=' +
      this.key
  },
  methods: {
    // 返回上一页
    goback() {
      this.$router.go(-1)
    },
    // 验证图片
    yzmimg(type) {
      if (type === 1) {
        this.key = Math.random()
        this.imgcodeurl =
          'http://passporttest.hongyantu.com/index.php?r=index/piccodefulsh1&key=' +
          this.key
        this.$forceUpdate()
      }
    //    else if (type === 2) {
    //     this.key1 = Math.random()
    //     this.imgcodeurl1 =
    //       'http://passporttest.hongyantu.com/index.php?r=index/piccodefulsh1&key=' +
    //       this.key1
    //     this.$forceUpdate()
    //   }
    },
    login() {
      if (!this.phone) {
        this.$toast('请输入账号！')
        return
      }
      if (!this.pwd || this.pwd.trim() === '') {
        this.$toast('请输入密码！')
        return
      }
      var md5 = require('md5')
      const pwd = md5(this.pwd)
      loginBypwd({
        phone: this.phone,
        pwd: pwd,
        imgcode: this.imgcode,
        key: this.key
      })
        .then(rs => {
          if (rs && rs.data && rs.data.token) {
            this.$store.dispatch('setToken', rs.data.token).then(() => {
              this.getUserInfo()
            })
          } else {
            const toast = rs && rs.msg ? rs.msg : rs && rs.data && rs.data.msg ? rs.data.msg : '登录失败！'
            this.$toast(toast)
          }
        })
        .catch(err => {
          const toast = err.msg ? err.msg : '登录失败！'
          this.$toast(toast)
        })
    },
    // 用户信息
    getUserInfo() {
      getUser({ token: this.$store.state.token }).then(res => {
        console.log(res)
        if (res && res.code === 0 && res.data) {
          this.$store.dispatch('setUserinfo', res.data).then(() => {
            this.$router.push('user')
          })
        } else {
          this.$mptoast('登录失败！')
        }
      })
        .catch(err => {
          const toast = err.msg ? err.msg : '登录失败！'
          this.$toast(toast)
        })
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  margin-top: 44px;
  padding: 0 25px;
  .login_type {
    padding-top: 25px;
    li.active {
      color: #dd2727;
      border-bottom: 2px solid #dd2727;
    }
    ul li {
      float: left;
      font-size: 16px;
      font-weight: bold;
      margin-right: 25px;
      line-height: 30px;
      color: #666666;
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
  .login_form {
    padding-top: 20px;
    li {
      line-height: 56px;
      height: 56px;
      margin-top: 10px;
      position: relative;
      input[type="password"],
      input[type="text"],
      input[type="tel"] {
        border: none;
        color: #333333;
        border-bottom: 1px solid #e5e5e5;
        font-size: 15px;
        padding-left: 30px;
        height: 56px;
        width: 100%;
      }
      label {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 18px;
        left: 0;
        z-index: 1;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .yzm {
        position: absolute;
        right: 0;
        width: 80px;
        height: 28px;
        top: 14px;
        z-index: 10;
        img {
          width: 100%;
          height: 100%;
          display: block;
          z-index: 10;
        }
      }
    }
    .red-btn {
      width: 100%;
      height: 44px;
      line-height: 44px;
      color: white;
      background: #dd2727;
      border-radius: 30px;
      font-size: 15px;
      margin-top: 50px;
    }
  }
}
</style>
