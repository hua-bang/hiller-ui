<template>
  <HLInput />
  <hl-button />
</template>

<script>
import HLInput from "@components/input/src/index";
import HLButton from "@components/button/src/index";
export default {
  components: {
    HLInput,
    "hl-button": HLButton
  }
};
</script>

<style>

</style>