/*
 * @Author: Zzceaon
 * @Date: 2020-08-22 17:57:41
 * @LastEditTime: 2020-08-22 18:27:43
 * @LastEditors: Please set LastEditors
 * @Description: 对象类型接口
 * @FilePath: \Course\GK\TypeScript\ts-in-action\src\ObjectInterface.ts
 */
interface List {
  readonly id: number;  // 只读属性
  name: string;
  // [x: string]: any;  // 4.字符串索引签名(用任意的字符串去索引List可以得到任意的结果, 这样List就可以支持多个属性)
  age?: number;  // 可选属性
}
interface Result {
  data: List[]
}
function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
    // value.id++  // 只读属性不允许修改
  })
}
let result = {
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B', age: 10}
  ]
}
render(result)  // 1.
// render(<Result>{  // 2.类型断言(这种在React中会产生歧义)
//   data: [
//     {id: 1, name: 'A', sex: 'male'},
//     {id: 2, name: 'B'}
//   ]
// })
// render({
//   data: [
//     {id: 1, name: 'A', sex: 'male'},
//     {id: 2, name: 'B'}
//   ]
// } as Result)  // 3.类型断言

// 当你不确定一个接口中有多少个属性的时候, 就可以使用可索引类型的接口(可用数字和字符串去索引)
interface StringArray {
  [index: number]: string  // 用任意的数字去索引StringArray都会得到一个string(相当于声明了字符串数组)
}
let chars: StringArray = ['A', 'B']
interface Names {
  [x: string]: string;  // 用任意的字符串去索引Names, 得到得结果都是string(这时就不能声明number类型的成员了)
  // y: number;
  [z: number]: string  // 数字索引签名的返回值一定要是字符串索引签名返回值的子类型(因为js会把number转换成string来保持内容的兼容性)
  // [x: string]: any
  // [z: number]: number
}