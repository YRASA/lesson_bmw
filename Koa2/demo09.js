/*
 * @Author: Zzceaon
 * @Date: 2020-07-30 22:47:46
 * @LastEditTime: 2020-07-30 23:37:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Koa2\demo09.js
 */ 
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
router.get('/', function(ctx, next) {
  ctx.body = ctx.query
})
app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(3000, () => {
  console.log("server is starting at port 3000")
})