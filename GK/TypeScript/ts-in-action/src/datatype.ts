/*
 * @Author: Zzceaon
 * @Date: 2020-08-21 15:33:17
 * @LastEditTime: 2020-08-23 09:21:22
 * @LastEditors: Please set LastEditors
 * @Description: 基本类型
 * @FilePath: \Course\GK\TypeScript\ts-in-action\src\datatype.ts
 */
// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'
// str = 123

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '4']

// 元组 限定元素的类型和个数
let tuple: [number, string] = [0, '1']
// tuple.push(2)  // 允许插入
// console.log(tuple)
// tuple[2]  // 不允许越界访问

// 函数
let add = (x: number, y: number) => x + y  // 返回值类型可以忽略(ts类型推断)
// 定义函数类型compute
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 3

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)  // false

// undefined, null
let un: undefined = undefined
let nu: null = null
// undefined和null是任何类型的子类型
num = undefined
num = null

//void 让任何表达式返回undefined
let noReturn = () => {}

//any
let x
x = 1
x = []
x = () => {}

//never 永远不会有返回值的类型
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while(true) {}
}
