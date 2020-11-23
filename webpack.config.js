const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'), //絶対パスで書く設定
    filename: 'main.js', //distに出力される名前の変更
  },
  module: {
    rules: [{
      test: /\.css/,
      use: [{
        loader: 'css-loader',
      }, ],
    }, ],
  },
}