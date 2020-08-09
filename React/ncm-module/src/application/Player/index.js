/*
 * @Author: Zzceaon
 * @Date: 2020-08-09 08:42:26
 * @LastEditTime: 2020-08-10 01:09:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\application\Player\index.js
 */
import React, { useRef, useState, useEffect, memo } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'

function Player(props) {
  return (
    <div>Player</div>
  )
}
const mapStateToProps = state => ({
  fullScreen: state.getIn(['player', 'fullScreen']),
  playing: state.getIn(['player', 'playing']),
  currentSong: state.getIn(['player', 'currentSong']),
  showPlayList: state.getIn(['player', 'showPlayList']),
  mode: state.getIn(['player', 'mode']),
  currentIndex: state.getIn(['player', 'currentIndex']),
  playList: state.getIn(['player', 'playList']),
  sequencePlayList: state.getIn(['player', 'sequencePlayList']),
})
const mapDispatchToProps = dispatch => {
  return {
    togglePlayingDispatch(data) {
      dispatch(actionCreators.changePlayingState(data))
    },
    toggleFullScreenDispatch(data) {
      dispatch(actionCreators.changeFullScreen(data))
    },
    toggleShowPlayListDispatch(data) {
      dispatch(actionCreators.changeShowPlayList(data))
    },
    changeCurrentIndexDispatch(index) {
      dispatch(actionCreators.changeCurrentIndex(index))
    },
    changeCurrentSongDispatch(data) {
      dispatch(actionCreators.changeCurrentSong(data))
    },
    changePlayModeDispatch(data) {
      dispatch(actionCreators.changePlayMode(data))
    },
    changePlayListDispatch(data) {
      dispatch(actionCreators.changePlayList(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Player))