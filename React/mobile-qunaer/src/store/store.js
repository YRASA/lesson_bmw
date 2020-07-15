/*
 * @Author: Zzceaon
 * @Date: 2020-07-15 15:31:55
 * @LastEditTime: 2020-07-15 21:56:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\mobile-qunaer\src\store\store.js
 */ 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'  // 异步状态修改
import reducers from './reducers'

export default createStore(
  combineReducers(reducers),
  {
    from: '北京',
    to: '上海'
  },
  applyMiddleware(thunk)
)