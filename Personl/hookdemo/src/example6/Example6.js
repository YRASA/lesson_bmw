/*
 * @Author: Zzceaon
 * @Date: 2020-07-22 17:13:44
 * @LastEditTime: 2020-07-22 17:26:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\hookdemo1\src\example6\Example6.js
 */ 
import React from 'react';
import { Color } from './color'
import ShowArea from './showArea';
import Buttons from './Buttons';

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