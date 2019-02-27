const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const commonLegacy = require('./webpack.common.legacy');
const getSubNpmTask = require('./getSubNpmTask');
const isLegacy = getSubNpmTask(process);
const path = require('path');

let config = common;

if (isLegacy) config = commonLegacy;

const src = path.resolve(__dirname, '../src');
const dist = path.resolve(__dirname, '../dist');

module.exports = merge(config, {
  mode: 'development',
  output: {
    path: dist,
    filename: isLegacy ? '[name].legacy.js' : '[name].js'
  },
  optimization: {
    splitChunks: {
      maxAsyncRequests: 1
    }
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: dist,
    port: 3002,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${src}/demo/index.html`,
      filename: 'index.html'
    })
  ]
});
