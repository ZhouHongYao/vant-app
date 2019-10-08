<template>
  <form action="/">
    <van-search background="#dd2727" placeholder="请输入搜索关键词" />
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <lazy-component>
          <img v-lazy="image" class="swipe-img">
        </lazy-component>
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="5" :border="false">
      <van-grid-item>
        <van-image src="https://image.hongyantu.com/hongyantu/2018/07/19/058532710415319831043511273.png" class="grid-img" />
        <p class="grid-text">商城</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://image.hongyantu.com/hongyantu/2018/07/19/058533386615319898663858979.png" class="grid-img" />
        <p class="grid-text">询报价</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://image.hongyantu.com/hongyantu/2018/07/19/058532711515319831159689352.png" class="grid-img" />
        <p class="grid-text">行业地图</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://image.hongyantu.com/hongyantu/2018/07/19/058532713415319831341019649.png" class="grid-img" />
        <p class="grid-text">找物流</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://image.hongyantu.com/hongyantu/2018/07/19/058532712615319831261219791.png" class="grid-img" />
        <p class="grid-text">找金融</p>
      </van-grid-item>
    </van-grid>
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
.swipe-img {
  width: 100%;
  height: 150px;
}
.grid-img {
  width: 70%;
}
.grid-text {
  font-size: 14px;
  margin: 8px 0 0 0;
  color: #666666;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>

