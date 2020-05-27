const MyKoa = require('./lib/application'); // koa class
// 手写koa 模块化
const app = new MyKoa();

// // ctx: 上下文 req和res的结合体
app.use((req, res) => {
    res.end('hello world');
});
app.listen(3000, () => { // api koa
    console.log('你的应用在3000端口启动');
});