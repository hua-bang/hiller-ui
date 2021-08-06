<template>
  <div>hello vue3</div>
  <Count></Count>
  <Hello />
</template>

<script>
import Count from "./components/Count.vue";
import Hello from "./components/Hello.vue";

export default {
  components: {
    Count,
    Hello,
  },
  setup() {
    console.log("hello, world");
  },
};
</script>

<style>
</style>