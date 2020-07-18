/*
 * @Author: Zzceaon
 * @Date: 2020-07-17 11:34:48
 * @LastEditTime: 2020-07-17 12:13:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\qunaer-fullstack\qunaer-fronted\src\store\store.js
 */ 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'  // 异步状态修改
import reducers from './reducers'

export default createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
)