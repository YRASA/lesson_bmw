/*
 * @Author: Zzceaon
 * @Date: 2020-07-17 11:34:30
 * @LastEditTime: 2020-07-18 18:22:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\qunaer-fullstack\qunaer-fronted\src\store\actions.js
 */ 
export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = 'ACTION_SET_IS_CITY_SELECTOR_VISIBLE'
export const ACTION_SET_CITY_DATA = 'ACTION_SET_CITY_DATA'
export const ACTIOS_SET_IS_LOADING_DATA = 'ACTIOS_SET_IS_LOADING_CITY_DATA'

export function showCitySelector(isCitySelectorVisible) {
  return {
    type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    payload: !isCitySelectorVisible
  }
}

export function showLoadingCityData(isloadingCityData) {
  return {
    type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    payload: !isloadingCityData
  }
}

// 对ACTION_SET_CITY_DATA设置以一个action
export function fetchCityData() {
  return (dispatch, getState) => {
    const { isCitySelectorVisible, isloadingCityData } = getState()
    dispatch(showCitySelector(isCitySelectorVisible))
    dispatch(showLoadingCityData(isloadingCityData))
    fetch('/rest/cities')
      .then(res => res.json())
      .then(cityData => {
        dispatch(setCityData(cityData))
        dispatch(showLoadingCityData(!isloadingCityData))
      })
  }
}

export function setCityData(cityData) {
  return {
    type: ACTION_SET_CITY_DATA,
    payload: cityData
  }
}