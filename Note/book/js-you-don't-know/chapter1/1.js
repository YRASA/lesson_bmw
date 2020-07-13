/*
 * @Author: Zzceaon
 * @Date: 2020-07-14 05:32:18
 * @LastEditTime: 2020-07-14 06:04:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Note\book\js-you-don't-know\chapter1\1.js
 */ 
// 知识点?
// 编译

// AO { a: 1 } Active Object
// JS 基于原型的面向对象

// 变量查找? 冒泡

// a.__proto__ = b
// b.__proto__ = c

var b = 3

function func() {
  var a = 2;
  var a = 1;  // 编译阶段词条语句不执行, 执行阶段才赋值给a
  console.log(b, a);
}

func();
// >>> 3 1