/*
 * @Author: Zzceaon
 * @Date: 2020-08-24 17:44:12
 * @LastEditTime: 2020-08-26 07:37:19
 * @LastEditors: Please set LastEditors
 * @Description: 高级类型
 * @FilePath: \Course\GK\TypeScript\ts-in-action\src\advanced2.ts
 */
// 交叉类型(并集): 将多个类型合并成一个类型, 新的类型将具有所有类型的特性, 特别适合对象混入的场景
interface DogInterface {
  run(): void
}
interface CatInterface {
  jump(): void
}
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {}
}
// 联合类型(交集): 指声明的类型并不确定, 可以为多个类型中的一个, 可以增强代码的灵活性(通过不确定性)
let a: number | string = 'a'
// 字面量类型(限定变量的类型和取值在一个范围内)
let b: 'a' | 'b' | 'c'
let c: 1 | 2 | 3

class Dogg implements DogInterface {
  run() {}
  eat() {}
}
class Catt implements CatInterface {
  jump() {}
  eat() {}
}
enum Master { Boy, Girl }
function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dogg() : new Catt()  // 被推断为联合类型
  pet.eat()  // 如果一个对象为联合类型, 在类型未确定的情况下就只能访问所有类型的公有成员
  // pet.run()
  return pet
}
// 可区分的联合类型(模式): 结合了联合类型和字面量类型的一种类型保护方法
// 核心思想为如果一个类型是多个类型的联合类型, 并且每个类型之间有一个公共的属性, 那么就可以凭借这个公共属性创建不同的保护区快
interface Square {
  kind: "square";
  size: number
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number
}
interface Circle {
  kind: "circle";
  r: number
}
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
  switch(s.kind) {
    case "square":
      return s.size * s.size
    case "rectangle":
      return s.height * s.width
    case "circle":
      return Math.PI * s.r ** 2
    default:
      return ((e: never) => {
        throw new Error(e)
      })(s)
  }
}
console.log(area({kind: 'circle', r: 1}))  // >>> 3.141592653589793
// 显示错误解决方法:
// 1.
// function area(s: Shape): number {
//   switch(s.kind) {
//     case "square":
//       return s.size * s.size
//     case "rectangle":
//       return s.height * s.width
//   }
// }
// 2.
// function area(s: Shape) {
//   switch(s.kind) {
//     case "square":
//       return s.size * s.size
//     case "rectangle":
//       return s.height * s.width
//     default:
//       return ((e: never) => {
//         throw new Error(e)
//       })(s)  // 检查s是否为never类型, 如果是, 就说明前面的所有分支都被覆盖了, 这个分支永远不会走到, 如果不是, 就说明前面的分支有遗漏
//   }
// }

// 索引类型
let objj = {
  a: 1,
  b: 2,
  c: 3
}
// 对象 <-> 对象值 <-> 对象属性
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {  // keys里的元素是obj里的属性
  return keys.map(key => obj[key])
}
console.log(getValues(objj, ['a', 'b']))  // >>> [1, 2]
// console.log(getValues(objj, ['a', 'f']))  // >>> [undefined, undefined] TS编译器并没有报错
// 索引类型的查询操作符: keyof T 表示类型T的所有公共属性的字面量的联合类型
interface Obj {
  a: number,
  b: string
}
let key: keyof Obj  // key的类型就变成了 "a" | "b"
// 索引访问操作符 T[k] 表示对象T的属性k所代表的类型
let value: Obj['a']  // value的类型就变成了number
// 泛型约束 T extends U 表示泛型变量可以通过继承某个类型获得某些属性

// 映射类型(可从旧类型生成新类型, 比如把所有属性变为只读
interface Objjj {
  a: number;
  b: number;
  c: boolean
}
type ReadonlyObj = Readonly<Objjj>
// Readonly的实现(ctrl + 单机)
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// }
// P in 相当于执行力一次for in操作, 把变量P依次绑定到T的所有属性上
type PartialObj = Partial<Objjj>  // 把一个接口的所有属性变成可选的
// Partial的实现
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// }
type PickObj = Pick<Objjj, 'a' | 'b'>  // 抽取obj的一些子集
// Pick实现原理
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// }
// 以上三种类型成为同台, 它们只会作用域obj属性, 而不会引入新的属性
// 会创建新属性的类型(非同台的类型):
type RecordObj = Record<'x' | 'y', Obj>  // 第一个参数为预定义的新属性, 第二个参数为已知的类型

// 条件类型
// T extends U ? X : Y
// 如果T能被赋值给U
type TypeName<T> = 
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  T extends undefined ? "undefined" :
  T extends Function ? "function" :
  "object"
type T1 = TypeName<string>  // >>> string
type T2 = TypeName<string[]>  // >>> object
// 分布式条件类型
// (A | B) extends U ? X : Y 拆解成:
// (A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]>  // >>> "string" | "object"
type Diff<T, U> = T extends U ? never : T  // 从类型T中过滤掉可以赋值给类型U的类型
type T4 = Diff<"a" | "b" | "C", "a" | "e">  // >>> "b" | "c"
// Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"C", "a" | "e">
// never | "b" | "c"
// "b" | "c"
type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>  // >>> string | number
// Diff的内置类型叫Exclude(官方已经实现了)
// Exclude<T, U>
// NotNull的内置类型叫NonNullable(官方已经实现了)
// NonNullable<T>
// 此外还内置了一些条件类型:
// Extract<T, U>  // 从类型T中抽取出可以赋值给类型U的类型
type T6 = Extract<"a" | "b" | "C", "a" | "e">  // >>> "a"
// ReturnType<T>  // 获取一个函数返回值的类型
type T7 = ReturnType<() => string>  // >>> "string"
// ReturnType的实现
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
// infer: 待推断(延迟推断): 需根据实际情况确定