// webpack v4
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const autoprefixer = require('autoprefixer');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
//const StylelintPlugin = require('stylelint-webpack-plugin');

const PATHS = {
	src: path.join(__dirname,'src'),
	dist: path.join(__dirname, 'dist')
};

module.exports = {
	entry: {
		'landing-page': './src/pages/landing-page/landing-page.js',
		'room-details': './src/pages/room-details/room-details.js',
		'search-room': './src/pages/search-room/search-room.js',
		'registration': './src/pages/registration/registration.js',
		'ui-kit': './src/pages/ui-kit/ui-kit.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
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
				use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', {
					loader: 'postcss-loader',
					options: {
						plugins: () => autoprefixer({
							overrideBrowserslist: ['last 3 versions', '> 1%']
						})
					}
				}, 'sass-loader']
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			},
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'file-loader',
				options: {
					name: 'images/[name].[ext]'
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[ext]'
				}
			}
		]
	},
	resolve: {
    	alias: {
			//locale problem: https://github.com/moment/moment/issues/2979
			moment$: 'moment/moment.js',
    	}
  	},
	plugins: [ 
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
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
			template: './src/pages/registration/registration.pug',
			filename: 'registration.html'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/pages/ui-kit/ui-kit.pug',
			filename: 'ui-kit.html'
		}),
		new LiveReloadPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new MomentLocalesPlugin({
			localesToKeep: ['es-us', 'ru'],
		}),
    	//locale problem: https://github.com/moment/moment/issues/2979
		new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/),
 		//new StylelintPlugin({
		//	files: ['src/**/*.scss'],
		//	exclude: ['src/libs/**/*.scss'],
		//}), 
	],
	devtool: 'inline-source-map',
	devServer: {
		stats: 'errors-only',
		index: 'ui-kit.html',
		open: true,
	}
};

var ghpages = require('gh-pages');
ghpages.publish('dist', function(err) {});