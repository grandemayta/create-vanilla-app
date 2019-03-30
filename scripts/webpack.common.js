const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const src = path.resolve(__dirname, '../src');
const dist = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    bundle: ['core-js/fn/promise', `${src}/app/index.js`]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', 'src']
  },
  plugins: [
    new CleanWebpackPlugin([dist], {
      root: process.cwd(),
      verbose: true,
      dry: false
    })
  ]
};
