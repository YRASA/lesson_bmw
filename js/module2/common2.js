/*
 * @Author: Zzceaon
 * @Date: 2020-08-09 23:22:29
 * @LastEditTime: 2020-08-09 23:28:47
 * @LastEditors: Please set LastEditors
 * @Description: commonjs
 * @FilePath: \Course\js\module2\common2.js
 */
const { done, obj }  = require('./common1')  // 相当于copy
console.log(done)
console.log(obj)
// let done = common1.done
// let obj = common1.obj
setTimeout(() => {
  console.log(done)  // 基本数据类型, 值不变
  console.log(obj)  // 复杂数据引用, 所以a的值会变
}, 5000)
// es-module 都会变