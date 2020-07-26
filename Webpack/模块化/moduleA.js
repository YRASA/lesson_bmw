/*
 * @Author: Zzceaon
 * @Date: 2020-07-26 18:53:58
 * @LastEditTime: 2020-07-26 19:06:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Webpack\images\moduleA.js
 */ 
var SusanModule = (function() {
  var name = 'Susan'  // 模块作用域
  var sex = '女孩'  // 模块作用域
  // 自我介绍方法
  return {
    tell: function() {
      console.log('我的名字是', name)
      console.log('我的性别是', sex)
    }
  }
})()