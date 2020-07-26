/*
 * @Author: Zzceaon
 * @Date: 2020-07-26 13:42:56
 * @LastEditTime: 2020-07-26 13:53:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\Next\demo3\pages\zzceaon.js
 */ 
import React, { useState } from 'react';

function Zzceaon() {
  const [color, setColor] = useState('aqua')
  const changeColor = () => {
    setColor(color === 'aqua' ? 'blue' : 'aqua')
  }
  return (
    <>
      <div>Zzceaon</div>
      <div><button onClick={changeColor}>改变颜色</button></div>
      <style jsx>
        {`
          div {
            color: ${color};
          }
        `}
      </style>
    </>
  )
}

export default Zzceaon