const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const dist = path.resolve(__dirname, '../dist');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: dist,
    filename: '[name].min.js'
  }
});
