<template>
  <div>
    分类
    <br>
    <router-link :to="{ name: 'news', params: { classId: 123 }}">name 跳转 params 传值</router-link>
    <br>
    <router-link :to="{ path: 'news', query: { classId: 124 } }">path 跳转 query 传值</router-link>
    <br>
    <span @click="jump()">push 跳转</span>
  </div>
</template>
<script>
export default {
  methods: {
    // 跳转
    jump() {
      // query 传值
      this.$router.push({
        path: 'news',
        query: { classId: 123 }
      })
      // params 传值
    //   this.$router.push({
    //     name: 'list',
    //     params: { classID: 123 }
    //   })
    }
  }

}
</script>
