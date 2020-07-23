/*
 * @Author: Zzceaon
 * @Date: 2020-07-21 11:44:42
 * @LastEditTime: 2020-07-21 11:53:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\sanyuan-music\src\store\reducer.js
 */ 
import { combineReducers } from 'redux'
import { reducer as recommendReducer } from '../application/Recommend/store/index'

export default combineReducers({
  recommend: recommendReducer
})