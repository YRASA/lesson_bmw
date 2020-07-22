/*
 * @Author: Zzceaon
 * @Date: 2020-07-22 13:51:18
 * @LastEditTime: 2020-07-22 14:05:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\HookDemo\demo1\src\example6\Example6.js
 */ 
import React from 'react';
import ShowArea from './showArea'
import Buttons from './Buttons'
import { Color } from './color'

function Example() {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  )
}

export default Example