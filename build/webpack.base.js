const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const EsLintWebpackPlugin = require("eslint-webpack-plugin");

const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  output: {
    path: path.resolve(__dirname, "../dist/"),
    filename: "build.js"
  },
  target: "web",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          sourceMap: true
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "../packages"),
      "@src": path.resolve(__dirname, "../examples"),
      "@components": path.resolve(__dirname, "../packages/components"),
      "@styles": path.resolve(__dirname, "../packages/styles"),
    },
    symlinks: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    }),
    new EsLintWebpackPlugin({
      extensions: ["js", "json", "vue"],
      exclude: "/node_modules/"
    })
  ]
};