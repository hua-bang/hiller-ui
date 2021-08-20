<template>
  <div class="hl-radio" @click="handleChange" :class=" [isChecked ? 'is-checked':'', disabled ? 'is-disabled': '', border? 'border': '' ]">
    <label :for="`hl-radio--original--label---${label}`" class="hl-radio-label" >
      <span class="hl-radio-input" :class=" [isChecked ? 'is-checked':'', disabled ? 'is-disabled': ''] ">
        <input class="hl-radio--original" :id="`hl-radio--original--label---${label}`" type="radio" :value="label" :name="name" />
      </span>
        <span class="hl-radio-label" :class="disabled ? 'is-disabled': ''">
          <slot>
          </slot>
        </span>
    </label>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "hl-radio",
  emits: ["change", "update:modelValue"],
  props: {
    name: String,
    label: {
      type: String
    },
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    border: Boolean
  },
  setup(props, { emit }) {
    const isChecked = computed(() => {
      return props.modelValue === props.label;
    });

    const handleChange = () => {
      if(props.disabled) {
        return;
      }
      emit("update:modelValue", props.label);
      emit("change", props.label);
    };

    return {
      isChecked,
      handleChange
    };
  }
};
</script>

<style>

</style>