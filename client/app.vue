<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'

export default {
  metaInfo: {
    title: "lqb's Todo App"
  },
  data () {
    return {
      tabValue: '1',
      changeText: ''
    }
  },
  components: {
    Header,
    Footer
  },
  mounted () {},
  methods: {
    // ...mapActions(['updateCountAsync']),
    // ...mapMutations(['updateCount']),
    notify () {
      this.$notify({
        content: 'test $notify',
        btn: 'close'
      })
    },
    handleChangeTab (value) {
      this.tabValue = value
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  position absolute
  left 0
  right 0
  top 0
  bottom 0
#cover
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity 0.9
  z-index -1
#loading
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  background-color rgba(255, 255, 255, 0.3)
  z-index 99
  display flex
  align-items center
  justify-content center
</style>


