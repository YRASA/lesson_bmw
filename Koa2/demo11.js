/*
 * @Author: Zzceaon
 * @Date: 2020-07-31 00:15:07
 * @LastEditTime: 2020-07-31 00:19:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Koa2\demo11.js
 */ 
const Koa = require('koa')
const views = require('koa-views')
const path = require('path')  // node原生
const app = new Koa()
app.use(views(path.join(__dirname, './view'), {  // path.join: 合并路径
  extension: 'ejs'
}))
app.use(async(ctx) => {
  let title = "Zzceaon"
  await ctx.render('index', {title})
})
app.listen(3000, () => {
  console.log("server is starting at port 3000")
})