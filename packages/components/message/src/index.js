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
  const instance = createMessageComponentByOpts(mergeOptions(opts));
  appendToBody(instance);
  addInstance(instance);
  return instance.proxy;
}

function closeMessage(instance) {
  updatePosition(instance);
  removeInstance(instance);
}

function removeInstance(instance) {
  instances.splice(getIndexByInstance(instance), 1);
}

function getIndexByInstance(instance) {
  return instances.findIndex((i) => i.uid == instance.uid);
}


function mergeOptions(opts) {
  opts.offset = calculateVerticalOffset();
  let userOnClose = opts.onClose;
  opts.onClose = (instance) => {
    closeMessage(instance);
    if (userOnClose) {
      userOnClose(instance.proxy);
    }
  };
  return opts;
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

function updatePosition(closeInstance) {
  const currentInstanceIndex = getIndexByInstance(closeInstance);

  if (currentInstanceIndex < 0) return;

  for (
    let index = currentInstanceIndex + 1;
    index < instances.length;
    index++
  ) {
    const instance = instances[index];
    let top = parseInt(instance.vnode.el.style["top"]);
    instance.vnode.el.style.setProperty("top", (top - getNextElementInterval(closeInstance)) + "px");
  }
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

function calculateVerticalOffset(offset = 20) {
  let result = offset;
  instances.forEach((instance) => {
    result += getNextElementInterval(instance);
  });
  return result;
}

function getNextElementInterval(instance) {
  const INTERVAL_HEIGHT = 16;
  return instance.vnode.el.offsetHeight + INTERVAL_HEIGHT;
}

export default Message;