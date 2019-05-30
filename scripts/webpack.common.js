const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const src = path.resolve(__dirname, '../src');
const dist = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    // Promise, CustomEvents, Symbol, Array.from and Object.Assign
    // will load by webcomponents-loader.js
    polyfills: [
      // OTHERS
      'whatwg-fetch',
      'intersection-observer',

      // ARRAYS
      'core-js/fn/array/entries',
      'core-js/fn/array/find',
      'core-js/fn/array/find-index',
      'core-js/fn/array/includes',
      'core-js/fn/array/keys',
      'core-js/fn/array/values',

      // OBJECTS
      'core-js/fn/object/entries',
      'core-js/fn/object/values',

      // STRINGS
      'core-js/fn/string/ends-with',
      'core-js/fn/string/includes',
      'core-js/fn/string/starts-with'
    ],
    webcomponents: '@webcomponents/webcomponentsjs/webcomponents-loader.js',
    vendor: [
      'lit-element'
    ],
    bundle: `${src}/app/index.ts`
  },
  optimization: {
    splitChunks: {
      maxAsyncRequests: 1,
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: /lit/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
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
