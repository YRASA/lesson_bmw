/*
 * @Author: Zzceaon
 * @Date: 2020-07-29 12:05:40
 * @LastEditTime: 2020-07-29 12:06:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\sanyuan-music\src\application\Singer\store\actionCreators.js
 */ 
import { getSingerInfoRequest } from './../../../api/request';
import { CHANGE_ARTIST } from './constants';

const changeArtist = (data) => ({
  type: CHANGE_ARTIST,
  data: data
});

export const getSingerInfo = (id) => {
  return dispatch => {
    console.log(id, '----------')
    getSingerInfoRequest(id)
      .then(data => {
        // console.log(data);
        dispatch(changeArtist(data.data.artist));
      })
  }
}