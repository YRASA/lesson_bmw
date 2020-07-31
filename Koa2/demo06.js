/*
 * @Author: Zzceaon
 * @Date: 2020-07-30 20:59:02
 * @LastEditTime: 2020-07-30 21:30:02
 * @LastEditors: Please set LastEditors
 * @Description: 这里并不是路由跳转, 而是读文件跳转
 * @FilePath: \Course\Koa2\demo06.js
 */ 
const Koa = require('koa')
const app = new Koa()
const fs = require('fs')

function render(page) {
  return new Promise((resolve, reject) => {
    // let pageUrl = './page/' + page  // es5
    let pageUrl = `./page/${page}`  // es6
    fs.readFile(pageUrl, "binary", (err, data) => {
      if (err) {
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}
async function route(url) {
  let page = '404.html'
  switch(url) {
    case '/':
      page = 'index.html'
      break
    case '/index':
      page = 'index.html'
      break
    case '/todo':
      page = 'todo.html'
      break
    default:
      break
  }
  let html = await render(page)
  console.log(html)
  return html
}
app.use(async(ctx) => {
  let url = ctx.request.url
  let html = await route(url)
  ctx.body = html
})
app.listen(3000, () => {
  console.log("server is starting at port 3000")
})