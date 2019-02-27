const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const src = path.resolve(__dirname, '../src');
const dist = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    bundle: `${src}/app/index.js`
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new CleanWebpackPlugin([dist])],
  resolve: {
    extensions: ['.js', '.css'],
    modules: ['node_modules', 'src']
  }
};
