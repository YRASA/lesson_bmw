/*
 * @Author: Zzceaon
 * @Date: 2020-08-08 18:48:41
 * @LastEditTime: 2020-08-09 08:15:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\application\Singer\index.js
 */
import React, { useState, useEffect, useRef, useCallback, memo } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Container } from './style'
import { ImgWrapper, CollectButton, SongListWrapper, BgLayer } from './style'
import Header from '../../baseUI/header/index'
import Scroll from '../../baseUI/scroll/index'
import SongsList from '../SongList'
import { HEADER_HEIGHT } from '../../api/config'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import Loading  from '../../baseUI/loading/index'

function Singer(props) {
  // mock数据
  // const artist = {
  //   picUrl: "https://p2.music.126.net/W__FCWFiyq0JdPtuLJoZVQ==/109951163765026271.jpg",
  //   name: "薛之谦",
  //   hotSongs: [
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //     {
  //       name: "我好像在哪见过你",
  //       ar: [{name: "薛之谦"}],
  //       al: {
  //         name: "薛之谦专辑"
  //       }
  //     },
  //   ]
  // }
  const {
    artist: immutableArtist,
    songs: immutableSongs,
    loading
  } = props
  const { getSingerDataDispatch } = props
  const artist = immutableArtist.toJS()
  const songs = immutableSongs.toJS()
  const [showStatus, setShowStatus] = useState(true)
  const collectButton = useRef()
  const imageWrapper = useRef()
  const songScrollWrapper = useRef()
  const songScroll = useRef()
  const header = useRef()
  const layer = useRef()
  // 图片初始化高度
  const initialHeight = useRef(0)
  // 往上偏移的尺寸, 露出圆角
  const OFFSET = 5
  const setShowStatusFalse = useCallback(() => {
    setShowStatus(false)
  }, [])
  const handleScroll = useCallback(pos => {
    let height = initialHeight.current
    const newY = pos.y
    const imageDOM = imageWrapper.current
    const buttonDOM = collectButton.current
    const headerDOM = header.current
    const layerDOM = layer.current
    const minScrollY = -(height - OFFSET) + HEADER_HEIGHT
    // 指的是滑动距离占图片高度的百分比
    const percent = Math.abs(newY / height)
    // 因为歌手列表是没有背景的, 是layerDOM遮罩给它提供的白色背景, 因此在在处理过程中, 遮罩随着内容的滚动而滚动
    // 往下拉, 图片放大, 按钮跟着偏移
    if (newY > 0) {
      imageDOM.style["transform"] = `scale(${1 + percent})`
      buttonDOM.style["transform"] = `translate3d(0, ${newY}px, 0)`
      layerDOM.style.top = `${height - OFFSET + newY}px`
    }
    // 往上滑动, 但遮罩部分没有超过Header部分
    else if (newY >= minScrollY) {
      layerDOM.style.top = `${height - OFFSET - Math.abs(newY)}px`
      // 这时候保证遮罩的层叠优先级比图片高, 不至于被图片挡住
      layerDOM.style.zIndex = 1
      imageDOM.style.paddingTop = "75%"
      imageDOM.style.height = 0
      imageDOM.style.zIndex = -1
      // 按钮跟着移动且渐渐变透明
      buttonDOM.style["transform"] = `translate3d(0, ${newY}px, 0)`
      buttonDOM.style["opacity"] = `${1 - percent * 2}`
    }
    // 往上滑动, 遮罩超过Header部分
    else if (newY < minScrollY) {
      layerDOM.style.top = `${HEADER_HEIGHT - OFFSET}px`
      layerDOM.style.zIndex = 1
      // 防止溢出的歌单内容遮住Header
      headerDOM.style.zIndex = 100
      // 此时图片高度与Header一致
      imageDOM.style.height = `${HEADER_HEIGHT}px`
      imageDOM.style.paddingTop = 0
      imageDOM.style.zIndex = 99
    }
  }, [])
  useEffect(() => {
    const id = props.match.params.id
    getSingerDataDispatch(id)
    let h = imageWrapper.current.offsetHeight
    songScrollWrapper.current.style.top = `${h - OFFSET}px`
    initialHeight.current = h
    // 把遮罩先放在下面, 以裹住歌曲列表
    layer.current.style.top = `${h - OFFSET}px`
    songScroll.current.refresh()
  }, [])
  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={() => props.history.goBack()}
    >
      <Container>
        <Header
          handleClick = {setShowStatusFalse}
          title={artist.name}
          ref={header}
        ></Header>
        <ImgWrapper  ref={imageWrapper} bgUrl={artist.picUrl}>
          <div className="filter"></div>
        </ImgWrapper>
        <CollectButton ref={collectButton}>
        <i className="iconfont">&#xe601;</i>
        <span className="text"> 收藏 </span>
        </CollectButton>
        <BgLayer ref={layer}></BgLayer>
        <SongListWrapper ref={songScrollWrapper}>
          <Scroll onScroll={handleScroll} ref={songScroll}>
            <SongsList
              songs={songs}
              showCollect={false}
            ></SongsList>
          </Scroll>
        </SongListWrapper>
        { loading ? <Loading></Loading> : null }
      </Container>
    </CSSTransition>
  )
}
const mapStateToProps = state => ({
  artist: state.getIn(['singerInfo', 'artist']),
  songs: state.getIn(['singerInfo', 'songsOfArtist']),
  loading: state.getIn(['singerInfo', 'laoding'])
})
const mapDispatchToProps = dispatch => {
  return {
    getSingerDataDispatch(id) {
      dispatch(actionCreators.changeEnterLoading(true))
      dispatch(actionCreators.getSingerInfo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Singer))