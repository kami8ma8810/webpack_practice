const Path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
	entry: './src/javascripts/main.js',
	output: {
		path: Path.resolve(__dirname, './dist'), //絶対パスで書く設定
		filename: 'javascripts/main.js', //distに出力される名前の変更
	},
	module: {
		rules: [{
			test: /\.css/,
			//※loaderはuse内の下から順に実行される
			use: [{
					loader: MiniCssExtractPlugin.loader, //main.cssの作成
				},
				{
					loader: 'css-loader', //CSS読み込み
				},
			],
		}, {
			test: /\.(png|jpg)/,
			use: [{
				loader: 'file-loader',
				options: {
					esModule: false,
					name: 'images/[name].[ext]',
				},
			}, ],
		}, {
			test: /\.pug/,
			use: [{
				loader: 'html-loader',
			}, {
				loader: 'pug-html-loader',
				options: {
					pretty: true,
				},
			}, ],
		}, ],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: './stylesheets/main.css',
		}),
		new HtmlWebpackPlugin({
			template: './src/templates/index.pug',
		}),
		new CleanWebpackPlugin(),
	],
}