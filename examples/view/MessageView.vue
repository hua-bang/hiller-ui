<template>
  <div>
    <h2 style="margin-left: 15px">
      Message 组件
    </h2>
  </div>
  <div class="message-area">
    <h3 style="margin-left: 15px">基础用法</h3>
    <hl-button @click="open('success')">成功</hl-button>
    <hl-button @click="open('warning')">警告</hl-button>
    <hl-button @click="open">消息</hl-button>
    <hl-button @click="open('error')">错误</hl-button>
  </div>
</template>

<script>

import HlMessage from "@components/message/src/index.js";
import HlButton from "@components/button/src/index.vue";
export default {
  components: {
    "hl-button": HlButton
  },
  setup() {

    const open = (type = "" ) => {
      HlMessage({
        message: "message",
        type
      });
    };

    return {
      open
    };
  }
};
</script>

<style scoped lang="scss">
.message-area {
  margin-top: 15px;
  button {
    margin-left: 10px;
  }
}
</style>