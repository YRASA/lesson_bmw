./src/index.js -> webpack默认入口
./dist/main.js -> webpack默认出口

webpack-dev-server: 监听工程目录文件的改动并实时打包和刷新浏览器, 打包并不会生成实际的文件(而是存在于cache中), 但是可以运行

devServer: {
  port: 3000,  // 服务端口
  publicPath: '/dist'
}

一切皆模块, 包括图片、css、js文件等等
webpack可在js中引入css, 因为有loader
loader独立于webpack
css解析: npm install css-loader --save--dev
样式加载: npm install style-loader --save--dev

// 文件加载器loader(文件的转译和编译)
module: {
    rules: [
      test: /\.css$/,  // 只匹配这种文件(正则)
      use: [  // loader里的use配置顺序和加载顺序相反,
        'style-loader',  // 解决样式加载问题(为样式生成style标签插入index.html)
        'css-loader'  // 只解决了语法解析问题, 没解决样式加载问题
      ]
    ]
  }

babel-loader: es6 -> es5
压缩: npm install uglifyjs-webpack-plugin --save--dev
全局安装webpack和webpack-cli后, 最好本地也安装一下