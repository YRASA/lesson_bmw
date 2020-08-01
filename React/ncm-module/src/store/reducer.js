/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 11:12:02
 * @LastEditTime: 2020-08-02 00:07:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\store\reducer.js
 */ 
import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../application/Recommend/store/index'

export default combineReducers({
  recommend: recommendReducer
})