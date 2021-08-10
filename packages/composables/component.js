import { h, render } from "vue";

const MOUNT_COMPONENT_REF = "hl_component";
const COMPONENT_CONTAINER_SYMBOL = Symbol("hl_component_container");

export function createCompoent(Component, props, children) {
  const vnode = h(Component, { ...props, ref: MOUNT_COMPONENT_REF }, children);
  const container = document.createElement("div");
  vnode[COMPONENT_CONTAINER_SYMBOL] = container;
  render(vnode, container);
  return vnode.component;
}

export function unmountComponent(ComponInstance) {
  render(undefined, ComponInstance.vnode[COMPONENT_CONTAINER_SYMBOL]);
}