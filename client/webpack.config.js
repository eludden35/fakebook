const path = require('path');
const config = require('./webpack.dev.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const newConfig = Object.assign({}, config);

newConfig.entry = [
	'@babel/polyfill',
	'./app/features/Certifications/index',
	'webpack/hot/only-dev-server'
];

newConfig.output = {
	filename: 'webpack-certifications-bundle.js',
	path: path.resolve('../app/assets/webpack'),
	publicPath: '/'
};

newConfig.devServer = {
	historyApiFallback: true,
	hot: true,
	open: true,
	openPage: 'dashboard',
	port: 9000,
	proxy: {
		'/api': {
			target: 'http://localhost:9010',
			secure: false
		}
	},
	publicPath: '/'
};

newConfig.plugins.push(new HtmlWebpackPlugin());

module.exports = newConfig;
module.exports.devtool = 'cheap-module-eval-source-map';
