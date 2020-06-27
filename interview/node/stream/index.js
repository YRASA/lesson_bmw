/*
 * @Author: Zzceaon
 * @Date: 2020-06-27 13:15:26
 * @LastEditTime: 2020-06-27 13:38:25
 * @LastEditors: Please set LastEditors
 * @Description: node Buffer
 * @FilePath: \Course\interview\node\stream\index.js
 */ 
// 0x62 十六进制
// js 在原生类型上缺少对二进制的支持 number
// 62 ASCII B
// 0x62 十六进制 用更底层的Buffer 结构来存
// 底层语言
// 数据的表现形式 字符串 高级表现形式
// node buffer
// node http web server http tcp
// const buf = new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);  // 不安全的
// const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
// 哪个api可以让我们更好的理解它?
// console.log(buf.toString());

// hello world 的缓冲区格式怎么做?
// console.log(buf.write('hello world'));
// 最关键的地方是什么?
// 高层的string -> 底层的Buffer
// 分步思维
// 1.字符串的每一位 去找他的ASCII值
// 2.map 0x + charCodeAt 字符串拼接
// 3.Buffer from

const array = 'hello world'.split('').map(function(v) {
  return '0x' + v.charCodeAt(0).toString(16);  // charCodeAt 默认十进制
})
console.log(array);
const buf = Buffer.from(array);
console.log(buf.toString());