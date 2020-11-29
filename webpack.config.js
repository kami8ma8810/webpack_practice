const Path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: Path.resolve(__dirname, './dist'), //絶対パスで書く設定
    filename: 'js/main.js', //distに出力される名前の変更
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
    }, ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './style/my.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
}