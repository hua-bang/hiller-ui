import Checkbox from "./src/index.vue";

Checkbox.install = (app) => {
  app.component(Checkbox.name, Checkbox);
};

export default Checkbox;