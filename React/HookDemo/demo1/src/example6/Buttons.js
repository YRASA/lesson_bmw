/*
 * @Author: Zzceaon
 * @Date: 2020-07-22 13:50:02
 * @LastEditTime: 2020-07-22 14:14:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\HookDemo\demo1\src\example6\Buttons.js
 */ 
import React, { useContext } from 'react';
import { ColorContext, UPDATE_COLOR } from './color';

function Buttons() {
  const { dispatch } = useContext(ColorContext)
  return (
    <div>
      <button onClick={() => {dispatch({type: UPDATE_COLOR, color: "red"})}}>红色</button>
      <button onClick={() => {dispatch({type: UPDATE_COLOR, color: "yellow"})}}>黄色</button>
    </div>
  )
}

export default Buttons