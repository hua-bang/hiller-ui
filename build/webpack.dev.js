const path = require("path");

const webpack = require('webpack');

const webpackBaseConfig = require("./webpack.base.js");

const { merge } = require("webpack-merge");

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  entry: path.resolve(__dirname, "../examples/main.js"),
  devtool: 'inline-source-map',
  devServer: {
    port: 8090,
    hot: true
  },
})