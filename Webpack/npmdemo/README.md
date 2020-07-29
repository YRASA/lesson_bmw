{
  "name": "npmdemo",  // 包名称
  "version": "1.0.0",  // 版本号
  "description": "",
  "main": "index.js",  // 执行入口
  "scripts": {
    // preinstall postinstall prepublish postpublish 钩子
    "test": "echo \"Error: no test specified\" && exit 1"
  },  // 自定义脚本
  "keywords": [],
  "author": "",
   ,,,,,,,,,,,,,,,,,,,,
  "license": "ISC"
}

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },   -------->  npm run test   -> 输出: echo \"Error: no test specified\" && exit 1

webpack5一下要加 --save
以上不加默认 --save-dev

"dependencies": {  // 生产
  "loadash": "^1.0.0"
},
"devDependencies": {  // 开发
  "jquery": "^3.5.1"
}

npm install --only=prod 指定为生产环境(只会安装dependencies)
npm install --only=dev 指定为开发环境(只会安装devDependencies)
只安装当前环境的包可以加快速度
dependencies: 放功能
devDependencies: 放本地开发工具(如test)

## 语义化版本(大版本.中版本.小版本)
- ^version: 中版本和小版本(取最新)
  ^1.0.1 -> 1.x.x
- ~version: 小版本(取最新)
  ~1.0.1 -> 1.0.x
- version: 特定版本

preinstall postinstall prepublish postpublish 钩子
npm有生命周期和自定义脚本

"scripts": {
    "dev": "webpack-dev-server",  // 启动服务
    "build": "eslint ./src && webpack"  // 格式化后打包
  },
  ->
  npm run + dev
  npm run + build

  npm install的过程:
  - 寻找包版本信息文件(package.json), 依赖它来进行安装
  - 查package.json中的依赖, 并检查项目中其他的版本信息文件
  - 如果发现了新包, 就更新版本信息文件