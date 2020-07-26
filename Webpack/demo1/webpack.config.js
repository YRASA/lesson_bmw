const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './app.js',  // 工程资源入口(可多个, 每个入口对应一个打包结果)
  output: {
    path: path.join(__dirname, 'dist'),  // 绝对路径
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,  // 服务端口
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
}