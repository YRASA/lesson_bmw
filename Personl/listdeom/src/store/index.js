/*
 * @Author: Zzceaon
 * @Date: 2020-07-11 23:38:43
 * @LastEditTime: 2020-07-11 23:44:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\listdeom\src\store\index.js
 */ 
import reducer from './reducer';
import { createStore } from 'redux';
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;