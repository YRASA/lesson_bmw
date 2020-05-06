const http = require('http');
const fs = require('fs');
const server = http.createServer(function(req, res) {
    // https://www.baidu.com/ => /
    // https://www.baidu.com/s?wd=sw => /s
    // GET把参数放到url里
    // POST把参数放到实体里
    if (req.url === '/') {
        // html
        // 同步api
        const html = fs.readFileSync('./index.html', 'utf-8');
        res.end(html);
        // 1xx:消息提示
        // 2xx:成功
        // 3xx: 301/302 重定向
        // 4xx:客户端 401未认证/未授权 404页面未找到
        // 5xx:服务端 500服务端出错
        // res.writeHead(200, {
        //     'Content-Type': 'text/html'
        // })
        // res.end(`<h2>123</h2>`);
    }
    else if (req.url === '/getPosts') {
        let posts = [
            {title: 'js', star: 1000},
            {title: 'php', star: 2000}
        ]
        let str = '';
        // 分段得到
        req.on('data', function(chunk) {
            str += chunk;
        })
        // 接收完毕 str组装完成
        req.on('end', function() {
            console.log(JSON.parse(str));
        })
        // req res 流
        // end方法只能返回字符串
        res.end(JSON.stringify(posts));
        // 前端提交数据 解析

    }
    // console.log(req.url);
    // // if (req)
    // res.end('hello server');
})
server.listen(9090, function() {
    console.log('server is running 9090');
})