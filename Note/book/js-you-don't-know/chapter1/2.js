/*
 * @Author: Zzceaon
 * @Date: 2020-07-14 05:42:48
 * @LastEditTime: 2020-07-14 06:06:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Note\book\js-you-don't-know\chapter1\2.js
 */ 
function a(age) {  // a(age)
  console.log(age);
  var age = 20;
  console.log(age);
  function age() {

  }
  console.log(age);  // 在新定义的同名函数(此函数覆盖了原函数)查找不到, 就向上查找到20
}
a(18);
// >>> [Function: age] 20 20