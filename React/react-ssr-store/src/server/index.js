/*
 * @Author: Zzceaon
 * @Date: 2020-09-18 19:24:15
 * @LastEditTime: 2020-09-22 21:02:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\react-ssr-store\src\server\index.js
 */
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Header from '../common/Header'

const app = new express()
app.use(express.static('public'))  // 静态资源
app.get('*', (req, res) => {
  // 请求是在后端
  Header.loadData().then(r => {
    const htmlStr = renderToString(<Header />)
    // <div>Hello World</div>
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <div id="root">${htmlStr}</div>
        <script>window.songs = ${JSON.stringify(r.data)}</script>
        <script src="/index.js"></script>
      </body>
      </html>  
    `)
  })
})
// 渲染React组件
app.listen(9090, () => {
  console.log('server is running 9090')
})