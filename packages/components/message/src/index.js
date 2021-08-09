import { createApp } from "vue";
import Main from "./index.vue";

const Message = (message, type, duration=2000) => {
  const messageInstance = createApp(Main, {
    message,
    type,
    duration
  });
  const mountNode = document.createElement("div");
  document.body.appendChild(mountNode);
  messageInstance.mount(mountNode);
  setTimeout(() => {
    document.body.removeChild(mountNode);
  }, duration);
};

export default Message;