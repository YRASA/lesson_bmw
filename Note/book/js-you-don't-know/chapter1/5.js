/*
 * @Author: Zzceaon
 * @Date: 2020-07-14 05:55:16
 * @LastEditTime: 2020-07-14 05:57:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Note\book\js-you-don't-know\chapter1\5.js
 */ 
function init(a) {
  b = a + 3;
}
init(2);
console.log(b);
// 全局创建 b
// >>> b = 2

"use strict"
function init(a) {
  b = a + 3;
}
init(2);
console.log(b);
// >>> b is not defined