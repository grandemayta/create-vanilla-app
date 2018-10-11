const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    app: [
      '@webcomponents/webcomponentsjs/webcomponents-bundle',
      '@polymer/lit-element',
      `${src}/app/component.js`
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new CleanWebpackPlugin([dist])],
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', 'src'],
    alias: {
      app: `${src}/app`,
      components: `${src}/app/components`
    }
  }
};
