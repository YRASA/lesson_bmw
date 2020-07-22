/*
 * @Author: Zzceaon
 * @Date: 2020-07-22 13:32:24
 * @LastEditTime: 2020-07-22 13:39:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\HookDemo\demo1\src\Example5.js
 */ 
// Reducer
// function countReducer(state, action) {
//   switch(action.type) {
//     case 'add':
//       return state + 1
//     case 'sub':
//       return state - 1
//     default:
//       return state
//   }
// }
import React, { useReducer } from 'react';

function ReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    switch(action) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default:
        return state
    }
  }, 0)
  return (
    <div>
      <h2>score: {count}</h2>
      <button onClick={() => {dispatch('add')}}>Increment</button>
      <button onClick={() => {dispatch('sub')}}>Decrement</button>
    </div>
  )
}

export default ReducerDemo