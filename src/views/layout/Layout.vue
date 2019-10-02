<template>
  <div class="app-wrapper">
    <div class="main-container">
      <keep-alive>
        <AppMain />
      </keep-alive>
      <keep-alive>
        <tabbar />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import tabbar from './components/tabbar'
import AppMain from './components/AppMain'

export default {
  name: 'Layout',
  components: {
    tabbar,
    AppMain
  },

  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

