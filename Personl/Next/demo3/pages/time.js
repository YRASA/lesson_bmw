/*
 * @Author: Zzceaon
 * @Date: 2020-07-26 17:42:59
 * @LastEditTime: 2020-07-26 17:50:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\Next\demo3\pages\time.js
 */ 
import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const One = dynamic(import('../components/one'))
function Time() {
  const [nowTime, setTime] = useState(Date.now())
  const changeTime = async() => {
    const moment = await import('moment')
    setTime(moment.default(Date.now()).format())
  }
  return (
    <>
      <div>时间: {nowTime}</div>
      <One />
      <div><button onClick={changeTime}>改变时间格式</button></div>
    </>
  )
}

export default Time
