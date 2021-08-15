import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@src/view/Home.vue")
  },
  {
    path: "/button",
    name: "ButtonView",
    component: () => import("@src/view/ButtonView.vue")
  },
  {
    path: "/input",
    name: "InputView",
    component: () => import("@src/view/InputView.vue")
  },
  {
    path: "/message",
    name: "MessageView",
    component: () => import("@src/view/MessageView.vue")
  },
  {
    path: "/card",
    name: "CardView",
    component: () => import("@src/view/CardView.vue")
  },
  {
    path: "/icon",
    name: "IconView",
    component: () => import("@src/view/IconView.vue")
  },
  {
    path: "/switch",
    name: "SwitchView",
    component: () => import("@src/view/SwitchView.vue")
  },
  {
    path: "/notify",
    name: "NotificationView",
    component: () => import("@src/view/NotificationView.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;