/*
 * @Author: Zzceaon
 * @Date: 2020-07-19 23:45:53
 * @LastEditTime: 2020-07-20 13:42:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\RouterDemo\demo1\src\AppRouter.js
 */ 
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import List from './Pages/List'
import Index from './Pages/Index'
import Home from './Pages/Home'
// 设置规则 传递值 接受值 显示内容
function AppRouter() {
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list/">列表页</Link></li>
      </ul>
      <Route path="/" exact component={Index} />
      <Route path="/list/:id" component={List} />
      <Route path="/home/" component={Home} />
    </Router>
  )
}

export default AppRouter