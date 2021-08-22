import HlButton from "./components/button/src/index.vue";
import HlCard from "./components/card/src/index.vue";
import HlIcon from "./components/icon/src/index.vue";
import HlSwitch from "./components/switch/src/index.vue";
import HlNotification from "./components/notification/src/index.vue";
import HlRadio from "./components/radio/src/index.vue";
import HlCheckBox from "./components/checkbox/src/index.vue";
import HlTree from "./components/tree/src/index.vue";

const components = [
  HlButton,
  HlCard,
  HlIcon,
  HlSwitch,
  HlNotification,
  HlRadio,
  HlCheckBox,
  HlTree
];

const install = (app) => {
  components.forEach(item => {
    app.component(item.name, item);
  });
};

export default {
  install,
  version: "1.0.0"
};
