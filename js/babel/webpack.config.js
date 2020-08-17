const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: path.resolve(__dirname, 'src/index.js'),
  module: {
    rules: [
      {
        test: /(.js|.jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[hash:base64:5]'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html'
    }),
    new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './public/1.jpg', to: './' }
      ]
    })
  ],
  devServer: {
    contentBase: './public',
    hot: true
  }
}