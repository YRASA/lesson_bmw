/*
 * @Author: Zzceaon
 * @Date: 2020-06-21 11:43:30
 * @LastEditTime: 2020-07-16 19:57:43
 * @LastEditors: Please set LastEditors
 * @Description: store 入口文件
 * @FilePath: \Course\React\ReduxDemo\demo01\src\store\index.js
 */ 
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
// 增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer, enhancer)
sagaMiddleware.run(mySagas)

export default store