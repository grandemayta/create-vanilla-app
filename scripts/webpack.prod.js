const CopyPlugin = require('copy-webpack-plugin');
const UglifyJS = require("uglify-es");
const path = require('path');
const merge = require('webpack-merge');
const polyfills = require('./polyfills');
const common = require('./webpack.common');
const dist = path.resolve(__dirname, '../dist');

module.exports = merge(common, {
  mode: 'production',
  entry: { polyfills },
  output: {
    path: dist,
    filename: '[name].min.js'
  },
  plugins: [
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
  ]
});
