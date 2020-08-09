/*
 * @Author: Zzceaon
 * @Date: 2020-08-09 20:22:31
 * @LastEditTime: 2020-08-09 20:32:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\react-hooks-demo\src\demo.js
 */
import React, { useState, useEffect, useRef } from 'react'
// closure
export const MyComponent = () => {
  const [message, setMessage] = useState("initial message")
  const [seconds, setSeconds] = useState(0)
  const secondsRef = useRef(seconds)
  useEffect(() => {
    setTimeout(() => {
      console.log(seconds)
      setSeconds(1)
      secondsRef.current = 1
    }, 1000)
    // 闭包
    setTimeout(() => {
      setMessage(`Total seconds: ${secondsRef.current}`)
    }, 2000)
    // [seconds] 监听再执行一次, 所以可以拿到seconds了
  }, [])
  return (
    <>
      <h3>{message}</h3>
      <h4>{seconds}</h4>
    </>
  )
}
