## webpack构建工程
npm init -y
npm install react react-dom
npm install webpack webpack-cli -d
npm install @types/webpack -d
npm install @babel/core @babel/cli -d
npm install babel-loader
npm install @babel/preset-env @babel/preset-react
npm install html-webpack-plugin -d
npm install happypack

loader: 文件 -> 另一种文件
@babel/preset-env -> es
@babel/preset-react -> react

presets: [
  require.resolve('@babel/preset-react'),
  [require.resolve('@babel/preset-env', {modules: false})]
]
{modules: false} -> 因为webpack可以识别import和export

plugin: 在一个时间处理如src/index.html, 节点维度的
const HtmlWebpackPlugin = require('html-webpack-plugin')
plugin往往以函数存在, 所以要导入

plugins: [
  new HtmlWebpackPlugin({
    template: path(__dirname, 'src/index.html'),
    filename: 'index.html'
  })
]
template: 需要被处理的文件path
filename: 打包完的文件名

import不用写后缀的方法: 在此指定文件后缀:
resolve: {
  extensions: ['.wasm', '.mjs', '.js', '.jsx']
}

entry: path.resolve(__dirname, 'src/index.jsx')
此为绝对路径

webpack --mode development / webpack --mode production: 指定mode
webpack-dev-server
webpack-dev-server --config(--config: 读webpack.config.js)
webpack-dev-server --open: 运行 + 打开浏览器

webpack.config.dev.js 这时需指定
webpack-dev-server --open --config xxx

package.json配置后:
webpack-dev-server --open -> npm run start

HMR 热更新 热替换
const webpack = require('webpack')
new webpack.HotModuleReplacementPlugin() -> HMR

webpack-dev-server --open

## webpack性能优化
- 打包结果优化(空间)
- 构建过程优化(时间)
- Tree-Shaking

插件定制(webpack内置)
const TerserPlugin = require('terser-webpack-plugin')

optimization: {} -> 存放压缩有关的东西
Uglify -> es5
Uglify-es(停止更新) -> es6 -> TerserPlugin(Uglify-es的分支)

optimization: {
  minimizer: [new TerserPlugin({
    cache: true,
    parallel: true,
    terserOptions: {
      compress: {
        unused: true,
        drop_debugger: true,
        drop_console: true,
        dead_code: true
      }
    }
  })]
}
parallel: true -> 开启多线程加速
compress: 关于压缩
unused: 去除无用代码
drop_debugger: true -> 去掉debugger
drop_console: true -> 去掉console

webpack-bundle-analyzer(可以看出内存以及边缘化)
npm install webpack-bundle-analyzer -> webpack打包分析工具(工具须在生成环境(webpack --mode production)下运行)
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
webpack --mode production -> npm run build -> 启动分析工具
webpack-bundle-analyzer分析界面内容(部分):
  - react-dom.production.min.js: 依赖
  - react: 逻辑

include: 打包白名单
优先级: exclude > include 和 test

性能优化思路: 
  - 减少查找和解析
  - 多线程
  - HappyPack(分成子进程并发执行, nodejs是单线程, 多线程一般用于大项目)
  - thread-loader(多线程, 把loader分到线程池worker, 但是thread-loader必须写到所有loader前)
  - 预编译
  - 切换loader(fast-sass-loader的速度大于sass-loader)
  - 去除没有使用到的import
  - 借助工具(如TerserPlugin)(指定为webpack --mode production 才能使用工具)
  - 删除不必要的module

对文件解析 -> 耗时 -> noParse: /node_modules\/(jquery\.js)/(不解析)

new HappyPack({
  id: 'jsx',
  threads: happyThreadPool,
  loaders: ['babel-loader']
})
这里的loader需支持happypack(url-loader和file-loader等不支持)

DCE(无用代码消除)
Tree-Shaking本质: 消除无用js代码(DCE的实践)

在App.js引入util.js中的isNull和isZero, 用到了isNull, 没用到isZero
webpack --mode development 打包
查找大包结果: isNull比isZero多了一个(Tree-Shaking并没有完全去除isZero) -> 要删除无用代码就要指定为webpack --mode production
webpack --mode production -> npm run build(package.json) 打包
这就是Tree-Shaking的原理和工作机制

技术攻关 -> webpack性能优化 -> 求职面试(亮点: 用webpack让项目变得更快)