<template>
  <div>
    <h2>Message</h2>
  </div>
</template>

<script>

import HlMessage from "@components/message/src/index.js";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      HlMessage("hello, world", "success");
    });
  }
};
</script>

<style>

</style>