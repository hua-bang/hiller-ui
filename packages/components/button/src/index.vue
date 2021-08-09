<template>
  <button 
    class="hl-button"
    @click="handleClick"
    :class="classes"
    :disabled="disabled || loading"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <slot>Button</slot>
  </button>
</template>

<script>
import { computed } from "vue";

export default {
  name: "HlButton",
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String
    },
    disabled: Boolean,
    loading: Boolean,
    round: Boolean
  },
  setup(props, context) {
    
    const handleClick = () => {
      context.emit("click");
    };

    const classes = useClasses(props);

    return {
      handleClick,
      classes
    };
  }
};

function useClasses(props) {
  return computed(() => {
    const { type, size, disabled, round, loading } = props;
    return [
      type ? `hl-button--${type}` : "",
      size ? `hl-button--${size}` : "",
      disabled ? "is-disable": "",
      round ? "is-round" : "",
      loading? "is-loading": ""
    ];
  });
}


</script>

<style lang="scss" scoped>
@import "@styles/button.scss";
</style>