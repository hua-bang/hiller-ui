import { createCompoent } from "../../../composables/component";
import { appendToBody } from "../../../composables/dom";
import NotificationComponent from "./index.vue";

const instanceList = [];

export function Notification(options) {
  createNotification(options);
}

function createNotification(opts) {
  const instance = createNotificationComponentByOption(opts);
  appendToBody(instance);
  instanceList.push(instance);
  return instance.proxy;
}


function createNotificationComponentByOption(opts) {
  return createCompoent(NotificationComponent, opts);
}