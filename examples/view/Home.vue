<template>
  <div>home</div>
  <div>
    <Count />
    <Hello />
  </div>
</template>

<script>
import Count from "../components/Count.vue";
import Hello from "../components/Hello.vue";

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
#demo {
  color: red;
}
</style>