const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: dist,
    filename: '[name].js'
  },
  devtool: 'none',
  devServer: {
    contentBase: dist,
    port: 3002,
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${src}/demo/index.html`,
      filename: 'index.html'
    })
  ]
});
