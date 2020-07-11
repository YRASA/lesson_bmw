/*
 * @Author: Zzceaon
 * @Date: 2020-07-11 23:38:51
 * @LastEditTime: 2020-07-12 00:11:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\listdeom\src\store\reducer.js
 */ 
const defaultState = {
  inputValue: "Writing Something",
  list: [
    "作为意志和表象的世界",
    "纯粹理性批判",
    "存在与虚无"
  ]
}
export default (state=defaultState, action) => {
  if (action.type === "inputChange") {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === "addItem") {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ""
    return newState
  }
  if (action.type === "deleteItem") {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}