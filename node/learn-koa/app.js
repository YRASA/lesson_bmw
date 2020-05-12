const http = require('http');
// Web编程的基石:http
http
    .createServer((req, res) => {
    if (req.url === '/') {
        // 设置响应头
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
        res.end('首页');
    }
    else if (req.url === '/about') {
        res.end('About');
    }
})
.listen(1314)