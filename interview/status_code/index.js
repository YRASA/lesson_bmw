var http = require('http');
// http协议,1991 html 应答式
http.createServer((req, res) => {
    // http head body
    if (req.url == '/newpage') {
        // res.writeHead(204); // a 不跳转
        res.writeHead(200);
        res.end(`newpage`);
        return;
    }
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    // 七层模型: 物理层 数据链路层 网络传 传输层 会话层 表示层 应用层
    res.write('hello world')
    res.end(`
        <html>
            <head></head>
            <body>
                <a href="https://www.baidu.com/">百度</a>
                <a href="/newpage">新页面</a>
            </body>
        </html>
    `)
})
.listen(3000)