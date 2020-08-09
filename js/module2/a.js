/*
 * @Author: Zzceaon
 * @Date: 2020-08-09 22:46:12
 * @LastEditTime: 2020-08-09 23:19:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\js\module2\a.js
 */
import { add, min, bar } from './math.js'
// bar 和 math.js 是引用的关系
console.log(add(1, 2))
console.log(bar)
setTimeout(() => {
  console.log(bar)
}, 5000)
// tree-shaking: min没有打包
// js: 1.没有模块化普通的脚本文件 2.module一个模块