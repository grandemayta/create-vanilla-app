const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const dist = path.resolve(__dirname, '../dist');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== 'polyfills';
      },
      name: 'vendor'
    }
  },
  output: {
    path: dist,
    filename: '[name].min.js'
  }
});
