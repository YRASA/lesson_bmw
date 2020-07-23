/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 14:41:38
 * @LastEditTime: 2020-07-20 16:25:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\js\cache\server.js
 */ 
// 优先级: 强缓存 > 协商缓存
const md5 = require('md5');
const express = require('express');
const app = express();
// GET 路由
app.get('/big.js', (req, res) => {
  console.log('here');
  const fs = require('fs');
  const jsContent = fs.readFileSync('./big.js', 'utf-8');
  // 头部字段
  // content-type
  // 强制缓存: 200 OK (from memory/disk cache) 请求不会到达服务器
  // Expires 明确的时间: 2020 7 21 客户端可以设置
  // cache-control: 相对的时间
  res.setHeader('Cache-Control', 'max-age=20');  // 'max-age=20' 20秒之内取缓存里的, 请求不会到达服务器
  // 协商缓存 请求会到达服务器
  // 20秒之后, 请求(会携带一个if-none-match字段)到达服务器
  // if-none-match: 浏览器发现上一次请求服务器有Etag设置, 浏览器自动发送一个if-none-match
  // Etag生成？ MD5
  // if-modified-since: 文件修改了 => 文件的最后修改时间会发生变化
  // 服务器从时间的角度对比前后两次文件有没有发生变化(缺陷:如时间变了, 内容没变)
  const Etag = md5(jsContent);
  const oldEtag = req.headers['if-none-match'];
  // 20s之内 和 20s之后
  if (Etag === oldEtag) {
    // 文件没有发生变化
    // 从缓存里面读取 304
    res.sendStatus(304).end('');  // end('') 文件不传输
    return;
  }
  res.setHeader('Etag', Etag);
  res.end(jsContent);
})
app.listen(9090, () => {
  console.log(9090);
});