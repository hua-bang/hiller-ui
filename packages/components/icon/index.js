import Icon from "./src/index.vue";

Icon.install = function (app) {
  app.component(Icon.name, Icon);
};

export default Icon;