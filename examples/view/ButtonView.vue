<template>
  <div>
    <h2 style="margin-left: 15px">
      Button 组件
    </h2>
  </div>
  <div class="button-area">
    <h3 style="margin-left: 15px">基础按钮</h3>
    <hl-button>default</hl-button>
    <hl-button type="primary">primary</hl-button>
    <hl-button type="success">success</hl-button>
    <hl-button type="info">info</hl-button>
    <hl-button type="warning">warning</hl-button>
    <hl-button type="danger">danger</hl-button>
  </div>
  <div class="button-area">
    <h3 style="margin-left: 15px">圆形按钮</h3>
    <hl-button round></hl-button>
    <hl-button round type="primary"></hl-button>
    <hl-button round type="success"></hl-button>
    <hl-button round type="info"></hl-button>
    <hl-button round type="warning"></hl-button>
    <hl-button round type="danger"></hl-button>
  </div>
  <div class="button-area">
    <h3 style="margin-left: 15px">禁用按钮</h3>
    <hl-button disabled></hl-button>
    <hl-button disabled type="primary"></hl-button>
    <hl-button disabled type="success"></hl-button>
    <hl-button disabled type="info"></hl-button>
    <hl-button disabled type="warning"></hl-button>
    <hl-button disabled type="danger"></hl-button>
  </div>
  <div class="button-area">
    <h3 style="margin-left: 15px">按钮尺寸</h3>
    <hl-button>默认按钮</hl-button>
    <hl-button size="medium">中等按钮</hl-button>
    <hl-button size="small">小型按钮</hl-button>
    <hl-button size="mini">超小按钮</hl-button>
  </div>
  <div class="button-area">
    <h3 style="margin-left: 15px">按钮事件</h3>
    <hl-button @click="test">打开弹窗</hl-button>
  </div>
</template>

<script>
import HlButton from "@components/button/src/index";
export default {
  components: {
    "hl-button": HlButton
  },
  setup() {
    let test = () => {
      alert("click the button");
    };
    return {
      test
    };
  }
};
</script>

<style scoped lang="scss">
.button-area {
  margin-top: 15px;
  button {
    margin-left: 10px;
  }
}
</style>