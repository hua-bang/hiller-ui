<template>
  <i 
  :class="`iconfont icon-${name}`" 
  >
  </i>
</template>

<script>

export default {
  name: "hl-icon",
  props: {
    name: {
      type: String,
      require: true
    }
  }
};
</script>

<style>

</style>