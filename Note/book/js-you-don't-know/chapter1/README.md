# 作用域是什么

https://resources.jointjs.com/demos/javascript-ast 


- react mvvm setState state 状态机制
  变量 程序的状态 声明空间(闭包, 作用域, 变量提升) 存储值
  值修改
- 赋值过程
  var a = 2; 它是怎么运行的？
  var 关键字 a identifier 标识符
  value literal
  高级语言
  无法理解, 及无法执行
## 编译原理
  语言执行的底层
  操作系统 -> 编译原理
  引擎 V8
  1.分词/词法分析阶段
  [var, a, =, 2];
  token 语法错误
  最后成为二进制文件
  2.语法分析阶段
  语法树
  数据结构 + 算法
  编译器也是一段代码 运行
  HTML <div></div> DOM树
  AST Abstract Syntax Tree
  3.代码生成
  JS 运行时编译
  JAVA C++ 预编译
  编译器 (Compiler)
  解释器 (Interoreterv)
  JIT 即时编译器