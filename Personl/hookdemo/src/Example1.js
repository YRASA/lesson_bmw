/*
 * @Author: Zzceaon
 * @Date: 2020-07-21 10:05:37
 * @LastEditTime: 2020-07-21 10:08:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\hookdemo1\src\Example1.js
 */ 
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={() => {setCount(count + 1)}}>Click me</button>
    </div>
  )
}

export default Example