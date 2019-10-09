<template>
  <div>
    列表
  </div>
</template>
<script>
import { newsList } from '@/api/news/index'
export default {
  data() {
    return {}
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      newsList({
        perpage: 10,
        page: 1
      })
        .then(rs => {
          console.log(rs)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
