const path = require("path");

const webpackBaseConfig = require("./webpack.base.js");

const { merge } = require("webpack-merge");

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  entry: path.resolve(__dirname, "../examples/main.js"),
  devtool: "inline-source-map",
  devServer: {
    port: 8090,
    hot: true
  },
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
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
});