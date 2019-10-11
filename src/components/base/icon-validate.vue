<template>
  <div class="icon-validate">
    <Icon
      class="icon"
      type="ios-alert"
      :color="errorColor"
      :size="size"
      v-show="errors.length"
    />
    <Icon
      class="icon"
      type="md-checkmark-circle"
      :class="{'success': !errors.length}"
      :size="size"
      v-show="!errors.length"
    />
  </div>
</template>

<script>
import { Icon } from 'iview'

export default {
  name: 'icon-validate',
  props: {
    errors: {
      type: Array,
      default() {
        return []
      }
    },
    size: {
      type: Number,
      default: 14
    },
    errorColor: {
      type: String,
      default: 'red'
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.icon
  &.success
    color: $success-color
</style>
