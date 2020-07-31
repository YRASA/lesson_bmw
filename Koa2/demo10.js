/*
 * @Author: Zzceaon
 * @Date: 2020-07-30 23:37:48
 * @LastEditTime: 2020-07-31 00:08:43
 * @LastEditors: Please set LastEditors
 * @Description: cookie
 * @FilePath: \Course\Koa2\demo10.js
 */ 
const Koa = require('koa')
const app = new Koa()
app.use(async(ctx) => {
  if(ctx.url === '/index') {
    ctx.cookies.set(
      'MyName',
      'Zzceaon',
      {
        domain: 'localhost',  // 这里不能为127.0.0.1(要和浏览器的域名一样)
        path: '/index',  // localhost/index/目录下才能取cookie
        maxAge: 1000*60*60*24,
        expires: new Date('2020-12-12'),  // 失效时间
        httpOnly: false,
        overwrite: false  // 是否允许重写
      }
    )
    ctx.body = "cookie is ok"
  }else {
    if(ctx.cookies.get("MyName")) {
      ctx.body = ctx.cookies.get("MyName")
    }else {
      ctx.body = "Cookie is none"
    }
  }
})
app.listen(3000, () => {
  console.log("server is starting at port 3000")
})