/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 23:39:34
 * @LastEditTime: 2020-08-03 10:41:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\application\Recommend\store\reducer.js
 */ 
import * as actionTypes from './constants'
import { fromJS } from 'immutable'  // 这里用到 fromJS 把 JS 数据结构化成 immutable 数据结构

const defaultState = fromJS({
  bannerList: [],
  recommendList: [],
  enterLoading: true
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set('bannerList', action.data)
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set('recommendList', action.data)
    case actionTypes.CHNAGE_ENTER_LOADING:
      return state.set('enterLoading', action.data)
    default:
      return state
  }
}