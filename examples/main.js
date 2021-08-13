import { createApp } from "vue";

import HillerUI from "../lib/hiller-ui.min";
// import HillerUI from "../packages/index";
import App from "./App.vue";
import router from "./router";
import "@styles/index.scss";

createApp(App).use(HillerUI).use(router).mount("#app");