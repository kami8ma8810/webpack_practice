const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {
  Template
} = require('webpack');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'), //絶対パスで書く設定
    filename: 'main.js', //distに出力される名前の変更
  },
  module: {
    rules: [{
      test: /\.css/,
      //※loaderはuse内の下から順に実行される
      use: [{
          loader: miniCssExtractPlugin.loader, //main.cssの作成
        },
        {
          loader: 'css-loader', //CSS読み込み
        },
      ],
    }, ],
  },
  plugins: [
    new miniCssExtractPlugin(),
    new htmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}