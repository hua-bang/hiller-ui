<template>
  <div 
  class="hl-switch"
  role="switch"
  :class="checked ? 'is-checked': ''"
  @click.prevent="switchValue"
  >
    <input 
      class="hl-switch--input" 
      type="checkbox" 
      :name="name" 
      :id="id" 
      ref="input"
      :disabled="disabled"
      @change="handleChange"
    />
    <span 
    ref="core" 
    class="hl-switch--core" 
    :class="classes" 
    
    ></span>
  </div>
</template>

<script>
import { computed, ref, nextTick, onMounted, watch } from "vue";
export default {
  name: "hl-switch",
  emits: ["change", "update:modelValue"],
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    name: {
      type: String,
      default: ""
    },
    id: String,
    activeColor: String,
    inactiveColor: String
  },
  setup(props, {emit}) {
    const input = ref(null);
    const core = ref(null);
    const checked = computed(() => {
      return props.modelValue === props.activeValue;
    });
    const classes = useClasses(props, checked);

    const setBackGroundColor = () => {
      let newColor = checked.value ? props.activeColor : props.inactiveColor;
      if(newColor) {
        core.value.style.borderColor = newColor;
        core.value.style.backgroundColor = newColor;
      }
    };

    onMounted(() => {
      if(props.activeColor || props.inactiveColor) {
        setBackGroundColor();
      }
      input.value.checked = checked;
    });

    watch(checked, () => {
      if(props.activeColor || props.inactiveColor) {
        setBackGroundColor();
      }
      input.value.checked = checked;
    });

    const handleChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue;
      emit("change", val);
      emit("update:modelValue", val);
      nextTick(() => {
        input.checked = checked;
      });
    };

    const switchValue = () => {
      !props.disabled && handleChange();
    };
    
    return {
      input,
      core,
      classes,
      switchValue,
      handleChange,
      checked
    };
  }
};

function useClasses(props, checked) {
  return computed(() => {
    return [
      props.disabled ? "is-disabled" : "",
      checked.value ? "is-active" : ""
    ];
  });
}
</script>

<style>

</style>