/*
 * @Author: Zzceaon
 * @Date: 2020-07-23 14:49:43
 * @LastEditTime: 2020-07-23 15:17:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\cnode\src\App.js
 */ 
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import Collect from './Collect'
import './App.css';
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <Router>
      header
      <Route path="/login" component={Login} />
      <PrivateRoute path="/collect" component={Collect} />
    </Router>
  );
}

export default App;
