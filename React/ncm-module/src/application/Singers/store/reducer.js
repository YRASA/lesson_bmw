/*
 * @Author: Zzceaon
 * @Date: 2020-08-04 00:58:36
 * @LastEditTime: 2020-08-04 23:07:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\application\Singers\store\reducer.js
 */
import { fromJS } from 'immutable'
import * as actionTypes from './constants'

const defaultState = fromJS({
  category: "",
  alpha: "",
  singerList: [],
  enterLoading: true,  // 控制进场loading
  pullUpLoading: false,  // 控制上拉加载动画
  pullDownLoading: false,  // 控制下拉加载动画
  listOffset: 0  // 这里是当前页数
})
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_ALPHA:
      return state.merge({
        'alpha': action.data,
        listOffset: 0,
        enterLoading: true
      })
    case actionTypes.CHANGE_CATEGORY:
      return state.merge({
        'category': action.data,
        listOffset: 0,
        enterLoading: true
      })
    case actionTypes.CHANGE_SINGER_LIST:
      // console.log('singerList', action.data.toJS())
      return state.set('singerList', action.data)
    case actionTypes.CHANGE_LIST_OFFSET:
      return state.set('listOffset', action.data)
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set('enterLoading', action.data)
    case actionTypes.CHANGE_PULLUP_LOADING:
      return state.set('pullUpLoading', action.data)
    case actionTypes.CHANGE_PULLDOWN_LOADING:
      return state.set('pullDownLoading', action.data)
    default:
      return state
  }
}