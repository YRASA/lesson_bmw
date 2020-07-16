import { func } from "prop-types"

/*
 * @Author: Zzceaon
 * @Date: 2020-07-15 15:46:31
 * @LastEditTime: 2020-07-16 15:03:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\mobile-qunaer\src\store\action.js
 */ 
export const ACTION_SET_FROM = 'SET_FROM'
export const ACTION_SET_TO = 'SET_TO'

export function setFrom(from) {
  return {
    type: ACTION_SET_FROM,
    payload: from
  }
}

export function setTo(to) {
  return {
    type: ACTION_SET_TO,
    payload: to
  }
}

export function exchangeFromTo() {
  // 1.两个action都要调用
  // 2.payload
  return (dispatch, getState) => {
    const { from, to } = getState()
    dispatch(setFrom(to))
    dispatch(setTo(from))
  }
}