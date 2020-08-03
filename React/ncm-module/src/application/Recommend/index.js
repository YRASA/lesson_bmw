/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 10:21:09
 * @LastEditTime: 2020-08-03 10:55:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\application\Recommend\index.js
 */ 
import React, { useEffect } from 'react';
import Slider from '../../components/slider'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import RecommendList from '../../components/list'
import Scroll from '../../baseUI/scroll'
import { Content } from './style'
import { forceCheck } from 'react-lazyload'
import Loading from '../../baseUI/loading/index'

function Recommend(props) {
  // mock数据
  // const bannerList = [1, 2, 3, 4].map(item => {
  //   return { imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" }
  // })
  // const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
  //   return {
  //     id: 1,
  //     picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
  //     playCount: 17171122,
  //     name: "Symphony No. 7 'Leningrad'"
  //   }
  // })
  const { bannerList, recommendList, enterLoading } = props
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props
  useEffect(() => {
    if (!bannerList.size) {
      getBannerDataDispatch()
    }
    if (!recommendList.size) {
      getRecommendListDataDispatch()
    }
  }, [])
  const bannerListJS = bannerList ? bannerList.toJS() : []
  const recommendListJS = recommendList ? recommendList.toJS() : []
  return (
    <Content>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
      { enterLoading ? <Loading></Loading> : null }
    </Content>
  )
}
// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
  // 不要在这里将数据 toJS, 不然每次 diff 对比 props 的时候都是不一样的引用, 还是导致不必要的重渲染, 属于滥用 immutable
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
  enterLoading: state.getIn(['recommend', 'enterLoading'])
})
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList())
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList())
    }
  }
}
// 将 UI 组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend))