/*
 * @Author: Zzceaon
 * @Date: 2020-07-21 11:55:26
 * @LastEditTime: 2020-07-23 10:38:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\sanyuan-music\src\application\Recommend\store\reducer.js
 */ 
import * as actionTypes from './constants'
const defaultState = {
  // 一个页面只有一个loading
  recommendList: [],
  banners: [],
  enterLoading: true
}
export default (state=defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_BANNER:
      return {...state, banners: action.data}
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return {...state, recommendList: action.data}
    case actionTypes.CHNAGE_ENTER_LOADING:
      return {...state, enterLoading: action.data}
    default:
      return state
  }
}