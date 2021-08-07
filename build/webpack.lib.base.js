const path = require("path");

const webpack = require('webpack');

const webpackBaseConfig = require("./webpack.base.js");

const { merge } = require("webpack-merge");

module.exports = merge(webpackBaseConfig, {

})