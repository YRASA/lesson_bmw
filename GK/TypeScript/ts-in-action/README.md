- tsc --init 创建 tsconfig.json
- tsc ./src/index.ts 把ts文件编译成js文件
- yarn add ts-loader typescript -D 注意要同时安装typescript
- webpack.config.js 所有配置文件的入口
- webpack.base.config.js 公共环境配置
- webpack.dev.config.js 开发环境配置
- webpack.pro.config.js 生产环境配置
- module.exports = {
  devtool: 'cheap-module-eval-source-map'
  }
  cheap: source-map会忽略文件的列信息, 因为在调试的时候, 列信息是没有用的
  module: 定位到ts源码, 而不是经过loader转译后的js源码
  eval-source-map: 会将source-map以dataUrl的形式打包到文件中
- clean-webpack-plugin 在每次重新构建之后帮助我们清空dist目录(多次构建之后会产生许多无用的文件, 为了清除这些文件)
- webpack-merge 把两个配置文件合并
- void是一个类型, 只不过是一个空类型, 而never表示不会有返回类型, 死循环和报错都属于此例
- 枚举: 一组具有名字的常量集合
- 泛型的好处
  - 函数和类可以轻松地支持多种类型, 增强程序的扩展性
  - 不必写多条函数重载, 冗长的联合类型声明, 增强代码可读性
  - 灵活控制类型之间的约束