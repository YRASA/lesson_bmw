/*
 * @Author: Zzceaon
 * @Date: 2020-06-21 11:44:50
 * @LastEditTime: 2020-07-12 17:38:21
 * @LastEditors: Please set LastEditors
 * @Description: reducer.js
 * @FilePath: \Course\React\ReduxDemo\demo01\src\store\reducer.js
 */ 
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'
const defaultState = {
  inputValue: "Write Something",
  list: [
    "早8点开晨会，分配今天的任务",
    "早9点和项目经理开需求沟通会",
    "晚5点组织人员进行Review代码"
  ]
}

export default (state = defaultState, action) => {
  console.log(state, action)
  // Reducer里只能接受state，不能改变state
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}
