'use strict';

/*
 * @Author: Zzceaon
 * @Date: 2020-08-09 22:47:16
 * @LastEditTime: 2020-08-09 22:53:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\js\module2\math.js
 */
const add = (a, b) => a + b;

var bar = 'bar';
setTimeout(() => {
  bar = 'biz';
}, 3000);

/*
 * @Author: Zzceaon
 * @Date: 2020-08-09 22:46:12
 * @LastEditTime: 2020-08-09 22:54:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\js\module2\a.js
 */

console.log(add(1, 2));
console.log(bar);
setTimeout(() => {
  console.log(bar);
}, 5000);
// tree-shaking: min没有打包
// js: 1.没有模块化普通的脚本文件 2.module一个模块
