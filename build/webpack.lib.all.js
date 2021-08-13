const webpackBaseConfig = require("./webpack.base.js");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(webpackBaseConfig, {
  devtool: "source-map",
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "../packages/index.js")
  },
  output: {
    path: path.resolve(__dirname, "../lib"),
    publicPath: "/lib/",
    filename: "hiller-ui.min.js",
    library: "HillerUI",
    libraryTarget: "umd"
  },
  externals: {
    vue: "commonjs2 vue"
  }
});