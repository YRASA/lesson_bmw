/*
 * @Author: Zzceaon
 * @Date: 2020-07-04 14:39:33
 * @LastEditTime: 2020-07-04 15:01:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\codewars\phone\2.js
 */ 
// API 巧妙 正则
// (xxx) xxx-xxxx
// \d{3} \d{3} \d{4}  [0-9]
// 3.填回去
// - 正则 字符串
//      1.arr.join
function createPhoneNumber(numbers) {
  // 代码的语义连贯且易读
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));