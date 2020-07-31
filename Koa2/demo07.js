/*
 * @Author: Zzceaon
 * @Date: 2020-07-30 22:18:45
 * @LastEditTime: 2020-07-30 22:27:40
 * @LastEditors: Please set LastEditors
 * @Description: koa-router
 * @FilePath: \Course\Koa2\demo07.js
 */ 
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router({
  prefix: '/zzceaon'
})
router
  .get('/', (ctx, next) => {
    ctx.body = "Index"
  })
  .get('/todo', (ctx, next) => {
    ctx.body = "Todo Page"
  })
app
  .use(router.routes())
  .use(router.allowedMethods())  // allowedMethods() -> get
app.listen(3000, () => {
  console.log("server is starting at port 3000")
})