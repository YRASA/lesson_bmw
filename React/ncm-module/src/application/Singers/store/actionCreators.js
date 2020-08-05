/*
 * @Author: Zzceaon
 * @Date: 2020-08-04 00:58:44
 * @LastEditTime: 2020-08-05 13:22:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\application\Singers\store\actionCreators.js
 */
import { getHotSingerListRequest, getSingerListRequest } from '../../../api/request'
import * as actionTypes from '../store/constants'
import { fromJS } from 'immutable'

const changeSingerList = (data) => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  data: fromJS(data)
})
export const changeCategory = (data) => ({
  type: actionTypes.CHANGE_CATEGORY,
  data
})
export const changeAlpha = (data) => ({
  type: actionTypes.CHANGE_ALPHA,
  data
})
export const changeListOffset = (data) => ({
  type: actionTypes.CHANGE_LIST_OFFSET,
  data
})
// 进场loading
export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
})
// 滑动到最底部的loading
export const changePullUpLoading = (data) => ({
  type: actionTypes.CHANGE_PULLUP_LOADING,
  data
})
// 顶部下拉刷新loading
export const changePullDownLoading = (data) => ({
  type: actionTypes.CHANGE_PULLDOWN_LOADING,
  data
})
// 第一次加载热门歌手
export const getHotSingerList = () => {
  return (dispatch) => {
    getHotSingerListRequest(0).then(res => {
      const data = res.artists
      dispatch(changeSingerList(data))
      dispatch(changeEnterLoading(false))
      dispatch(changePullDownLoading(false))
      dispatch(changeListOffset(data.length))
    }).catch(() => {
      console.log("热门歌手数据获取失败")
    })
  }
}
// 加载更多热门歌手
export const refreshMoreHotSingerList = () => {
  return (dispatch, getState) => {
    const offset = getState().getIn(['singers', 'listOffset'])
    const singerList = getState().getIn(['singers', 'singerList']).toJS()
    getHotSingerListRequest(offset).then(res => {
      const data = [...singerList, ... res.artists]
      dispatch(changeSingerList(data))
      dispatch(changePullUpLoading(false))
      dispatch(changeListOffset(data.length))
    }).catch(() => {
      console.log("热门歌手数据获取失败")
    })
  }
}
// 第一次加载对应类别的歌手
export const getSingerList = () => {
  return (dispatch, getState) => {
    const offset = getState().getIn(['singers', 'listOffset'])
    const category = getState().getIn(['singers', 'category'])
    const alpha = getState().getIn(['singers', 'alpha'])
    // console.log('alpha', alpha, 'category', category, getState().toJS())
    getSingerListRequest(category, alpha, offset).then(res => {
      const data = res.artists
      dispatch(changeSingerList(data))
      dispatch(changeEnterLoading(false))
      dispatch(changePullDownLoading(false))
      dispatch(changeListOffset(data.length))
    }).catch(() => {
      console.log("歌手数据获取失败")
    })
  }
}
// 加载更多歌手
export const refreshMoreSingerList = () => {
  return (dispatch, getState) => {
    const category = getState().getIn(['singers', 'category'])
    const alpha = getState().getIn(['singers', 'alpha'])
    const offset = getState().getIn(['singers', 'listOffset'])
    const singerList = getState().getIn(['singers', 'singerList']).toJS()
    getSingerListRequest(category, alpha, offset).then(res => {
      const data = [...singerList, ...res.artists]
      dispatch(changeSingerList(data))
      dispatch(changePullUpLoading(false))
      dispatch(changeListOffset(data.length))
    }).catch(() => {
      console.log("歌手数据获取失败")
    })
  }
}