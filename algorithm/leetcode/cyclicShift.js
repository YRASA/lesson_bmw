/*
 * @Author: Zzceaon
 * @Date: 2020-07-03 14:42:38
 * @LastEditTime: 2020-07-03 15:53:52
 * @LastEditors: Please set LastEditors
 * @Description: 循环移位
 * @FilePath: \Course\algorithm\leetcode\循环移位.js
 */ 
// 浅拷贝是内存指针的复制
// O(n) O(n)
let arr = [1, 2, 3, 4, 5, 6, 7], k = 3;
// function RShift(list, k) {
//   const n = list.length;
//   if (k % n === 0) return list;
//   const copy = [...list];
//   for (let i = 0; i < n; i++) {
//     list[i] = copy[[k + i] % n]  // 左移
//   }
//   return list;
// }
// console.log(RShift(arr, 3));

// 三次翻转法
// 1.[0, n - k - 1]
// 2.[n - k, n - 1]
// 3.[0, n - 1]
function reverse(list, start, end) {
  let tmp = null;
  while (start < end) {
    tmp = list[start];
    list[start] = list[end];
    list[end] = tmp;
    start++;
    end--;
  }
}
// O(n) O(1)
function RShift(list, k) {
  const n = list.length;
  if (k % n === 0) return list;
  reverse(list, 0, n - k - 1);
  reverse(list, n - k, n - 1);
  reverse(list, 0, n - 1);
  return list;
}
console.log(RShift(arr, 3));