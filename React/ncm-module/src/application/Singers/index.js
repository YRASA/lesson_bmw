/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 10:21:49
 * @LastEditTime: 2020-08-05 18:45:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\application\Singers\index.js
 */ 
import React, { useEffect, useRef } from 'react';
import Horizen from '../../baseUI/horizen-item'
import { categoryTypes, alphaTypes } from '../../api/config'
import { NavContainer, List, ListContainer, ListItem, EnterLoading } from './style'
import Scroll from '../../baseUI/scroll'
import * as actionTypes from './store/actionCreators'
import { connect } from 'react-redux'
import Loading from '../../baseUI/loading'
import LazyLoad, { forceCheck } from 'react-lazyload'
// import { CHANGE_ALPHA, CHANGE_CATEGORY } from './data'
// useReducer + useContext -> redux

function Singers (props) {
  // mock数据
  // const singerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
  //   return {
  //     picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
  //     name: "Aimer",
  //     accountId: 277313426
  //   }
  // })
  // useReducer + useContext -> redux
  // const {data, dispatch} = useContext(CategoryDataContext)
  // const {category, alpha} = data.toJS()
  const scrollRef = useRef(null)
  const { singerList, category, alpha, enterLoading, pullUpLoading, pullDownLoading, listOffset } = props
  const { updateCategoryDispatch, updateAlphaDispatch, getHotSingerDispatch, pullUpRefreshDispatch, pullDownRefreshDispatch } = props
  useEffect(() => {
    if(!singerList.length && !category && !alpha) {
      getHotSingerDispatch()
    }
    // eslint-disable-next-line
  }, [])
  const handleUpdateAlpha = (newVal) => {
    if (alpha === newVal) return
    updateAlphaDispatch(newVal)
    scrollRef.current.refresh()
  }
  // useReducer + useContext -> redux
  // const handleUpdateAlpha = (val) => {
  //   if (alpha === val) return
  //   dispatch({type: CHANGE_ALPHA, data: val})
  //   updateAlphaDispatch(val)
  //   scrollRef.current.refresh()
  // }
  const handleUpdateCategory = (newVal) => {
    if (category === newVal) return
    updateCategoryDispatch(newVal)
    scrollRef.current.refresh()
  }
  // useReducer + useContext -> redux
  // const handleUpdateCategory = (val) => {
  //   if (category === val) return
  //   dispatch({type: CHANGE_CATEGORY, data: val})
  //   updateCategoryDispatch(val)
  //   scrollRef.current.refresh()
  // }
  const handlePullUp = () => {
    pullUpRefreshDispatch(category === '', listOffset)
  }
  const handlePullDown = () => {
    pullDownRefreshDispatch(category, alpha)
  }
  // 渲染函数 返回歌手列表
  const renderSingerList = () => {
    const { singerList } = props
    return (
      <List>
        {
          singerList.toJS().map((item, index) => {
            return (
              <ListItem key={item.accountId+""+index}>
                <div className="img_wrapper">
                  <LazyLoad placeholder={<img width="100%" height="100%" src={require('./singer.png')} alt="music"/>}>
                    <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music"/>
                  </LazyLoad>
                </div>
                <span className="name">{item.name}</span>
              </ListItem>
            )
          })
        }
      </List>
    )
  }
  return (
    <div>
      {/* 对于better-scroll来讲, 其作用的元素外必须有一个尺寸固定的容器包裹, 因此设置NavContainer */}
      <NavContainer>
        <Horizen 
          list={categoryTypes}
          title={"分类 (默认热门):"} 
          handleClick={v => handleUpdateCategory(v)} 
          oldVal={category}></Horizen>
        <Horizen 
          list={alphaTypes} 
          title={"首字母:"} 
          handleClick={v => handleUpdateAlpha(v)} 
          oldVal={alpha}></Horizen>
      </NavContainer>
      <ListContainer>
        <Scroll
          onScroll={forceCheck}
          pullUp = { handlePullUp }
          pullDown = { handlePullDown }
          ref={ scrollRef }
          pullUpLoading = { pullUpLoading }
          pullDownLoading = { pullDownLoading }
        >
          { renderSingerList() }
        </Scroll>
      </ListContainer>
      {/* 入场加载动画 */}
      { enterLoading ? <EnterLoading><Loading></Loading></EnterLoading> : null }
    </div>
  )
}
const mapStateToProps = (state) => ({
  alpha: state.getIn(['singers', 'alpha']),
  category: state.getIn(['singers', 'category']),
  singerList: state.getIn(['singers', 'singerList']),
  enterLoading: state.getIn(['singers', 'enterLoading']),
  pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
  pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
  listOffset: state.getIn(['singers', 'listOffset'])
})
const mapDispatchToProps = (dispatch) => {
  return {
    getHotSingerDispatch() {
      dispatch(actionTypes.getHotSingerList())
    },
    updateCategoryDispatch(newVal) {
      dispatch(actionTypes.changeCategory(newVal))
      dispatch(actionTypes.getSingerList())
    },
    updateAlphaDispatch(newVal) {
      dispatch(actionTypes.changeAlpha(newVal))
      dispatch(actionTypes.getSingerList())
    },
    // 滑动到最底部刷新部分的处理
    pullUpRefreshDispatch(hot, count) {
      dispatch(actionTypes.changePullUpLoading(true))
      if (hot) {
        dispatch(actionTypes.refreshMoreHotSingerList())
      } else {
        dispatch(actionTypes.refreshMoreSingerList())
      }
    },
    // 顶部下拉刷新
    pullDownRefreshDispatch(category, alpha) {
      dispatch(actionTypes.changePullDownLoading(true))
      dispatch(actionTypes.changeListOffset(0))  // 属于重新获取数据
      if (category === '' && alpha === '') {
        dispatch(actionTypes.getHotSingerList())
      } else {
        dispatch(actionTypes.getSingerList())
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers))