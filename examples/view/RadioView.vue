<template>
  <div>
    <h2 style="margin-left: 15px">Switch组件</h2>
  </div>
  <div class="display-area">
    <h3 style="margin-left: 15px">基础用法</h3>
    <div style="width: 480px; margin: 15px">
      <hl-card>
        <hl-radio v-model="val" label="2" name="gender" @change="test">男</hl-radio>
        <hl-radio v-model="val" label="1" name="gender">女</hl-radio>
      </hl-card>
    </div>
  </div> 
  <div class="display-area">
    <h3 style="margin-left: 15px">禁止用法</h3>
    <div style="width: 480px; margin: 15px">
      <hl-card>
        <hl-radio disabled v-model="val" label="2" name="gender" @change="test">男</hl-radio>
        <hl-radio disabled v-model="val" label="1" name="gender">女</hl-radio>
      </hl-card>
    </div>
  </div> 
  <div class="display-area">
    <h3 style="margin-left: 15px">边框用法</h3>
    <div style="width: 480px; margin: 15px">
      <hl-card>
        <hl-radio border v-model="val" label="2" name="gender" @change="test">男</hl-radio>
        <hl-radio border v-model="val" label="1" name="gender">女</hl-radio>
      </hl-card>
    </div>
  </div>  
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let val = ref("1");
    const test = () => {
      console.log(val.value);
    };

    return {
      val,
      test
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