/*
 * @Author: Zzceaon
 * @Date: 2020-07-22 13:48:17
 * @LastEditTime: 2020-07-22 14:02:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\HookDemo\demo1\src\example6\showArea.js
 */ 
import React, { useContext } from 'react';
import { ColorContext } from './color';

function ShowArea() {
  const { color } = useContext(ColorContext)
  return (
    <div
      style={{
        color: color
      }}
    >
      字体颜色为{color}
    </div>
  )
}

export default ShowArea