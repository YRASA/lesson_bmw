/*
 * @Author: Zzceaon
 * @Date: 2020-07-30 19:50:50
 * @LastEditTime: 2020-07-30 20:51:08
 * @LastEditors: Please set LastEditors
 * @Description: get -> post (路由)
 * @FilePath: \Course\Koa2\demo04.js
 */ 
const Koa = require('koa')
const app = new Koa()
app.use(async(ctx) => {
  if(ctx.url === '/' && ctx.method === 'GET') {
    // 显示表单页面
    let html = `
      <h1>Zzceaon Koa2 request POST</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" />
        <br/>
        <p>age</p>
        <input name="age" />
        <br/>
        <p>website</p>
        <input name="website" />
        <br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  }else if(ctx.url === '/' && ctx.method === 'POST') {
    let postData = await parsePostData(ctx)
    ctx.body = postData
  }else{
    ctx.body = '<h1>404!</h1>'
  }
})
// 一定要捕获error
function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try{
      let postdata=""
      // addListener: 原生
      ctx.req.addListener('data', (data) => {  // 监听
        postdata += data
      })
      // on: Koa
      ctx.req.on('end', function() {
        let parseData = parseQueryStr(postdata)
        resolve(parseData)
      })
    }catch(error) {
      reject(error)
    }
  })
}
function parseQueryStr(queryStr) {
  let queryData = {}
  let queryStrList = queryStr.split('&')
  // entries(): 加索引
  for (let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split('=')
    queryData[itemList[0]] = decodeURIComponent(itemList[1])
  }
  return queryData
}
app.listen(3000, () => {
  console.log("server is starting at port 3000")
})