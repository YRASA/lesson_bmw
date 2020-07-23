/*
 * @Author: Zzceaon
 * @Date: 2020-07-21 11:56:19
 * @LastEditTime: 2020-07-23 12:07:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\sanyuan-music\src\application\Recommend\store\actionCreators.js
 */ 
import * as actionTypes from './constants'
import { getRecommendListRequest, getBannerRequest } from '../../../api/request'

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: data
})
export const changeEnterLoading = (data) => ({
  type: actionTypes.CHNAGE_ENTER_LOADING,
  data
})
export const changeBanners = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: data
})
export const getRecommendListDataDispatch = () => {
  return (dispatch) => {
    getRecommendListRequest().then(data => {
      dispatch(changeRecommendList(data))
      dispatch(changeEnterLoading(false))
    }).catch(() => {
      console.log("推荐歌单传输有误")
    }) 
  }
}
export const getBanners = () => {
  return (dispatch) => {
    getBannerRequest().then(data => {
      console.log(data)
      const action = changeBanners(data.data.banners)
    }).catch(() => {
      console.log("轮播图数据传输有无")
    })
  }
}