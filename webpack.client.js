const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
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
        loader: 'babel-loader',
      }, {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          publicPath: '/',
          name: 'media/[name].[ext]'
        }
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ] 
      },
    ]
  },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: 'css/[name].css',
  //     chunkFilename: 'css/[id].chunk.css',
  //   }),
  //   // This is only used in production mode
  //   new OptimizeCSSAssetsPlugin({
  //     cssProcessorOptions: {
  //       map: {
  //         // `inline: false` forces the sourcemap to be output into a
  //         // separate file
  //         inline: false,
  //         // `annotation: true` appends the sourceMappingURL to the end of
  //         // the css file, helping the browser find the sourcemap
  //         annotation: true,
  //       }
  //     }
  //   }),
  // ],
  // plugins: [
  //   new CleanWebpackPlugin(),
  //   new HtmlWebpackPlugin({
  //     template: './public/index.html',
  //     filename: './index.html'
  //   })
  // ]
}