/*
 * @Author: Zzceaon
 * @Date: 2020-08-09 23:21:27
 * @LastEditTime: 2020-08-09 23:31:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\js\module2\common1.js
 */
console.log('1 开始')
var done = false
module.exports.done = done
let obj = {
  a: 1,
  b: 2
}
const common2 = require('./common2')  // 循环引用(只能拿到循环依赖之前的东西)
module.exports.obj = obj
setTimeout(() => {
  done = true
  obj.a = 111
}, 3000)