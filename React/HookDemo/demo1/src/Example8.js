/*
 * @Author: Zzceaon
 * @Date: 2020-07-22 21:47:54
 * @LastEditTime: 2020-07-22 22:05:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\HookDemo\demo1\src\Example8.js
 */ 
import React, { useRef, useState, useEffect } from 'react';

function Example() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    inputEl.current.value = "Zzceaon"
    console.log(inputEl)
  }
  const [text, setText] = useState('ZC')
  const textRef = useRef()
  useEffect(() => {
    textRef.current = text
    console.log('textRef.current: ', textRef.current)
  })
  return (
    <>
      <input ref={inputEl} type="text"/>
      <button onClick={onButtonClick}>在input上显示文字</button>
      <br/>
      <br/>
      <input value={text} onChange={(e) => {setText(e.target.value)}} />
    </>
  )
}

export default Example