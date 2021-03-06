<template>
  <transition name="hl-message-fade" @after-leave="handleAfterLeave" appear>
    <div
      class="hl-message"
      :class="classes"
      customClass
      :style="positionStyle"
      v-show="visible"
    >
    <i :class="iconClass" v-if="iconClass"></i>
    <i :class="typeClass" v-else></i>
    <slot>
      <p class="hl-message--content">{{ message }}</p>
    </slot>
    <i v-if="showClose" class="hl-message__closeBtn iconfont icon-Close" @click="close"></i>
    </div>
  </transition>
</template>

<script>
import { getCurrentInstance, computed, ref, watch, onMounted, onUnmounted } from "vue";
import { useTimer } from "../../../hooks/useTimer.js";

const typeMap = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error"
};

export default {
  name: "hl-message",
  props: {
    message: {
      type: [String, Object]
    },
    type: {
      type: String,
      default: "info",
      validator(val) {
        return ["","success", "warning", "info", "error"].includes(val);
      },
    },
    duration: {
      type: Number,
      default: 4000
    },
    iconClass: String,
    showClose: Boolean,
    center: Boolean,
    customClass: String,
    dangerouslyUseHTMLString: Boolean,
    offset: Number,
    onClose: null
  },
  emits: ["close"],
  setup(props) {
    const instance = getCurrentInstance();
    const visible = ref(true);
    const closed = ref(false);
    const verticalOffset = ref(props.offset);

    const classes = useClass(props);

    const typeClass = computed(() => {
      return props.type && !props.iconClass
        ? `hl-message__inco el-icon-${typeMap[props.type]}`
        : "";
    });

    const positionStyle = computed(() => {
      return {
        "top" : `${verticalOffset.value}px`
      };
    });

    const { startTimer, clearTimer } = useTimer(() => {
      if(!closed.value && props.duration) {
        close();
      }
    }, props.duration);

    const close = () => {
      closed.value = true;
      visible.value = false;

      if(typeof props.onClose === "function") {
        props.onClose(instance);
      }
    };

    watch(closed, (newVal) => {
      if(newVal) {
        visible.value = false;
      }
    });

    const handleAfterLeave = () => {
      instance.vnode.el.parentElement?.removeChild(instance.vnode.el);
    };

    const keyDown = (e) => {
      if(e.keyCode === 27) {
        if(!closed.value) {
          close();
        }
      }
    };

    onMounted(() => {
      startTimer();
      document.addEventListener("keydown" , keyDown);
    });

    onUnmounted(() => {
      document.removeEventListener("keydown", keyDown);
    });

    return {
      close,
      visible,
      classes,
      typeClass,
      startTimer,
      clearTimer,
      positionStyle,
      handleAfterLeave
    };
  }
};

function useClass(props) {
  const { type, center } = props;
  return computed(() => {
    return [
      type ? `hl-message--${type}` : "",
      center ? "is-center" : ""
    ];
  });
}

</script>

<style>

</style>