/*
 * @Author: Zzceaon
 * @Date: 2020-07-22 13:27:24
 * @LastEditTime: 2020-07-22 13:31:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\hookdemo1\src\Example4.js
 */ 
import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext()

function Counter() {
  let count = useContext(CountContext)
  return (
    <h2>{count}</h2>
  )
}
function Example() {
  const [ count, setCount ] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {setCount(count + 1)}}>Click me</button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

export default Example