/*
 * @Author: Zzceaon
 * @Date: 2020-09-22 08:04:45
 * @LastEditTime: 2020-09-22 08:24:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\react16\src\ReqDemo.js
 */
import React, { forwardRef } from 'react'

let p = new Promise(resolve => {
  setTimeout(() => {
    resolve('res')
  }, 3000)
})
let status = 'pending'
let res
function req() {
  p.then(r => {
    status = 'success'
    res = r
  }, () => {})
  if (status === 'pending') throw p
  else if (status === 'success') return res
  // else if (status === )
}
export default forwardRef(function Demo(props, ref) {
  const res = req()  // req 内部 throw
  console.log("-----------")
  return (
    // 父组件的ref.current:
    <h2 ref={ref}>
      {res}
    </h2>
  )
})