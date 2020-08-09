/*
 * @Author: Zzceaon
 * @Date: 2020-08-09 22:23:07
 * @LastEditTime: 2020-08-09 22:37:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\react-hooks-demo\src\demo.js
 */
// 数据在 hooks 怎么走
// useState -> context 轻量 | reducer 重 | useReducer | mobx
import React, { useReducer, memo } from 'react';

const userInfoReducer = (state, action) => {
  switch(action.type) {
    case "setusername":
      return {
        ...state,
        name: action.payload
      }
    case "setlastname":
      return {
        ...state,
        lastname: action.payload
      }
    default:
      return state
  }
}
export const MyComponent = () => {
  const [reducer, dispatch] = useReducer(userInfoReducer, {
    name: "John",
    lastname: "Doe"
  })
  return (
    <>
      <h3>{reducer.name} {reducer.lastname}</h3>
      <EditUsername name={reducer.name} dispatch={dispatch}/>
      <input type="text" value={reducer.lastname}
        onChange={e => dispatch({
          type: "setlastname",
          payload: e.target.value
        })}
      />
    </>
  )
}
const EditUsername = memo(props => {
  console.log("Hey I'm only rerendered when name gets updated, check memo")
  return (
    <input type="text"
      value={props.name}
      onChange={
        e => props.dispatch({
          type: "setusername",
          payload: e.target.value
        })
      }
    />
  )
})