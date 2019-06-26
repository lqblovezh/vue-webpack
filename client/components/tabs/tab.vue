<script>
export default {
  name: 'Tab',
  props: {
    index: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      default: 'tab'
    }
  },
  computed: {
    active () {
      return this.index === this.$parent.value
    }
  },
  mounted () {
    this.$parent.panes.push(this)
  },
  methods: {
    handelClick () {
      this.$parent.onChange(this.index)
    }
  },
  render () {
    const className = {
      tab: true,
      active: this.active
    }
    const tab = this.$slots.label || <span>{this.label}</span>
    return <li class={className} on-click={this.handelClick}>{tab}</li>
  }
}
</script>

<style lang="stylus" scoped>
.tab
  list-style none
  line-height 40px
  margin-right 30px
  position relative
  bottom -2px
  cursor pointer
  &.active
    border-bottom 2px solid blue
  &:last-child
    margin-right 0
</style>
