/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 15:28:25
 * @LastEditTime: 2020-07-20 16:00:07
 * @LastEditors: Please set LastEditors
 * @Description: 散列/哈希
 * @FilePath: \Course\js\cache\MD5.js
 */ 
const md5 = require('md5');
// 同样的输入 同样的输出
console.log(md5('abc'));
console.log(md5('abc'));
// 如果两次md5的结果一样 => 两次原始的未加密内容是一样的
// => 两次md5(big.js)对比一下
// 协商: 缓存? 新的内容?
// 服务器判断是否可以缓存, 要先知道内容有没有发生变化
console.log(md5('abcd'));