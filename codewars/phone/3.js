/*
 * @Author: Zzceaon
 * @Date: 2020-07-04 14:34:50
 * @LastEditTime: 2020-07-04 14:43:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\codewars\phone\3.js
 */ 
function createPhoneNumber(numbers) {
  // 编译一下
  numbers = numbers.join('');
  // es6 更加优雅
  // 编程风格
  return `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6)}`
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));