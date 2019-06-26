<script>
import TabContainer from './tabContainer.vue'

export default {
  components: { TabContainer },
  name: 'Tabs',
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    onChange (index) {
      this.$emit('change', index)
    }
  },
  data () {
    return {
      panes: []
    }
  },
  render () {
    return (
      <div class="tabs">
        <ul class="tabs-header">{this.$slots.default}</ul>
        <TabContainer panes={this.panes} />
      </div>
    )
  }
}
</script>

<style lang="stylus" scoped>
.tabs-header
  display flex
  list-style none
  margin 0
  padding 0
  border-bottom 2px solid #ededed
</style>
