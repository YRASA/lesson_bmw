/*
 * @Author: Zzceaon
 * @Date: 2020-09-17 15:33:54
 * @LastEditTime: 2020-09-19 22:11:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\node\koa-mini\Koa.js
 */
const http = require('http')
class Koa {
  constructor() {
    this.middleWares = []
  }
  use(fn) {
    this.middleWares.push(fn)
  }
  listen(port) {
    http.createServer((req, res) => {
      // req inComing
      // 请求进来 组合洋葱模型
      let THAT = this
      let ctx = {
        set body(val) {
          res.end(val)
        },
        set statusCode(code) {
          // res.
        }
      }
      run()
      function run() {
        dispatch(0)
        function dispatch(index) {
          let fn = THAT.middleWares[index]
          if (!fn) return
          fn(ctx, () => {
            index++
            dispatch(index)
          })
        }
      }
    })
    .listen(port)
  }
}
let app = new Koa()
app.use(async (ctx, next) => {
  console.log(1)
  await next()
  console.log(2)
})
app.use(async (ctx, next) => {
  console.log(3)
  await next()
  ctx.body = 'XXX'  // get set res.end(XXX)
  console.log(4)
})
app.listen(9090)
