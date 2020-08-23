/*
 * @Author: Zzceaon
 * @Date: 2020-08-21 17:57:24
 * @LastEditTime: 2020-08-23 09:27:00
 * @LastEditors: Please set LastEditors
 * @Description: 枚举类型
 * @FilePath: \Course\GK\TypeScript\ts-in-action\src\enum.ts
 */
// 数字枚举 默认取值从零开始, 之后的递增 实现原理: 反向映射
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter)  // >>> 1
console.log(Role)  // 打印出对象

// 字符串枚举 没有进行反向映射
enum Message {
  Success = '恭喜你, 成功了',
  Fail = '抱歉, 失败了'
}

// 异构枚举
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员
// Role.Reporter = 2  // 枚举成员的值为只读类型, 定义后是不能修改的
enum Char {
  // 常量枚举成员会在编译时计算出结果, 然后以常量的形式出现在运行时环境
  // const 常量枚举三种情况 
  a,  // 1.没有初始值
  b = Char.a,  // 2.对已有枚举成员的引用
  c = 1 + 3,  // 3.常量的表达式
  // 不会在编译阶段进行计算, 而会被保留到程序的执行阶段, 在运行时环境才会被计算
  // computed 需要被计算的枚举成员(非常量的表达式)
  // computed后面的成员一定要赋予初始值
  d = Math.random(),
  e = '123'.length,
  f = 4
}

// 常量枚举(注意和常量枚举成员不一样)在编译阶段会被移除(编译后没有任何代码)
// 当我们不需要对象, 而需要对象的值的时候可以使用常量枚举, 这样会减少在编译阶段的代码
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
// 在某些情况下, 枚举和枚举成员都可以作为单独的类型存在
// 1.枚举成员都没有初始值
// 2.所有成员都是数字枚举
// 3.所有成员都是字符串枚举
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banbana' }

// 枚举成员类型
let e: E = 3
let f: F = 3
// e === f 不同类型的枚举是不可以比较的

let e1: E.a = 1
let e2: E.b
// e1 === e2  // 枚举成员类型不等, 不可以比较
let e3: E.a = 1
e1 === e3
// 字符串枚举取值只能是枚举成员的类型
let g1: G = G.b
let g2: G.a = G.a