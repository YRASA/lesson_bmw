/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 11:12:02
 * @LastEditTime: 2020-08-04 01:33:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\store\reducer.js
 */ 
import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../application/Recommend/store/index'
import { reducer as singersReducer } from '../application/Singers/store/index'

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer
})