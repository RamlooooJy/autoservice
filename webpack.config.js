const path = require('path');
const MiniCss = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebPackPlugin = require("copy-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const webpack = require('webpack')

const arguments = process.argv.slice(2).reduce((obj, item) => {
	obj[item.split('=')[0]] = item.split('=')[1]
	return obj
}, {})

const mode = arguments['--mode'] || 'development'

console.log(mode)
console.log(mode === "development" ? "source-map": false)

const imgPath = {}
if (mode === 'production') {
	imgPath.name = '[name].[ext]'
}

module.exports = {
	context: path.join(__dirname, 'src'),
	mode,
	devtool:  mode === "development" ? "source-map": false, // for debug with file names
	watchOptions: {
		aggregateTimeout: 200,
		poll: 1000,
	},
	entry: './index.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(le|c)ss$/i,
				use: [ MiniCss.loader, "css-loader", "less-loader" ],
			},
			{
				test: /\.(woff(2)?|ttf|eot|ico)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'assets/',
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'img/',
							...imgPath,
						},
					},
				],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ],
					},
				},
			},
		],
	},
	optimization: {
		minimize: mode === 'production',
		minimizer: [ new CssMinimizerPlugin() ],
	},
	plugins: [
		//<link href="assets/css/style.css?ver=1.1"
		new MiniCss(),
		new CopyWebPackPlugin({
				patterns: [ { from: path.resolve(__dirname, "src", "js"), to: "js" } ],
			},
		),
		new FaviconsWebpackPlugin('./assets/img/fav.png'),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			'window.$': "jquery",
			'window.jQuery': "jquery",
		}),
		new HtmlWebpackPlugin({
			minify: false,
			filename: 'index.html',
			template: '../index.html',
		}),
		new HtmlWebpackPlugin({
			minify: false,
			filename: 'politic.html',
			template: '../politic.html',
		}),
		new HtmlWebpackPlugin({
			minify: false,
			filename: 'page.html',
			template: '../page.html',
		}),
	],
	externals: {
		jquery: 'jQuery',
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
		open: 'Google Chrome',
	},
};
