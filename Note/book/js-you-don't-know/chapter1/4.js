/*
 * @Author: Zzceaon
 * @Date: 2020-07-14 05:53:49
 * @LastEditTime: 2020-07-14 06:08:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Note\book\js-you-don't-know\chapter1\4.js
 */ 
var a = 1;  // 正常 完成
a();  // uncaught TypeErrpr  a is not a function
// TypeError

// callee是对象的一个属性，该属性是一个指针，指向参数arguments对象的函数
// function abc() {

// }