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
- 类型检查机制
  - 类型推断(不需要指定变量的类型(函数的返回值类型), TypeScript可以根据某些规则自动地为其推断出一个类型)
    - 基础类型推断
    - 最佳通用类型推断
    - 上下文类型推断
  - 类型兼容性(当一个类型Y可以被赋值给另一个类型X时, 我们就可以说类型X兼容类型Y)
    - X兼容Y:X(目标类型) = Y(源类型)
    - 接口兼容性
    - 函数兼容性
    - 类兼容性
    - 口诀
      - 结构之间兼容: 成员少的兼容成员多的(interface, 返回值)
      - 函数之间兼容：成员多的兼容成员少的(函数)
  - 类型保护(TypeScript能够在特定的区块中保证变量属于某种确定的类型, 可以在此区块中放心的引用此类型的属性, 或者调用此类型的方法)
- 高级类型
  - 交叉类型(并集)
  - 联合类型(交集)
  - 索引类型
  - 映射类型: 本质上是一种预先定义的泛型接口, 通常还会结合索引类型获取对象的属性和属性值, 从而将一个对象映射成我们想要的结果
  - 条件类型: 一种由条件表达式所决定的类型