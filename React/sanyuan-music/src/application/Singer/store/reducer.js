/*
 * @Author: Zzceaon
 * @Date: 2020-07-29 12:04:53
 * @LastEditTime: 2020-07-29 12:06:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\sanyuan-music\src\application\Singer\store\reducer.js
 */ 
import * as actionTypes from './constants';
const defaultState = {
  artist: {}
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_ARTIST:
      return {...state, artist: action.data}
    default:
      return state;
  }
}
