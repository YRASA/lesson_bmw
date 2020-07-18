/*
 * @Author: Zzceaon
 * @Date: 2020-07-18 19:53:38
 * @LastEditTime: 2020-07-19 01:17:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\listdemo2\src\reducer\reducer.js
 */ 
const defaultState = {
  inputValue: 'Zzceaon',
  list: []
}

export default (state=defaultState, action) => {
  if (action.type === "input_change") {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === 'add_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ""
    return newState
  }
  return state
}