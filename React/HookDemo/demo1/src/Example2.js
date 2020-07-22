/*
 * @Author: Zzceaon
 * @Date: 2020-07-21 17:16:58
 * @LastEditTime: 2020-07-21 17:26:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\HookDemo\demo1\src\Example2.js
 */ 
import React, { useState } from 'react';

function Example() {
  const [age, setAge] = useState(18)
  const [sex, setSex] = useState('男')
  const [work, setWork] = useState('机器学习')
  return (
    <div>
      <p>今年: {age}岁</p>
      <p>性别: {sex}</p>
      <p>工作: {work}</p>
    </div>
  )
}

export default Example