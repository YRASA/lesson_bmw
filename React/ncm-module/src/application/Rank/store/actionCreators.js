/*
 * @Author: Zzceaon
 * @Date: 2020-08-05 18:49:17
 * @LastEditTime: 2020-08-05 23:29:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\application\Rank\store\actioncreators.js
 */
import { getRankListRequest } from '../../../api/request'
import { fromJS } from 'immutable'
import * as actionTypes from './constants'

const changeRankList = (data) => ({
  type: actionTypes.CHANGE_RANK_LIST,
  data: fromJS(data)
})
const changeLoading = (data) => ({
  type: actionTypes.CHANGE_LOADING,
  data
})
export const getRankList = () => {
  return dispatch => {
    getRankListRequest().then(data => {
      let list = data && data.list
      dispatch(changeRankList(list))
      dispatch(changeLoading(false))
    })
  }
}