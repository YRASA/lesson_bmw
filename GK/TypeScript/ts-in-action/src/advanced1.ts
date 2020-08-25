/*
 * @Author: Zzceaon
 * @Date: 2020-08-23 12:23:47
 * @LastEditTime: 2020-08-25 22:08:08
 * @LastEditors: Please set LastEditors
 * @Description: 类型检查机制
 * @FilePath: \Course\GK\TypeScript\ts-in-action\src\advanced1.ts
 */
// 基础类型推断:

// 1.初始化时
let a1  // any
let a2 = 1  // number
let a3 = []  // any[]
let a4 = [1]  // number[]
let a5 = (x = 1) => x + 1

// 2.最佳通用类型推断
let a6 = [1, null]  // (number | null)[] 关闭strictNullChecks后为number[]
// 以上都为从右向左的推断

// 3.上下文类型推断(从左向右), 通常发生在事件处理中
// window.onkeydown = (event) => {  // keyboardEvent
//   console.log(event.button)  // button是鼠标事件, 所以会报错
// }

interface Foo {
  bar: number
}
// let foo1 = {} as Foo  // 没有任何依据的类型断言会给你的代码带来安全隐患
let foo1: Foo = {
  bar: 1
}
// foo1.bar = 1

// 类型兼容性:
// X兼容Y:X(目标类型) = Y(源类型)
let a7: string = 'a'
a7 = null

// 接口兼容性
interface X {
  a: any;
  b: any
}
interface Y {
  a: any;
  b: any;
  c: any
}
let a8: X = {a: 1, b: 2}
let a9: Y = {a: 1, b: 2, c: 3}
// 从左向右
a8 = a9
// a9 = a8
// 源类型必须具备目标类型的必要属性, 就可以进行赋值
// 参数个数: 目标 < 源

// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
  return handler
}
// Handler->目标类型 传参->源类型
// 目标函数兼容源函数需要满足3个条件
// 1)参数的个数(目标 > 源)
let handler1 = (a: number) => {}
hof(handler1)
let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2)
// 可选参数和剩余参数
let a10 = (p1: number, p2: number) => {}
let a11 = (p1?: number, p2?: number) => {}
let a12 = (...args: number[]) => {}
// 1.固定参数是可以兼容可选参数和剩余参数的
a10 = a11
a10 = a12
// 2.可选参数不能兼容固定参数和剩余参数
// "strictFunctionTypes": false => 可兼容
a11 = a12
a11 = a10
// 3.剩余参数可以兼容固定参数和可选参数
a12 = a10
a12 = a11
// 2)参数类型
let handler3 = (a: string) => {}
// hof(handler3)
interface Paint3D {
  x: number;
  y: number;
  z: number
}
interface Paint2D {
  x: number;
  y: number
}
let p3d = (paint: Paint3D) => {}
let p2d = (paint: Paint2D) => {}
// 成员个数多的兼容成员个数少的 参数个数: 目标 > 源
p3d = p2d
p2d = p3d  // "strictFunctionTypes": false后可以相互赋值 -> 函数参数的双向协变(允许把一个精确的类型赋值给一个不那么精确的类型, 就不需要把一个不精确的类型断言成一个精确的类型了)
// 3)返回值类型(目标函数的返回值类型必须与源函数的返回值类型相同, 或者为其子类型)
let a13 = () => ({name: 'Alice'})
let a14 = () => ({name: 'Alice', location: 'Beijing'})
// 成员少的兼容成员多的,和interface一样
a13 = a14
// a14 = a13  // 不兼容: 因为a13的返回值类型是a14的返回值类型的子类型

// 函数重载
// 在重载列表中目标函数的参数要多于源函数
function overload(a: number, b: number): number  // 目标函数
function overload(a: string, b: string): string  // 目标函数
function overload(a: any, b: any): any {}  // 源函数 返回值也要兼容

// 枚举兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
// 枚举类型和数值类型是可以完全互相兼容的
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// 枚举之间是不兼容的
// let color: Color.Red = Fruit.Apple

// 类兼容性
class A {
  constructor(p: number, q: number) {}
  id: number = 1
  private name: string = ''
}
class B {
  static s = 1
  constructor(p: number) {}
  id: number = 2
  private name: string = ''
}
// 静态成员和构造函数是不参与比较的, 如果两个类有相同的实例成员, 那么他们的实例就可以完全相互兼容
let aa = new A(1, 2)
let bb = new B(1)
// 如果含有私有成员, 只有父类和子类可以兼容
// aa = bb
// bb = aa
class C extends A {}
let cc = new C(1, 2)
aa = cc
cc = aa

// 泛型兼容性
interface Empty<T> {
  value: T
}
// let obj1: Empty<number> = {}
// let obj2: Empty<string> = {}
// 只有类型参数T被接口成员使用的时候才会影响泛型的兼容性
// obj1 = obj2
let log11 = <T>(x: T): T => {
  console.log('x')
  return x
}
let log22 = <U>(y: U): U => {
  console.log('y')
  return y
}
// 如果两个泛型函数的定义相同, 但是没有指定类型参数, 那么他们之间是可以相互兼容的
log11 = log22

// 类型保护
enum Type { Strong, Week }
class Java {
  helloJava() {
    console.log('Hello Java')
  }
  java: any
}
class JavaScript {
  helloJavaScript() {
    console.log('Hello JavaScript')
  }
  javascript: any
}
// 4.通过创建类型保护函数来判断对象的类型
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined
}  // 这种返回值叫做类型位ci
function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript()
  // if ((lang as Java).helloJava) {
  //   (lang as Java).helloJava()
  // } else {
  //   (lang as JavaScript).helloJavaScript()
  // }

  // 类型保护4种方法:
  // 1.instanceof
  // if (lang instanceof Java) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // 2.in(判断属性是不是属于一个对象)(通过属性创建保护区块)
  // if ('java' in lang) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // 3.typeof
  // if (typeof x === 'string') {
  //   x.length
  // } else {
  //   x.toFixed(2)
  // }

  // 4.通过创建类型保护函数来判断对象的类型
  if (isJava(lang)) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }
  return lang
}
// getLanguage(Type.Strong)
