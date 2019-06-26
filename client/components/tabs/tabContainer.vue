<script>
export default {
  props: {
    panes: {
      type: Array,
      required: true
    }
  },
  render () {
    const container = this.panes.map(item => {
      return item.active ? item.$slots.default : null
    })
    return <div class="tab-content">{container}</div>
  }
}
</script>
