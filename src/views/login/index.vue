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
              <input id="phone" type="text" placeholder="请输入账号">
            </li>
            <li>
              <label><img src="https://image.hongyantu.com/hongyantu/2018/05/22/058029691015269529108521083.png" alt=""></label>
              <input id="password" type="password" placeholder="请输入密码">
            </li>
            <li class="imgcode" style="display: none;"><label><img src="https://image.hongyantu.com/hongyantu/2018/05/22/058029711915269531193116042.png" alt=""></label> <input id="imgcode" type="text" placeholder="请输入图形验证码">
              <div class="yzm"><img src="https://passport.hongyantu.com/index.php?r=index/piccodefulsh1&amp;key=0.07614029227223518" alt="" class="img"></div>
            </li>
          </ul>
          <van-button type="danger" class="red-btn">登录</van-button>
          <div class="else clearfix"><a href="forget_password_01.html" class="mui-pull-left">忘记密码</a> <a href="complain.html" class="mui-pull-right">账号申诉</a></div>
        </div>
        <div class="phone_login" style="display: none;">
          <ul>
            <li><label><img src="https://image.hongyantu.com/hongyantu/2018/05/22/058031471615269707164266332.png" alt=""></label> <input id="phone1" type="text" placeholder="请输入账号"></li>
            <li><label><img src="https://image.hongyantu.com/hongyantu/2018/05/22/058029711915269531193116042.png" alt=""></label> <input id="imgcode1" type="text" placeholder="请输入图形验证码">
              <div class="yzm"><img src="https://passport.hongyantu.com/index.php?r=index/piccodefulsh1&amp;key=0.07614029227223518" alt="" class="img"></div>
            </li>
            <li><label><img src="https://image.hongyantu.com/hongyantu/2018/05/22/058031487015269708708314413.png" alt=""></label> <input id="smscode" type="text" placeholder="请输入短信验证码">
              <div class="yzm"><input type="button" value="发送验证码" class="phone_code"></div>
            </li>
          </ul>
          <div class="red_button">登录</div>
          <div class="else clearfix"><a href="complain.html" class="mui-pull-right">账号申诉</a></div>
        </div>
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
