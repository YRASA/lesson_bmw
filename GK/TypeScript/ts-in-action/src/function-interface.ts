/*
 * @Author: Zzceaon
 * @Date: 2020-08-22 18:27:26
 * @LastEditTime: 2020-08-23 09:43:44
 * @LastEditors: Please set LastEditors
 * @Description: 函数类型接口
 * @FilePath: \Course\GK\TypeScript\ts-in-action\src\FuncInterface.ts
 */
// let add: (x: number, y: number) => number
// interface Add {
//   (x: number, y: number): number
// }
// 类型别名type
type Add = (x: number, y: number) => number
let foo: Add = (a, b) => a + b

// 混合类型接口(既可以定义函数, 也可以拥有属性和方法)
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}
function getLib() {
  let lib: Lib = (() => {}) as Lib  // as Lib
  lib.version = '1.0'
  lib.doSomething = () => {}
  return lib
}
let lib1 = getLib()
lib1()
lib1.doSomething()
let lib2 = getLib()