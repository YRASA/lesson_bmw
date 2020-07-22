/*
 * @Author: Zzceaon
 * @Date: 2020-07-22 22:14:30
 * @LastEditTime: 2020-07-22 22:30:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\HookDemo\demo1\src\Example9.js
 */ 
import React, { useState, useCallback, useEffect } from 'react';

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
    // 只有销毁才执行
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
  return size
}
function Example() {
  const size = useWinSize()
  return (
    <div>页面Size: {size.width}X{size.height}</div>
  )
}
export default Example