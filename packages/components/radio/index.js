import Radio from "./src/index.vue";

Radio.install = (app) => {
  app.component(Radio.name, Radio);
};

export default Radio;