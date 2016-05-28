'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var appPath = path.join(__dirname, '/src/client/app');

var config = {
	context: appPath,
	entry: {
		app: './app.module.js'
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].bundle.js',
        chunkFilename: '[name].[hash].chunk.js'
	},
	module: {
		loaders: [
			{
				teste: /\.js$/,
				loader: 'ng-annotate',
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				loader: 'style!css!less'
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
				loader: 'file-loader'
			},
            {
                test: /\.html$/,
                loader: 'html'
            }
		]
	},
	resolve: {
		alias: {
			'font-awesome': path.join(__dirname, 'node_modules', 'font-awesome', 'css', 'font-awesome.css'),
			'bootstrap-css': path.resolve(__dirname, './node_modules/bootstrap/dist/css/bootstrap.css'),
			'bootstrap-theme-css': path.resolve(__dirname, './node_modules/bootstrap/dist/css/bootstrap-theme.css'),
			'toastr-css': path.resolve(__dirname, './node_modules/toastr/build/toastr.css')
		},
		modulesDirectories: [
			'node_modules',
			'bower_components'
		]
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: 'body',
			template: 'src/client/index.html'
		}),
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
			'window.jQuery': 'jquery',
			'window.$': 'jquery'
		})
	]
};

module.exports = config;