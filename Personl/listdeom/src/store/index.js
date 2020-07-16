/*
 * @Author: Zzceaon
 * @Date: 2020-07-11 23:38:43
 * @LastEditTime: 2020-07-16 18:46:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\listdeom\src\store\index.js
 */ 
import reducer from './reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

// 增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducer, enhancer)

export default store;