<template>
  <div>
    <div>i'm count!!</div>
    <div>{{ count }}</div>
    <button @click="count++">plus</button>
  </div>
  <div>hello!</div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
};
</script>

<style>
</style>