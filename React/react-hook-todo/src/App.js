/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 10:32:30
 * @LastEditTime: 2020-07-20 12:01:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\react-hook-todo\src\App.js
 */ 
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Spin, Tabs } from 'antd'
import { fetchTodos } from './api'

const { TabPane } = Tabs

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
