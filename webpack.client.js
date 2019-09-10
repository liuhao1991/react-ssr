const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'js/client_bundle.js',
    path: path.resolve(__dirname, 'build/static'),
    publicPath: '/build/static'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }, {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          publicPath: '/',
          name: 'media/[name].[ext]'
        }
      },
    ]
  },
  // plugins: [
  //   new CleanWebpackPlugin(),
  //   new HtmlWebpackPlugin({
  //     template: './public/index.html',
  //     filename: './index.html'
  //   })
  // ]
}