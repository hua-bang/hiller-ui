<template>
  <div class="hl-checkbox" :class="classes">
    <label class="hl-checkbox-label" @click.prevent="handleChange">
      <span class="hl-checkbox-input" :class="spanClass">
        <input
          type="checkbox"
          :name="name"
          class="hl-checkbox--original-input"
          id=""
        />
      </span>
      <span class="hl-checkbox-content">
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "hl-checkbox",
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    name: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const isChecked = computed(() => {
      return props.modelValue === true;
    });
    const spanClass = useClass(isChecked, props);
    const classes = useClass(isChecked, props);
    const handleChange = () => {
      if (!props.disabled) {
        let value = !props.modelValue;
        emit("update:modelValue", value);
      }
    };

    return {
      classes,
      isChecked,
      spanClass,
      handleChange
    };
  }
};
function useClass(isChecked, props) {
  return computed(() => {
    return [
      isChecked.value ? "isChecked" : "",
      props.disabled ? "isDisabled" : ""
    ];
  });
}
</script>

<style>
</style>