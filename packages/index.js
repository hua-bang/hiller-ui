import HlButton from "./components/button/src/index.vue";
import HlCard from "./components/card/src/index.vue";
import HlIcon from "./components/icon/src/index.vue";

const components = [
  HlButton,
  HlCard,
  HlIcon
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
