// webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PATHS = {
  src: path.join(__dirname,'src'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: {
    'landing-page': './src/pages/landing-page/landing-page.js',
    'room-details': './src/pages/room-details/room-details.js',
    'seach-room': './src/pages/search-room/search-room.js',
    'ui-kit': './src/pages/ui-kit/ui-kit.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      }
    ]
  },
  plugins: [ 
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/landing-page/landing-page.pug',
      filename: 'landing-page.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/room-details/room-details.pug',
      filename: 'room-details.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/search-room/search-room.pug',
      filename: 'search-room.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/ui-kit/ui-kit.pug',
      filename: 'ui-kit.html'
    }),
    new WebpackMd5Hash()
  ]
};