/*
 * @Author: Zzceaon
 * @Date: 2020-07-26 18:54:06
 * @LastEditTime: 2020-07-26 19:09:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Webpack\images\moduleB.js
 */ 
// 标准写法
(function(window) {
  var name = 'Jack'
  var sex = '男孩'
  function tell() {
      console.log('我的名字是', name)
      console.log('我的性别是', sex)
  }
  window.JackModule = {tell}
})(window)