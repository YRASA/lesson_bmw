/*
 * @Author: Zzceaon
 * @Date: 2020-07-17 11:34:35
 * @LastEditTime: 2020-07-18 18:18:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\qunaer-fullstack\qunaer-fronted\src\store\reducers.js
 */ 
import { ACTION_SET_IS_CITY_SELECTOR_VISIBLE, ACTION_SET_CITY_DATA, ACTIOS_SET_IS_LOADING_CITY_DATA } from './actions'

export default {
  // 页面状态 改变应用数据 分支上的
  isCitySelectorVisible(state=false, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
        return payload
  }
  isloadingCityData(state=false, action) {
    const { type, payload } = action
    switch(type) {
      case ACTIOS_SET_IS_LOADING_CITY_DATA:
        return payload
    }
  }
  cityData(state=null, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_CITY_DATA:
        return payload
      default:
        
    }
  }
  return state
}