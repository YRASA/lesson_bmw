/*
 * @Author: Zzceaon
 * @Date: 2020-07-22 22:30:39
 * @LastEditTime: 2020-07-22 22:41:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\hookdemo1\src\Example9.js
 */ 
import React, { useState, useEffect, useCallback } from 'react';

function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])
  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
  return size
}
function Example() {
  const size = useWinSize()
  return <div>当前Size: {size.width}X{size.height}</div>
}

export default Example