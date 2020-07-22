/*
 * @Author: Zzceaon
 * @Date: 2020-07-22 17:13:35
 * @LastEditTime: 2020-07-22 17:27:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\hookdemo1\src\example6\showArea.js
 */ 
import React, { useContext } from 'react';
import { ColorContext } from './color';

function ShowArea() {
  const { color } = useContext(ColorContext)
  return (
    <div style={{color: color}}>
      字体颜色为{color}
    </div>
  )
}

export default ShowArea