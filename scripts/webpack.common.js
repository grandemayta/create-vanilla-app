const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const src = path.resolve(__dirname, '../src');
const dist = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    polyfills: [
      // OTHERS
      'core-js/fn/symbol',
      'whatwg-fetch',
      'custom-event-polyfill',

      // ARRAYS
      'core-js/fn/array/entries',
      'core-js/fn/array/from',
      'core-js/fn/array/find',
      'core-js/fn/array/find-index',
      'core-js/fn/array/includes',
      'core-js/fn/array/keys',
      'core-js/fn/array/values',

      // OBJECTS
      'core-js/fn/object/assign',
      'core-js/fn/object/entries',
      'core-js/fn/object/values',

      // STRINGS
      'core-js/fn/string/ends-with',
      'core-js/fn/string/includes',
      'core-js/fn/string/starts-with'
    ],
    vendor: [
      '@webcomponents/webcomponentsjs/webcomponents-loader.js',
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
        loader: 'ts-loader'
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
