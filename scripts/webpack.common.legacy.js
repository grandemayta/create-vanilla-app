const path = require('path');

const src = path.resolve(__dirname, '../src');

module.exports = {
  entry: {
    bundle: ['core-js/fn/promise', `${src}/app/index.js`]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          /node_modules\/*\/src/,
          /node_modules\/@polymer/,
          /node_modules\/lit-html/,
          /src/
        ],
        options: {
          cacheDirectory: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', 'src']
  }
};
