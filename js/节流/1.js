/*
 * @Author: Zzceaon
 * @Date: 2020-07-10 10:44:42
 * @LastEditTime: 2020-07-10 10:52:50
 * @LastEditors: Please set LastEditors
 * @Description: 节流
 * @FilePath: \Course\js\节流\1.js
 */ 
function throttle(func, wait) {
  var previous = 0
  var time = null
  return function() {
    var now = new Date().getTime()
    // 0.2 - 0 = 0.2
    // 修正 timeout 时间间隔
    const remain = wait - (now - previous)
    if (now - previous > wait) {
      func()
      previous = now
    } else if (!time) {
      time = setTimeout(() => {
        func()
        time = null
        // 时间戳 只运用于头事件
        // 之后中间的 事件触发 (时间戳和timeout是互竞的)
        // 为了不让时间戳触发事件 更新 previous
        previous = new Date().getTime()
      }, remain)
    }
  }
}