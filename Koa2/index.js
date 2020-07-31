/*
 * @Author: Zzceaon
 * @Date: 2020-07-29 21:08:26
 * @LastEditTime: 2020-07-29 21:11:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Koa2\index.js
 */ 
const Koa = require('koa')
const app = new Koa()

app.use(async(ctx) => {  // ctx: koa自带, 意为上下文环境
  ctx.body = "Zzceaon"
})
app.listen(3000)

console.log("app is starting at port 3000")
