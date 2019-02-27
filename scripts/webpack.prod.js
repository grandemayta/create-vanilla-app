const merge = require('webpack-merge');
const common = require('./webpack.common');
const commonLegacy = require('./webpack.common.legacy');
const getSubNpmTask = require('./getSubNpmTask');
const isLegacy = getSubNpmTask(process);
const path = require('path');
const dist = path.resolve(__dirname, '../dist');

let config = common;

if (isLegacy) config = commonLegacy;

module.exports = merge(config, {
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
    filename: isLegacy ? '[name].legacy.min.js' : '[name].min.js'
  }
});
