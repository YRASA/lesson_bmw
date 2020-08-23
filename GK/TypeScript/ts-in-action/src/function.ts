/*
 * @Author: Zzceaon
 * @Date: 2020-08-23 00:32:16
 * @LastEditTime: 2020-08-23 09:51:44
 * @LastEditors: Please set LastEditors
 * @Description: 函数
 * @FilePath: \Course\GK\TypeScript\ts-in-action\src\function.ts
 */
// 函数定义
function add1(x: number, y: number) {
  return x + y  // ts类型推断
}
// 下面三种只是函数类型的定义, 而并没有实现, 真正的调用的时候要书写这个函数体
let add2: (x: number, y: number) => number
type add3 = (x: number, y: number) => number
interface add4 {
  (x: number, y: number): number
}
// add(1, 2, 3)

// 可选参数必须位于必选参数之后
function add5(x: number, y?: number) {
  return y? x + y : x
}
add5(1)

// 在必选参数前, 默认参数位置的传参是不可以省略的, 必须明确的传入undefined来获取默认值
function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q
}
console.log(add6(1, undefined, 3))

// 剩余参数
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
console.log(add7(1, 2, 3, 4, 5))

// 函数重载(名称相同, 参数个数或者类型不同)
// ts编译器在处理重载的时候, 会去查询一个重载的列表, 应把最容易匹配的函数定义写在最前面
function add8(...rest: number[]): number  // 重载列表1
function add8(...rest: string[]): string  // 重载列表2
function add8(...rest: any[]): any {
  let first = rest[0]
  if (typeof first === 'string') return rest.join('')
  if (typeof first === 'number') return rest.reduce((pre, cur) => pre + cur)
}
console.log(add8(1, 2, 3))
console.log(add8('a', 'b', 'c'))