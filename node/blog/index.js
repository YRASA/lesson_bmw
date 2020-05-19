const express = require('express');
const data = require('./db.json');
// koa 是 express 的孩子
const app = express();
// get 请求谓语动词
app.get('/', function(req, res) {
    // res.json() = res.end(JSON.stringify(express))
    // Content-Type: application/json; charset=utf-8
    res.json(data);
})
// 设计一个URL 访问第一首歌
// restful URL 暴露一个资源
// 一切皆资源 URL 资源的名称
// url + http谓语动词 可以表达资源 对资源做什么操作
// app.get('/posts/:id', function(req, res) {
//     // http://www.baidu.com/posts/:id?a=1
//     let id = req.params.id;
//     let post = data.posts.filter(post => post.id == id);
//     // res.json(post[0].content)
//     res.json({'content': post.content});
    // id
    // data.posts id
    // res.json()
// })
// 添加一篇文章, 设计URL + 动词
// app.post('/posts')
app.listen(8088);