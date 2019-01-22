const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    bundle: `${src}/app/index.js`
  },
  optimization: {
    splitChunks: {
      maxAsyncRequests: 1
    }
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
  plugins: [new CleanWebpackPlugin([dist])],
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', 'src']
  }
};
