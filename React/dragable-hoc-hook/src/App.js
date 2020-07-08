/*
 * @Author: Zzceaon
 * @Date: 2020-07-09 02:26:36
 * @LastEditTime: 2020-07-09 03:06:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\dragable-hoc-hook\src\App.js
 */ 
import React from 'react';
import DragAble1, { WithDragAble2 } from './DragAble1';
import { Drag1 } from './useDrag';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <DragAble1 />
      <WithDragAble2 />
      <Drag1 />
    </div>
  );
}

export default App;
