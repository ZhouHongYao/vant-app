<template>
  <form action="/">
    <van-search placeholder="请输入搜索关键词" />
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <lazy-component>
          <img v-lazy="image">
        </lazy-component>
      </van-swipe-item>
    </van-swipe>
  </form>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  computed: {},
  activated() {},
  methods: {}
}
</script>
<style scoped>
img {
  width: 100%;
  height: 150px;
}
</style>

