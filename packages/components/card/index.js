import Button from "./src/index.vue";

Button.install = function (app) {
  app.component(Button.name, Button);
};

export default Button;