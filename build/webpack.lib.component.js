const webpackBaseConfig = require("./webpack.base.js");
const { merge } = require("webpack-merge");
const path = require("path");

const entries = {};

const components = require("./component.json");
const basePath = path.resolve(__dirname, "../");

Object.keys(components).forEach(key => {
  entries[key] = path.join(basePath, "packages/components", components[key]);
});
console.log(entries);

module.exports = merge(webpackBaseConfig, {
  devtool: "source-map",
  mode: "production",
  entry: entries,
  output: {
    path: path.resolve(__dirname, "../lib"),
    publicPath: "/lib/",
    filename: "[name]/index.js",
    chunkFilename: "[id].js",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue"
    }
  }
});