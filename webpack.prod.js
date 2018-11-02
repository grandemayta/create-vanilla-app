const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const dist = path.resolve(__dirname, './dist');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      maxAsyncRequests: 1
    }
  },
  output: {
    path: dist,
    filename: '[name].min.js'
  }
});
