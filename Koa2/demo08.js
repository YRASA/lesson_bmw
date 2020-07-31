/*
 * @Author: Zzceaon
 * @Date: 2020-07-30 22:31:11
 * @LastEditTime: 2020-07-31 13:41:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Koa2\demo08.js
 */ 
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
let home = new Router()
home
  .get('/zzceaon', async(ctx) => {
    ctx.body = "Home Zzceaon Page"
  })
  .get('/todo', async(ctx) => {
    ctx.body = "Home Todo Page"
  })
let page = new Router()
page
  .get('/zzceaon', async(ctx) => {
    ctx.body = "Page Zzceaon Page"
  })
  .get('/todo', async(ctx) => {
    ctx.body = "Page Todo Page"
  })
// 父级路由
let router = new Router()
router.use('/home', home.routes(), home.allowedMethods())  // 装载路由
router.use('/page', page.routes(), page.allowedMethods())
app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(3000, () => {
  console.log("server is starting at port 3000")
})