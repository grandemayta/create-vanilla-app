const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const argv = require('minimist')(process.argv.slice(2));
const UglifyJS = require("uglify-es");
const path = require('path');
const merge = require('webpack-merge');
const polyfills = require('./polyfills');
const common = require('./webpack.common');
const dist = path.resolve(__dirname, '../dist');

const webpackProdConfig = merge(common, {
  mode: 'production',
  output: {
    path: dist,
    filename: '[name].min.js'
  }
});

webpackProdConfig.plugins.push(new MiniCssExtractPlugin({ filename: 'styles.min.css' }));
webpackProdConfig.plugins.push(new OptimizeCssAssetsPlugin());

if (argv['legacy']) {
  webpackProdConfig.entry.polyfills = polyfills;
  webpackProdConfig.plugins.push(
    new CopyPlugin([
      {
        from: 'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js',
        to: `${dist}/webcomponents-loader.js`,
        transform: function (content) {
          return UglifyJS.minify(content.toString()).code;
        }
      },
      {
        from: 'node_modules/@webcomponents/webcomponentsjs/bundles/*.js',
        to: `${dist}/bundles/`,
        flatten: true,
        transform: function (content) {
          return UglifyJS.minify(content.toString()).code;
        }
      }
    ]),
  );
}

module.exports = webpackProdConfig;