/*
 * @Author: Zzceaon
 * @Date: 2020-07-17 13:02:20
 * @LastEditTime: 2020-07-18 19:30:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ReduxDemo\demo02\src\store\index.js
 */ 
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer/reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
export default createStore(reducer, enhancer)