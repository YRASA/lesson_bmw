const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HappyPack = require('happypack')
// HappyPack根据cpu创建树线程池(用多进程实现多线程)
// const happyThreadPool = HappyPack.ThreadPool({size:OscillatorNode.cpus().length})

module.exports = {
  optimization: {
    minimizer: [new TerserPlugin({
      cache: true,
      terserOptions: {
        compress: {
          unused: true,
          drop_debugger: true,
          drop_console: true,
          dead_code: true
        }
      }
    })]
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.jsx', 'json']
  },
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    noParse: /node_modules\/(jquery\.js)/,
    rules: [
      {
        test: /\.jsx?/,
        include: path.resolve('src'),
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              require.resolve('@babel/preset-react'),
              [require.resolve('@babel/preset-env', {modules: false})]
            ],
            cacheDirectory: true,
          }
        }
        // use: [
        //   'thread-loader'
              // 其他loader
        // ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
    new HappyPack({
      id: 'jsx',
      // threads: happyThreadPool,
      loaders: ['babel-loader']
    })
  ],
  devServer: {
    hot: true
  }
}
