/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 11:12:02
 * @LastEditTime: 2020-08-09 08:42:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\store\reducer.js
 */ 
import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../application/Recommend/store/index'
import { reducer as singersReducer } from '../application/Singers/store/index'
import { reducer as rankReducer } from '../application/Rank/store/index'
import { reducer as albumReducer } from '../application/Album/store/index'
import { reducer as singerInfoReducer } from '../application/Singer/store/index'
import { reducer as playerReducer } from '../application/Player/store/index'

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  rank: rankReducer,
  album: albumReducer,
  singerInfo: singerInfoReducer,
  player: playerReducer
})