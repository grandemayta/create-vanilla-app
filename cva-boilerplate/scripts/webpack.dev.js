const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const merge = require('webpack-merge');
const polyfills = require('./polyfills');
const common = require('./webpack.common');
const dist = path.resolve(__dirname, '../dist');

const webpackDevConfig = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: dist,
    filename: '[name].js'
  }
});

webpackDevConfig.plugins.push(new MiniCssExtractPlugin({ filename: 'styles.css' }));

if (argv['legacy']) {
  webpackDevConfig.entry.polyfills = polyfills;
  webpackDevConfig.plugins.push(new CopyPlugin([
    {
      from: 'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js',
      to: `${dist}/webcomponents-loader.js`
    },
    {
      from: 'node_modules/@webcomponents/webcomponentsjs/bundles/*.js',
      to: `${dist}/bundles/`,
      flatten: true
    }
  ]));
}

module.exports = webpackDevConfig;
