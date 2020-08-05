/*
 * @Author: Zzceaon
 * @Date: 2020-08-05 18:49:21
 * @LastEditTime: 2020-08-05 18:59:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\application\Rank\store\reducer.js
 */
import { fromJS } from 'immutable'
import * as actionTypes from './constants'

const defaultState = fromJS({
  rankList: [],
  loading: true
})
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_RANK_LIST:
      return state.set('rankList', action.data)
    case actionTypes.CHANGE_LOADING:
      return state.set('loading', action.data)
    default:
      return state
  }
}