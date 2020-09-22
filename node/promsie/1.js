/*
 * @Author: Zzceaon
 * @Date: 2020-09-22 08:29:59
 * @LastEditTime: 2020-09-22 08:51:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\node\promsie\1.js
 */
const fs = require('fs')
const { promisify } = require('util')

fs.readFile('./1.js', (err, content) => {
  if (!err) {
    // console.log(content)
    fs.stat('./1.js', (err, stat) => {
      console.log(stat)
    })
  }
})

let readFilePromise = promisify(fs.readFile)
readFilePromise('./1.js').then(console.log)
let statFile = promisify(fs.stat)
statFile('./1.js').then(console.log)

// 错误
// 微信里面的网页 => 小程序
// 小程序没有DOM 浏览器才有DOM
// 小程序 -> 半个网页
// 微信公众号 -> 网页
// flutter react-native

// compose curry bind memorize debounce throttle promisify... => 高阶函数
// promisify怎么实现的
function promisify1(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, content) => {
        if (!err) resolve(content)
      })
    })
  }
}

let promisefyReadFile = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, content) => {
      if (!err) resolve(content)
    })
  })
}