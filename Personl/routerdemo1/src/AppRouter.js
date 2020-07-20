/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 12:59:16
 * @LastEditTime: 2020-07-20 13:47:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\routerdemo1\src\AppRouter.js
 */ 
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/Index'
import List from './Pages/List'
import Home from './Pages/Home'

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