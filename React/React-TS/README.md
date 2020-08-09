- typescript interface 关键字

- 运行一个ts + interface 项目需要的技术
  1.webapck
    .tsx
  2.tsconfig.json jsx -> react ts -> js
  3.babel

- "@babel/polyfill" -> promise async await -> (es6/7/8 -> es5)
- devtool: "source-map" -> 定位源码
- devServer: {
    contentBase: "./dist",
    inline: true  // 监听
  }
- awesome-typescript-loader -> ts解析
- @types/react @types/react-dom ts支持