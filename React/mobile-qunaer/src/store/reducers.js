/*
 * @Author: Zzceaon
 * @Date: 2020-07-15 15:47:14
 * @LastEditTime: 2020-07-15 16:27:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\mobile-qunaer\src\store\reducers.js
 */ 
import { ACTION_SET_FROM, ACTION_SET_TO } from './action';

export default {
  from(state = '北京', action) {
    const { type, payload } = action
    switch(type) {
      case ACTION_SET_FROM:
        return payload
      default:

    }
    return state
  },
  to(state = '上海', action) {
    const { type, payload } = action
    switch(type) {
      case ACTION_SET_TO:
        return payload
      default:
        
    }
    return state
  }
}