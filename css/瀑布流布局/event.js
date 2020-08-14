/*
 * @Author: Zzceaon
 * @Date: 2020-08-13 16:13:12
 * @LastEditTime: 2020-08-13 16:17:32
 * @LastEditors: Please set LastEditors
 * @Description: design module -> 发布订阅模式
 * @FilePath: \Course\css\瀑布流布局\event.js
 */
const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()
let m = 0
myEmitter.on('price', () => {
  console.log('价格变了')
})
myEmitter.on('price', () => {
  console.log('价格变了')
})
myEmitter.once('event', () => {
  console.log(++m)
})
myEmitter.emit('price')
myEmitter.emit('event')
// 打印: 1
myEmitter.emit('event')