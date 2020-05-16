const http = require('http');
const fs = require('fs');
// 1.如果文件没有改变,有必要打开文件一直返回吗?
http.createServer((req, res) => {
    // console.log(req);
    // res.end()
    // 浪费网络资源的地方?
    // 200成功 返回内容
    // 1.前端会缓存数据,localStorage sessionStorage 
    // 2.a.txt请求一次就好
    // 3.之后再请求,如果服务器端文件没有发生改变,就不用返回文件内容,
    // 而是直接使用前端缓存的
    // 1.怎么区分第一次和其他次?
    // 2.怎么判断文件是否修改了?
    // 3.怎么告诉浏览器直接使用缓存的数据
    let stat = fs.statSync('./a.txt'); // 同步 阻塞
    if (req.headers['if-modified-since']) {
        console.log(typeof req.headers['if-modified-since']);
        console.log(typeof stat.mtime);
        // 前者为string,后者为object,所以不能用'==='
        if (req.headers['if-modified-since'] == stat.mtime) {
            res.statusCode = 304;
            res.end();
            return;
        } else {
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
            res.end('修改了');
            return;
        }
    }
    // console.log(stat.mtime);
    res.setHeader('Last-Modified', stat.mtime); // 响应头
    // 下此再请求时,客户端会带上if-modified-since字段
    // 第一次没有if-modified-since字段,第二次才有
    // fs.createReadStream('a.txt').pipe(res);
    res.end('hello');
})
.listen(9090)