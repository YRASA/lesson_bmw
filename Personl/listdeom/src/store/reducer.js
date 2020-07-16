/*
 * @Author: Zzceaon
 * @Date: 2020-07-11 23:38:51
 * @LastEditTime: 2020-07-16 18:44:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\listdeom\src\store\reducer.js
 */ 
import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, GET_LIST } from '../action/actionTypes'

const defaultState = {
  inputValue: "Writing Something",
  list: []
}
export default (state=defaultState, action) => {
  if (action.type === INPUT_CHANGE) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ""
    return newState
  }
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }
  return state
}