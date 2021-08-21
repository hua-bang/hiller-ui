<template>
  <div>
    <h2 style="margin-left: 15px">Switch组件</h2>
  </div>
  <div class="display-area">
    <h3 style="margin-left: 15px">基础用法</h3>
    <div style="width: 480px; margin: 15px">
      <hl-card>
        <hl-checkbox v-model="check1">选项</hl-checkbox>
        <hl-checkbox v-model="check2">选项2</hl-checkbox>
      </hl-card>
    </div>
  </div>
  <div class="display-area">
    <h3 style="margin-left: 15px">禁止用法</h3>
    <div style="width: 480px; margin: 15px">
      <hl-card>
        <hl-checkbox v-model="check1" disabled>选项</hl-checkbox>
        <hl-checkbox v-model="check2" disabled>选项2</hl-checkbox>
      </hl-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const check1 = ref(true);
    const check2 = ref(false);

    return {
      check1,
      check2
    };
  }
};
</script>

<style scoped lang="scss">
.display-area {
  margin-top: 15px;
  button {
    margin-left: 10px;
  }
}
.item {
  margin-top: 10px;
}
.diplay-shadow-card-area{
  display: flex; 
  margin: 15px;
  div {
    margin-right: 15px;
  }
}
</style>