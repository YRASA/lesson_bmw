/*
 * @Author: Zzceaon
 * @Date: 2020-08-06 06:15:07
 * @LastEditTime: 2020-08-08 17:26:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\application\Album\index.js
 */
import React, { useState, memo, useRef, useEffect, useCallback } from 'react'
import { Container, TopDesc, Menu, SongList, SongItem } from './style'
import { CSSTransition } from 'react-transition-group'
import Header from '../../baseUI/header/index'
import Scroll from '../../baseUI/scroll/index'
import { getName, getCount } from '../../api/utils'
import { HEADER_HEIGHT } from '../../api/config'
import style from '../../assets/global-style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { isEmptyObject } from '../../api/utils'
import Loading from '../../baseUI/loading'

function Album(props) {
  // mock数据
  // const currentAlbum = {
  //   creator: {
  //     avatarUrl: "http://p1.music.126.net/O9zV6jeawR43pfiK2JaVSw==/109951164232128905.jpg",
  //     nickname: "浪里推舟"
  //   },
  //   coverImgUrl: "http://p2.music.126.net/ecpXnH13-0QWpWQmqlR0gw==/109951164354856816.jpg",
  //   subscribedCount: 2010711,
  //   name: "听完就睡，耳机是天黑以后柔软的梦境",
  //   tracks:[
  //     {
  //       name: "我真的受伤了",
  //       ar: [{name: "张学友"}, {name: "周华健"}],
  //       al: {
  //         name: "学友 热"
  //       }
  //     },
  //     {
  //       name: "我真的受伤了",
  //       ar: [{name: "张学友"}, {name: "周华健"}],
  //       al: {
  //         name: "学友 热"
  //       }
  //     },
  //     {
  //       name: "我真的受伤了",
  //       ar: [{name: "张学友"}, {name: "周华健"}],
  //       al: {
  //         name: "学友 热"
  //       }
  //     },
  //     {
  //       name: "我真的受伤了",
  //       ar: [{name: "张学友"}, {name: "周华健"}],
  //       al: {
  //         name: "学友 热"
  //       }
  //     },
  //     {
  //       name: "我真的受伤了",
  //       ar: [{name: "张学友"}, {name: "周华健"}],
  //       al: {
  //         name: "学友 热"
  //       }
  //     },
  //     {
  //       name: "我真的受伤了",
  //       ar: [{name: "张学友"}, {name: "周华健"}],
  //       al: {
  //         name: "学友 热"
  //       }
  //     },
  //     {
  //       name: "我真的受伤了",
  //       ar: [{name: "张学友"}, {name: "周华健"}],
  //       al: {
  //         name: "学友 热"
  //       }
  //     },
  //     {
  //       name: "我真的受伤了",
  //       ar: [{name: "张学友"}, {name: "周华健"}],
  //       al: {
  //         name: "学友 热"
  //       }
  //     },
  //     {
  //       name: "我真的受伤了",
  //       ar: [{name: "张学友"}, {name: "周华健"}],
  //       al: {
  //         name: "学友 热"
  //       }
  //     },
  //     {
  //       name: "我真的受伤了",
  //       ar: [{name: "张学友"}, {name: "周华健"}],
  //       al: {
  //         name: "学友 热"
  //       }
  //     },
  //   ]
  // }
  const id = props.match.params.id
  const { currentAlbum: currentAlbumImmutable, enterLoading } = props
  const { getAlbumDataDispatch } = props
  const [showStatus, setShowStatus] = useState(true)
  const [title, setTitle] = useState("歌单")
  const [isMarquee, setIsMarquee] = useState(false)
  const headerEl = useRef()
  let currentAlbum = currentAlbumImmutable.toJS()
  useEffect(() => {
    getAlbumDataDispatch(id)
  }, getAlbumDataDispatch, id)
  // 将传给子组件的函数用useCallback包裹, 如果不用useCallback包裹, 父组件每次执行时都会生成不一样的handleBack和
  // handleScroll函数引用, 那么子组件每一次memo的结果都会不一样, 导致不必要的重新渲染, 浪费了memo的价值, 因此
  // useCallback能帮助我们在依赖不变的情况下保持不变的函数引用, 最大程度的节约浏览器渲染性能
  const handleBack = useCallback(() => {
    setShowStatus(false)
  }, [])
  const handleScroll = useCallback((pos) => {
    let minScrollY = -HEADER_HEIGHT
    let percent = Math.abs(pos.y / minScrollY)
    let headerDom = headerEl.current
    // 滑过顶部的高度开始变化
    if (pos.y < minScrollY) {
      headerDom.style.backgroundColor = style["theme-color"]
      headerDom.style.opacity = Math.min(1, (percent - 1) / 2)
      setTitle(currentAlbum.name)
      setIsMarquee(true)
    } else {
      headerDom.style.backgroundColor = ""
      headerDom.style.opacity = 1
      setTitle("歌单")
      setIsMarquee(false)
    }
  }, [currentAlbum])
  const renderTopDesc = () => {
    return (
      <TopDesc background={currentAlbum.coverImgUrl}>
        <div className="background">
          <div className="filter"></div>
        </div>
        <div className="img_wrapper">
          <div className="decorate"></div>
          <img src={currentAlbum.coverImgUrl} alt=""/>
          <div className="play_count">
            <i className="iconfont play">&#xe66b;</i>
            <span className="count">{Math.floor (currentAlbum.subscribedCount/1000)/10} 万 </span>
          </div>
        </div>
        <div className="desc_wrapper">
          <div className="title">{currentAlbum.name}</div>
          <div className="person">
            <div className="avatar">
              <img src={currentAlbum.creator.avatarUrl} alt=""/>
            </div>
            <div className="name">{currentAlbum.creator.nickname}</div>
          </div>
        </div>
      </TopDesc>
    )
  }
  const renderMenu = () => {
    return (
      <Menu>
        <div>
          <i className="iconfont">&#xe600;</i>
          评论
        </div>
        <div>
          <i className="iconfont">&#xe63f;</i>
          点赞
        </div>
        <div>
          <i className="iconfont">&#xe670;</i>
          收藏
        </div>
        <div>
          <i className="iconfont">&#xe6a1;</i>
          更多
        </div>
      </Menu>
    )
  }
  const renderSongList = () => {
    return (
      <SongList>
        <div className="first_line">
          <div className="play_all">
            <i className="iconfont">&#xe732;</i>
            <span > 播放全部 <span className="sum">(共 {currentAlbum.tracks.length} 首)</span></span>
          </div>
          <div className="add_list">
            <i className="iconfont">&#xe601;</i>
            <span > 收藏 ({getCount (currentAlbum.subscribedCount)})</span>
          </div>
        </div>
        <SongItem>
          {
            currentAlbum.tracks.map ((item, index) => {
              return (
                <li key={index}>
                  <span className="index">{index + 1}</span>
                  <div className="info">
                    <span>{item.name}</span>
                    <span>
                      { getName (item.ar) } - { item.al.name }
                    </span>
                  </div>
                </li>
              )
            })
          }
        </SongItem>
      </SongList>
    )
  }
  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={props.history.goBack}
    >
      <Container>
        <Header ref={headerEl} title={title} handleClick={handleBack} isMarquee={isMarquee}></Header>
        {
          !isEmptyObject(currentAlbum) ? (
            <Scroll bounceTop={false} onScroll={handleScroll}>
              <div>
                { renderTopDesc() }
                { renderMenu() }
                { renderSongList() }
              </div>  
            </Scroll>
          ) : null
        }
        { enterLoading ? <Loading></Loading> : null }
      </Container>
    </CSSTransition>
  )
}
const mapStateToProps = (state) => ({
  currentAlbum: state.getIn(['album', 'currentAlbum']),
  enterLoading: state.getIn(['album', 'enterLoading'])
})
const mapDispatchToProps = (dispatch) => {
  return {
    getAlbumDataDispatch(id) {
      dispatch(actionCreators.changeEnterLoading(true))
      dispatch(actionCreators.getAlbumList(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Album))