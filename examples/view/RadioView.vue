<template>
  <hl-radio border v-model="val" label="2" name="gender" @change="test">男</hl-radio>
  <hl-radio border v-model="val" label="1" name="gender">女</hl-radio> 
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

<style>

</style>