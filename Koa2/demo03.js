/*
 * @Author: Zzceaon
 * @Date: 2020-07-29 21:50:03
 * @LastEditTime: 2020-07-29 22:16:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Koa2\demo03.js
 */ 
const Koa = require('koa')
const app = new Koa()
app.use(async(ctx) => {
  let url = ctx.url
  // 从request接收请求
  let request = ctx.request
  let req_query = request.query
  let req_querystring = request.querystring
  // 不用request也能接受请求, 但是写上要严谨一些
  // 从上下文直接获取请求
  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring
  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  }
})

app.listen(3000, () => {
  console.log("server is starting at port 3000")
})