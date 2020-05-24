const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    if (req.url === '/api') {
        res.writeHead(200, {
            // origin
            'Content-Type': 'application/json',
            'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin',
            // 'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'content-type, X-Requested-With',
            'Access-Control-Max-Age': -1, // preflight预检请求结果缓存的时间
            // 'Access-Control-Allow-Credentials': true, // 凭证 cookie 允许前端请求的时候携带cookie
            // 如果为true 则Access-Control-Allow-Origin不能为*
        })
        // cookie: localStorage, cookie会随着http请求头自动发送
        let posts = ['js', 'php']
        res.end(JSON.stringify(posts));
    } 
    // else {
    //     // index.html在node访问9090打开
    //     // index.html在live-server启动端口,在node又启动端口
    //     fs.createReadStream('./index.html').pipe(res);
    // }
})
.listen(9090, () => {
    console.log(9090);
});
