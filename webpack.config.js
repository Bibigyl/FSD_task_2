const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const ghpages = require('gh-pages');

module.exports = {
	entry: {
		'landing-page': './src/pages/landing-page/landing-page.js',
		'room-details': './src/pages/room-details/room-details.js',
		'search-room': './src/pages/search-room/search-room.js',
		'registration': './src/pages/registration/registration.js',
		'colors-and-types': './src/pages/colors-and-types/colors-and-types.js',
		'form-elements': './src/pages/form-elements/form-elements.js',
		'cards': './src/pages/cards/cards.js',
		'headers-and-footers': './src/pages/headers-and-footers/headers-and-footers.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', {
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
			template: './src/pages/colors-and-types/colors-and-types.pug',
			filename: 'colors-and-types.html'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/pages/form-elements/form-elements.pug',
			filename: 'form-elements.html'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/pages/cards/cards.pug',
			filename: 'cards.html'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/pages/headers-and-footers/headers-and-footers.pug',
			filename: 'headers-and-footers.html'
		}),
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
	],
	devtool: 'inline-source-map',
	devServer: {
		stats: 'errors-only',
		index: 'colors-and-types.html',
		open: true,
	}
};

ghpages.publish('dist', function (err) {});