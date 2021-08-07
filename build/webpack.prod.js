const path = require("path");
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.js');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(webpackBaseConfig, {
  entry: path.resolve(__dirname, "../examples/main.js"),
  devtool: "source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})