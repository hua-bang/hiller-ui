<template>
  <div>
    <h2 style="margin-left: 15px">Switch组件</h2>
  </div>
  <div class="display-area">
    <h3 style="margin-left: 15px">基础用法</h3>
    <div style="width: 480px; margin: 15px">
      <hl-card>
        <hl-switch v-model="value1"></hl-switch>
        <hl-switch v-model="value3"></hl-switch>
      </hl-card>
    </div>
  </div>
  <div class="display-area">
    <h3 style="margin-left: 15px">禁止用法</h3>
    <div style="width: 480px; margin: 15px">
      <hl-card>
        <hl-switch v-model="value3" :disabled="true"></hl-switch>
      </hl-card>
    </div>
  </div>
  <div class="display-area">
    <h3 style="margin-left: 15px">默认颜色</h3>
    <div style="width: 480px; margin: 15px">
      <hl-card>
        <hl-switch
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-value="1"
      inactive-value="2"
    >
    </hl-switch>
      </hl-card>
    </div>
  </div>
</template>

<script>
import HlSwitch from "@components/switch/src/index.vue";
import { ref } from "@vue/reactivity";
export default {
  components: {
    "hl-switch": HlSwitch
  },
  setup() {
    const value1 = ref(false);
    const value2 = ref("1");
    const value3 = ref(true);

    return {
      value1,
      value2,
      value3
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