// 轻量级web开发框架
const Koa = require('koa');
const app = new Koa(); // web server
const fs = require('fs'); // node 内置模块 filesystem
// 启动一个服务 函数可以封装一个服务
// const func = ctx => {
//     console.log('func');
//     ctx.response.body = 'func';
// }
const main = ctx => {
    // console.log(ctx.request, '-------');
    // ctx.response.body = 'Hello World';
    // req response
    // ctx.response.type = 'html'; // 响应头
    const html = fs.readFileSync('./template.html', 'utf-8');
    // 分层,网站,大一点的网站,返回一个html文件(MVC View)
    // 协议 操作系统(内存node 文件系统 D:) 网络 数据库
    // fs.readFile('./template.html', 'utf-8', function(err, data) {
    //     console.log(data, '+++++++++++');
        // ctx.response.body = data;
    // });
    // console.log(html);
    ctx.response.body = html; // 发送出去
    // ctx.response.body = `
    //     <html>
    //         <head></head>
    //         <body>
    //             <h1>Hello World</h1>
    //         </body>
    //     </html>
    // `
}
// app.use(func);
app.use(main); // 启用一个服务 给访问者request用
app.listen(3000);

