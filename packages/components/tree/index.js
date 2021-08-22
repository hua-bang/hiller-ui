import Tree from "./src/index.vue";

Tree.install = (app) => {
  app.component(Tree.name, Tree);
};

export default Tree;