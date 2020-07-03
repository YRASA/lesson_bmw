/*
 * @Author: Zzceaon
 * @Date: 2020-07-03 16:45:37
 * @LastEditTime: 2020-07-03 16:57:45
 * @LastEditors: Please set LastEditors
 * @Description: 冒泡排序
 * @FilePath: \Course\algorithm\leetcode\bubble.js
 */ 
let arr = [1, 12, 5, 8, 38, 18, 9];
function swap(arr, left, right) {
  let tmp = arr[right];
  arr[right] = arr[left];
  arr[left] = tmp;
}
function bubble(arr) {
  if (arr.length === 0) return;
  const n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1)
    }
  }
  return arr;
}
console.log(bubble(arr));