/*
 * @Author: Zzceaon
 * @Date: 2020-08-23 06:25:15
 * @LastEditTime: 2020-08-23 10:54:42
 * @LastEditors: Please set LastEditors
 * @Description: 泛型
 * @FilePath: \Course\GK\TypeScript\ts-in-action\src\generics.ts
 */
// 泛型: 不预先确定的数据类型, 具体的类型在使用的时候才能确定
// 泛型函数
function log<T>(value: T): T {
  console.log(value)
  return value
}
log<string[]>(['a', 'b'])  // 调用方式1
log(['a', 'b'])  // 调用方式2(ts类型推断)

// 泛型函数类型
// type Log = <T>(value: T) => T
// let myLog: Log = log

// 泛型接口
// interface Log<T> {  // 当泛型变量约束了整个接口之后, 在实现的时候, 我们必须指定一个类型
//   (value: T): T
// }
// let myLog: Log<number> = log
// myLog(1)
// interface Log<T = string> {  // 指定默认
//   (value: T): T
// }
// let myLog: Log = log
// myLog('1')

class Log<T> {
  run(value: T) {  // 泛型不能应用于类的静态成员(static)
    console.log(value)
    return value
  }
}
let log1 = new Log<number>()
log1.run(1)
let log2 = new Log()
log2.run({a: 1})
log2.run('1')

// 泛型约束
interface Length {
  length: number
}
function bar<T extends Length>(value: T): T {
  console.log(value, value.length)
  return value
}
// 必须传入有length属性的东西
bar([1])
bar('123')
bar({length: 2})  // >>> 2