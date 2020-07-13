/*
 * @Author: Zzceaon
 * @Date: 2020-07-14 05:46:04
 * @LastEditTime: 2020-07-14 06:07:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Note\book\js-you-don't-know\chapter1\3.js
 */ 
// LHS RHS 变量查找, 就在那一行相关
function foo(a) {
  var b = a;
  return a + b;
}
var c = foo(2);

// LHS(3处):
//   var b = a
//   a = 2(隐式)
//   var c = foo(2)

// RHS(4处):
//   var b = a => a
//   return a + b
//   return a + b => a b
//   foo(2)