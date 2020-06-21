/*
 * @Author: Zzceaon
 * @Date: 2020-06-21 11:43:30
 * @LastEditTime: 2020-06-21 12:27:03
 * @LastEditors: Please set LastEditors
 * @Description: store 入口文件
 * @FilePath: \Course\React\ReduxDemo\demo01\src\store\index.js
 */ 
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store