/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 11:53:22
 * @LastEditTime: 2020-07-20 11:59:20
 * @LastEditors: Please set LastEditors
 * @Description: 延时执行time
 * @FilePath: \Course\interview\Promise\延时执行.js
 */ 
const delay = time => new Promise(resolve => setTimeout(resolve, time))  // 光杆司令(resolve不传参, 只等待time)
const withDeplay = fn => async (...args) => {
  await delay(1000)
  return fn(...args)
}
withDeplay(function() {
  // ...
})(...args)