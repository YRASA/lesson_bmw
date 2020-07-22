/*
 * @Author: Zzceaon
 * @Date: 2020-07-21 17:29:18
 * @LastEditTime: 2020-07-21 17:31:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\hookdemo1\src\Example2.js
 */ 
import React, { useState } from 'react';

function Example() {
  const [age, setAge] = useState(18)
  const [sex, setSex] = useState('男')
  const [work, setWork] = useState('机器学习')
  return (
    <div>
      <p>年龄: {age}岁</p>
      <p>性别: {sex}</p>
      <p>工作: {work}</p>
    </div>
  )
}

export default Example