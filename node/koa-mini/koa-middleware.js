/*
 * @Author: Zzceaon
 * @Date: 2020-09-17 15:29:15
 * @LastEditTime: 2020-09-19 21:56:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\node\koa-mini\koa-middleware.js
 */
let mid1 = async(ctx, next) => {
  console.log(1)
  await next()  // await mid2 === mid2
  console.log(2)
}
let mid2 = async(ctx, next) => {
  console.log(3)
  await next()
  console.log(4)
}
let mids = [mid1, mid2]
run()
function run() {
  dispatch(0)
  function dispatch(index) {
    let fn = mids[index]
    // next index + 1
    if (!fn) return
    // (ctx, next) => { await next() }
    fn({}, () => {
      index++
      dispatch(index)
    })
  }
}
