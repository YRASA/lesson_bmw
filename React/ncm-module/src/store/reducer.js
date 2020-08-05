/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 11:12:02
 * @LastEditTime: 2020-08-05 19:00:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\store\reducer.js
 */ 
import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../application/Recommend/store/index'
import { reducer as singersReducer } from '../application/Singers/store/index'
import { reducer as rankReducer } from '../application/Rank/store/index'

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  rank: rankReducer
})