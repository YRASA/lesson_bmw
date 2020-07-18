/*
 * @Author: Zzceaon
 * @Date: 2020-07-16 21:54:50
 * @LastEditTime: 2020-07-17 13:09:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ReduxDemo\demo02\src\index.js
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>, 
  document.getElementById('root')
);
