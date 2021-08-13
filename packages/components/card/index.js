import Card from "./src/index.vue";

Card.install = function (app) {
  app.component(Card.name, Card);
};

export default Card;