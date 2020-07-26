/*
 * @Author: Zzceaon
 * @Date: 2020-07-26 17:15:09
 * @LastEditTime: 2020-07-26 17:20:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\Next\demo3\pages\zzceaon.js
 */ 
import React, { useState } from 'react';

function Zzceaon() {
  const [color, setColor] = useState("aqua")
  const changeColor = () => {
    setColor(color === "aqua" ? "blue" : "aqua")
  }
  return (
    <>
      <div>Zzceaon</div>
      <button onClick={changeColor}>改变颜色</button>
      <style JSX>
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