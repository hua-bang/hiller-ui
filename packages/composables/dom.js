export function appendToBody(componentInstance) {
  document.body.append(componentInstance.vnode.el);
}