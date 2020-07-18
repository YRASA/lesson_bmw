/*
 * @Author: Zzceaon
 * @Date: 2020-07-17 10:23:59
 * @LastEditTime: 2020-07-17 11:20:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\qunaer-fullstack\qunaer-fronted\src\App.js
 */ 
import React from 'react';
import './App.css';

function App() {
  fetch('http://localhost:1314/rest/cities')
    .then(data => data.json())
    .then(data => {
      console.log(data)
    })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
