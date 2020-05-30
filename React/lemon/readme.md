- 没有使用create-react-app raect 开发的脚手架
    从0开始构建一个react 项目 webpack 开发打包工具
    react 开发流程 webpack ts react + react-router redux
    1. webpack 开发流程工具
    2. webpack-cli commend line 开发工具的命令行工具
    3. webpack-dev-server 3000 启动应用
- script webpack-dev-server 3000 运行dev 项目
- typescript tsconfig.json根目录下的ts 配置
- @babel/core     es6 -> es5
    .babelrc 处理js
- bootstrap 前端css 框架

1.src 未来是我们的开发目录 业务代码在这里
    index.ts entry 入口文件
    index.html 模板?
    webpack.config.js 来负责 webpack-dev-server --open
2.ts typescript awsome-typescript-loader tsconfig.json
    .ts -> .js
3.@babel/cli @babel/core @babel/preset-env
    .babelrc

搭建完开发流程
react react-dom
@types/react @types/react-dom   ts + react   @babel/core

1.npm init -y
2.yarn add  webpack webpack-cli --save-dev
3.yarn add  webpack-dev-server --save-dev
4.package.json -> "scripts" -> "start": "webpack-dev-server --mode development --inline --hot --open"
5.yarn add  typescript --save-dev
6.tsconfig.json
7.yarn add  @babel/core @babel/preset-env --save-dev
8.yarn add bootstrap
9..babelrc
10.src
11.webpack.config.js
12.yarn add html-webpack-plugin mini-css-extract-plugin
13. yarn add awesome-typescript-loader
14.yarn add css-loader
15. yarn add  react react-dom --save
16.yarn add @types/react @types/react-dom

