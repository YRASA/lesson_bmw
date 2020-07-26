/*
 * @Author: Zzceaon
 * @Date: 2020-07-26 17:23:22
 * @LastEditTime: 2020-07-26 17:38:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\Next\demo3\pages\time.js
 */ 
import React, { useState } from 'react';
import dynamic from 'next/dynamic'

const One = dynamic(import('../components/one'))
function Time() {
  const [nowTime, setTime] = useState(Date.now())
  const changeTime = async () => {
    const moment = await import('moment')  // 加载外部模块方式
    setTime(moment.default(Date.now()).format())  // 这里不加default会报错
  }
  return (
    <>
      <div>显示时间为: {nowTime}</div>
      {/* 这里执行才调用上面的import('../components/one') */}
      <One />
      <div><button onClick={changeTime}>改变时间格式</button></div>
    </>
  )
}

export default Time