
const http = require('http');
const fs = require('fs');
// MIME
// text/html
// http://127.0.0.1:8081把ajax.html内容返回给前端
const server = http.createServer(function(req, res) {
    console.log('require', req.url);
    if (req.url.includes('search')) {
        // 搜索功能
        res.end(req.url.split('?')[1]);
        return;
    }
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });
    const file = fs.readFileSync('./ajax.html', {encoding: 'utf-8'})
    // console.log(file);
    res.end(file);
});
server.listen(8081, function() {
    console.log('server is running http://127.0.0.1:8081');
});