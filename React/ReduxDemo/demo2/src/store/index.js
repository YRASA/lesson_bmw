/*
 * @Author: Zzceaon
 * @Date: 2020-07-11 20:25:22
 * @LastEditTime: 2020-07-11 20:29:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ReduxDemo\demo2\src\store\index.js
 */ 
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;