<template>
  <div
  class="hl-card"
  :class="shadow ? `is-${shadow}-shadow`: 'is-always-shadow'"
  >
    <div class="hl-card--header" v-if="$slots.header || header">
      <slot name="header">{{header}}</slot>
    </div>
    <div class="hl-card--body" :style="bodyStyle">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "hl-card",
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String
    }
  },
  setup() {

  }
};
</script>

<style>

</style>