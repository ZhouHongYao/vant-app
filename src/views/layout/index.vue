<template>
  <div class="app-wrapper">
    <div class="main-container">
      <transition name="fade">
        <keep-alive>
          <AppMain />
        </keep-alive>
      </transition>

      <tabbar />
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
  created() { },
  mounted() { },
  methods: {}
}
</script>

