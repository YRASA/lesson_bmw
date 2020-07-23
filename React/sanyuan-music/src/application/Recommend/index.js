/*
 * @Author: Zzceaon
 * @Date: 2020-07-21 10:38:28
 * @LastEditTime: 2020-07-23 11:48:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\sanyuan-music\src\application\Recommend\index.js
 */ 
import React, { useEffect, useState, memo } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'

function Recommend(props) {
  const { recommendList, banners, enterLoading } = props
  const { getRecommendListDataDispatch, getBannersDataDispatch } = props
  useEffect(() => {
    if (!recommendList.length) {
      getRecommendListDataDispatch()
    }
    if (!banners.length) {
      getBannersDataDispatch()
    }
  }, [])
  console.log(recommendList, banners, enterLoading, "-----------")
  return (
    <>
      Recommend
    </>
  )
}
const mapStateToProps = (state) => ({
  recommendList: state.recommend.recommendList,
  banners: state.recommend.banners,
  enterLoading: state.recommend.enterLoading
})
const mapDispatchToProps = (dispatch) => {
  return {
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendListDataDispatch())
    },
    getBannersDataDispatch() {
      dispatch(actionTypes.getBanners())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))