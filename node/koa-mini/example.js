/*
 * @Author: Zzceaon
 * @Date: 2020-09-17 15:33:25
 * @LastEditTime: 2020-09-19 21:47:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\node\koa-mini\example.js
 */
const Koa = require('koa')
const app = new Koa()

// logger

app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

// response

app.use(async ctx => {
  ctx.body = 'Hello World'
})

app.listen(3000)