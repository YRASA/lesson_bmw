/*
 * @Author: Zzceaon
 * @Date: 2020-08-09 07:33:37
 * @LastEditTime: 2020-08-09 07:49:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\application\Singer\store\reducer.js
 */
import * as actionTypes from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  artist: {},
  songsOfArtist: [],
  loading: true
})
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_ARTIST:
      return state.set('artist', action.data)
    case actionTypes.CHNAGE_SONGS_OF_ARTIST:
      return state.set('songsOfArtist', action.data)
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set('enterLoading', action.data)
    default:
      return state
  }
}