import MessageComponent from "./index.vue";
import { createCompoent } from "../../../composables/component";

const instances = [];
// let seed = 1;

const Message = (options) => {
  if (typeof options === "string") {
    options = {
      message: options
    };
  }
  createMessage(options);
};

function createMessage(opts) {
  const instance = createMessageComponentByOpts(opts);
  appendToBody(instance);
  addInstance(instance);
  return instance.proxy;
}

function addInstance(instance) {
  instances.push(instance);
}

function appendToBody(componentInstance) {
  document.body.append(componentInstance.vnode.el);
}

function createMessageComponentByOpts(opts) {
  return createCompoent(MessageComponent, opts);
}

const TypeArr = [
  "success",
  "info",
  "warning",
  "error"
];

TypeArr.forEach(type => {
  Message[type] = function (message, duration = 2000) {
    return Message({
      message,
      type,
      duration
    });
  };
});

export default Message;