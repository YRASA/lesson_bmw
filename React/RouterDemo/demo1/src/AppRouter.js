/*
 * @Author: Zzceaon
 * @Date: 2020-07-19 23:45:53
 * @LastEditTime: 2020-07-19 23:54:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\RouterDemo\demo1\src\AppRouter.js
 */ 
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
  return (
    <h2>Zzceaon</h2>
  )
}

function List() {
  return (
    <h2>List-Page</h2>
  )
}

function AppRouter() {
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list/">列表页</Link></li>
      </ul>
      <Route path="/" exact component={Index} />
      <Route path="/list/" component={List} />
    </Router>
  )
}

export default AppRouter