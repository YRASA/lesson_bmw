const http = require('http');
const fs = require('fs');
const request = require('request');
request('https://www.baidu.com/').pipe(fs.createWriteStream('./baidu.html'));
http.createServer((req, res) => {
    // GET
    // juejin.com/search?type=all&query=js
    // 后端会接收
    // 前端把type=all&query=js当作流的方式传给后端
    // console.log(req);
    // 头部:content-type
    // GET:数据 放到 url
    // POST:数据 放到 body
    // http://localhost:8088/?type=all&query=js
    const writeStream = fs.createWriteStream('./params.txt');
    // postman 以 post 提交过来的数据 保存在params.txt里
    req.pipe(writeStream);
    res.end('ok');
})
.listen(8088, () => {
    console.log('8088');
})