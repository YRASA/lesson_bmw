/*
 * @Author: Zzceaon
 * @Date: 2020-07-15 15:47:14
 * @LastEditTime: 2020-07-16 15:08:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\mobile-qunaer\src\store\reducers.js
 */ 
import { ACTION_SET_FROM, ACTION_SET_TO } from './action';

// state {
//   from: '北京',
//   to: '上海',
//   time: {
//     start: ,
//     end:
//   }
// }

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