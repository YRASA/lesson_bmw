/*
 * @Author: Zzceaon
 * @Date: 2020-07-04 14:51:07
 * @LastEditTime: 2020-07-04 15:34:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\codewars\phone\1.js
 */ 
function createPhoneNumber(numbers) {
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' +
    numbers.substring(3, 6) + '-' + numbers.substring(6);
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));