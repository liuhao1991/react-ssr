const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build'
  },
  externals: [nodeExternals()],
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
          name: 'media/[name].[ext]',
          emitFile: false,
        }
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          onlyLocals: true,
          modules: true,
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