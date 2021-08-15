<template>
  <transition
    name="hl-notification-fade"
    @after-leave="handleAfterLeave"
    appear
  >
    <div class="hl-notification right" v-show="visible">
      <div class="hl-notification--group">
        <div class="hl-notification--title">
          {{ title }}
        </div>
        <div class="hl-notification--message">
          {{ message }}
        </div>
      </div>
      <i
        v-if="showClose"
        class="hl-notification--closeBtn iconfont icon-Close"
        @click="close"
      ></i>
    </div>
  </transition>
</template>

<script>
import { ref, watch, onMounted, onUnmounted, getCurrentInstance } from "vue";
import { useTimer } from "../../../hooks/useTimer.js";
export default {
  name: "hl-notification",
  emits: ["close"],
  props: {
    title: String,
    message: [String, Object],
    showClose: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 2000
    }
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const visible = ref(true);
    const closed = ref(false);
    let { startTimer, clearTimer } = useTimer(() => {
      close();
    }, props.duration);

    const handleAfterLeave = () => {
      instance.vnode.el.parentElement?.removeChild(instance.vnode.el);
    };

    watch(closed, () => {
      visible.value = false;
    });

    const close = () => {
      closed.value = true;
      emit("close");
    };


    onMounted(() => {
      if (props.duration) {
        startTimer();
      }
    });

    onUnmounted(() => {
      if (props.duration) {
        clearTimer();
      }
    });

    return {
      visible,
      close,
      handleAfterLeave
    };
  }
};
</script>

<style>
</style>