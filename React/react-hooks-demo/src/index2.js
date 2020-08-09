/*
 * @Author: Zzceaon
 * @Date: 2020-08-05 10:36:07
 * @LastEditTime: 2020-08-05 11:24:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\react-hooks-demo\src\index.js
 */
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './styles.css'
import { FaceComponent } from './demo2'

function App() {
  const [satisfactionLevel, setSatisfactionLevel] = useState(250)
  return (
    <div className="App">
      <input
        type="range"
        min="0"
        max="500"
        value={satisfactionLevel}
        onChange={(event) => setSatisfactionLevel(
          +event.target.value
        )}
      />
      <br/>
      <span>{satisfactionLevel}</span>
      <br/>
      <FaceComponent level={satisfactionLevel}/>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)