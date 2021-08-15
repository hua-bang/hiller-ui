<template>
  <div>
    123456
    <!-- <hl-notification title="测试" message="这是消息哈。" @close="test"></hl-notification> -->
  </div>
</template>

<script>
import { Notification } from "@components/notification/src/index.js"; 
export default {
  setup() {
    
    Notification({
      title: "测试",
      message: "测试消息！！！"
    });

    return {
      
    };
  }
};
</script>

<style>

</style>