const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const argv = require('minimist')(process.argv.slice(2));
const UglifyJS = require("uglify-es");
const path = require('path');
const { merge } = require('webpack-merge');
const polyfills = require('./polyfills');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const dist = path.resolve(__dirname, '../dist');

const webpackProdConfig = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  output: {
    path: dist,
    filename: '[name].min.js'
  }
});

webpackProdConfig.plugins.push(new MiniCssExtractPlugin({ filename: 'styles.min.css' }));
webpackProdConfig.plugins.push(new HtmlWebpackPlugin(
  Object.assign(
    {},
    {
      inject: true,
      template: "src/demo/index.html",
    },
    {
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }
  )
));

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