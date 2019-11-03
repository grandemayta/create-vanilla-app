const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NoModulePlugin = require('webpack-nomodule-plugin').WebpackNoModulePlugin;
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const src = path.resolve(__dirname, '../src');
const dist = path.resolve(__dirname, '../dist');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: dist,
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      maxAsyncRequests: 1
    }
  },
  devtool: 'source-map',
  devServer: {
    contentBase: dist,
    port: 3002,
    open: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new HtmlWebpackPlugin({
      template: `${src}/demo/index.html`,
      filename: 'index.html',
      chunks: [
        'bundle'
      ],
      chunksSortMode: "manual",
      minify: {
        removeScriptTypeAttributes: true
      }
    }),
    new NoModulePlugin({
      filePatterns: ['polyfills**.js']
    })
  ]
});
