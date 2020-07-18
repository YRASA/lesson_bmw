/*
 * @Author: Zzceaon
 * @Date: 2020-07-17 13:03:20
 * @LastEditTime: 2020-07-17 13:44:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ReduxDemo\demo02\src\reducer\reducer.js
 */ 
const defaultState = {
  inputValue: 'Zzceaon',
  list: []
}

export default (state=defaultState, action) => {
  if (action.type === 'change_input') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === 'add_item') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  return state
}