const http = require('http');
const fs = require('fs');
const server = http.createServer(function(req, res) {
    // https://www.baidu.com/ => /
    // https://www.baidu.com/s?wd=sw => /s
    if (req.url === '/') {
        // html
        // 同步api
        const html = fs.readFileSync('./index.html', 'utf-8');
        res.end(html);
    }
    else if (req.url === '/getPosts') {

    }
    // console.log(req.url);
    // // if (req)
    // res.end('hello server');
})
server.listen(9090, function() {
    console.log('server is running 9090');
})