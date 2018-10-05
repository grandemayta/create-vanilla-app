const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const dist = path.resolve(__dirname, './dist');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: dist,
    filename: '[name].js'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: dist,
    port: 3002,
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
});
