<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
var md5 = require('md5')

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      token: '',
      user: {
        phone: '17706120671',
        pwd: '123456'
      }
    }
  },
  created() {
    this.getToken()
  },
  methods: {
    // 获取数据
    getToken() {
      const key = Math.random()
      const imgcode =
        'http://passporttest.hongyantu.com/index.php?r=index/piccodefulsh1&key=' +
        key
      var pwd = md5(this.user.pwd)
      axios({
        url: '/commonapi/?action=Indexs.LoginByPwd',
        params: {
          phone: this.user.phone,
          pwd: pwd,
          imgcode: imgcode,
          key: key
        },
        method: 'post',
        ifModified: true
      })
        .then(rs => {
          this.token = rs.data.data.data.token
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
