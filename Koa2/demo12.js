/*
 * @Author: Zzceaon
 * @Date: 2020-07-31 00:24:16
 * @LastEditTime: 2020-07-31 00:32:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Koa2\demo12.js
 */ 
const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const app = new Koa()
const staticPath = './static'
app.use(static(path.join(__dirname, staticPath)))  // 这里配置了路径, 所以浏览器直接加静态资源名, 省略/static
app.use(async(ctx) => {
  ctx.body = "Zzceaon"
})
app.listen(3000, () => {
  console.log("server is starting at port 3000")
})
// 注意: 输入localhost:3000/a.js或localhost:3000/style.css不执行
// 因为只是访问而不是执行