/*
 * @Author: Zzceaon
 * @Date: 2020-07-18 19:53:27
 * @LastEditTime: 2020-07-19 00:55:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\listdemo2\src\store\index.js
 */ 
import thunk from 'redux-thunk'
import reducer from '../reducer/reducer'
import { createStore, applyMiddleware, compose } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

export default createStore(reducer, enhancer)