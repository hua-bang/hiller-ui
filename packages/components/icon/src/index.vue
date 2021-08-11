<template>
  <i 
  :class="`iconfont icon-${name}`" 
  >
  </i>
</template>

<script>

export default {
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