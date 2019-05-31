const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const src = path.resolve(__dirname, '../src');
const dist = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    vendor: ['lit-element'],
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
        include: /lit/,
        exclude: /webcomponentsjs/
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
