/*
 * @Author: Zzceaon
 * @Date: 2020-07-30 20:53:42
 * @LastEditTime: 2020-07-30 20:57:24
 * @LastEditors: Please set LastEditors
 * @Description: koa-bodyparser
 * @FilePath: \Course\Koa2\demo05.js
 */ 
const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const app = new Koa()
app.use(bodyparser())
app.use(async(ctx) => {
  if(ctx.url === '/' && ctx.method === 'GET') {
    // 显示表单页面
    let html = `
      <h1>Zzceaon Koa2 request POST</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" />
        <br/>
        <p>age</p>
        <input name="age" />
        <br/>
        <p>website</p>
        <input name="website" />
        <br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  }else if(ctx.url === '/' && ctx.method === 'POST') {
    let postData = ctx.request.body
    ctx.body = postData
  }else{
    ctx.body = '<h1>404!</h1>'
  }
})
app.listen(3000, () => {
  console.log("server is starting at port 3000")
})