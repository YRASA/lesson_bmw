/*
 * @Author: Zzceaon
 * @Date: 2020-07-03 16:00:24
 * @LastEditTime: 2020-07-03 16:45:11
 * @LastEditors: Please set LastEditors
 * @Description: 位运算
 * @FilePath: \Course\algorithm\leetcode\bitOperation.js
 */ 
// 10 << 2 -> 40
// 00001010 -> 10
// 00101000 -> 40

// 10 >> 2 -> 2
// 00001010 -> 10
// 00000010 -> 2

// 按位与 &
  // 8 & 7 -> 0
  // 1000 & 0111 -> 0000(0)

// 按位或 |
  // 8 | 7 -> 15
  // 1000 | 0111 -> 1111(15)

// 按位异或 ^
  // 10 ^ 7 -> 13
  // 1010 ^ 0111 -> 1101(13)

// 用位运算计算两数之和
// 8 ^ 8 -> 0
// a + b = (a ^ b) + ((a & b) << 1)
function sum(a, b) {
  if (a === 0) return b;
  if (b === 0) return a;
  let newA = a ^ b;
  let newB = (a & b) << 1;
  return sum(newA, newB);
}
console.log(sum(8, 7));
// 1000 ^ 0111 -> 15 (√)
// 1000 & 0111 << 1 -> 0
console.log(sum(8, 8));
// 1000 ^ 1000 -> 0
// 1000 & 1000 << 1 -> 16 (√)
console.log(sum(9, 3));
// 1001 ^ 0011 -> 10
// 1001 & 0011  << 1 -> 2
// 1010 ^ 0010 -> 8
// 1010 & 0010 << 1 -> 4
// 1000 ^ 0100 -> 12 (√)
// 1000 & 0100 << 1 -> 0