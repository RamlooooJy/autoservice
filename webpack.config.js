const path = require( 'path' );
const MiniCss = require( "mini-css-extract-plugin" )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const CopyWebPackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack')

const arguments = process.argv.slice( 2 ).reduce( ( obj, item ) => {
	obj[item.split( '=' )[0]] = item.split( '=' )[1]
	return obj
}, {} )

const mode = arguments['--mode'] || 'development'

module.exports = {
	context: path.join( __dirname, 'src' ),
	mode,
	watchOptions: {
		aggregateTimeout: 200,
		poll: 1000,
	},
	entry: './index.js',
	output: {
		filename: 'index.js',
		path: path.resolve( __dirname, 'dist' ),
	},
	module: {
		rules: [
			{
				test: /\.(le|c)ss$/i,
				use: [ MiniCss.loader, "css-loader", "less-loader" ]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		]
	},
	plugins: [
		new MiniCss(),
		new HtmlWebpackPlugin( {  // Also generate a test.html
			filename: 'index.html',
			template: '../index.html'
		} ),
		new CopyWebPackPlugin(
			{
				patterns: [{ from: path.resolve(__dirname, "src", "js"), to: "js" }],

			}
		),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			'window.$': "jquery",
			'window.jQuery': "jquery"
		})
	],
	externals: {
		jquery: 'jQuery',
	},

	devServer: {
		contentBase: path.join( __dirname, 'dist' ),
		compress: true,
		port: 9000,
		open: 'Google Chrome',
	},
	devtool: "source-map" // for debug with file names
};
