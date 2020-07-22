/*
 * @Author: Zzceaon
 * @Date: 2020-07-21 10:10:41
 * @LastEditTime: 2020-07-21 10:29:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\HookDemo\demo1\src\Example1.js
 */ 
import React, { useState } from 'react';

function Example() {
  // let _useState = useState(0)
  // let count = _useState[0]
  // let setCount = _useState[1]
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={() => {setCount(count + 1)}}>Click me</button>
    </div>
  )
}

export default Example