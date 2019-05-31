const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
const polyfills = require('./polyfills');
const common = require('./webpack.common');
const dist = path.resolve(__dirname, '../dist');

module.exports = merge(common, {
  mode: 'development',
  entry: { polyfills },
  devtool: 'source-map',
  output: {
    path: dist,
    filename: '[name].js'
  },
  plugins: [
    new CopyPlugin([
      {
        from: 'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js',
        to: `${dist}/webcomponents-loader.js`
      },
      {
        from: 'node_modules/@webcomponents/webcomponentsjs/bundles/*.js',
        to: `${dist}/bundles/`,
        flatten: true
      }
    ])
  ]
});
