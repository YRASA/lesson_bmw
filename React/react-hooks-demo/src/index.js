/*
 * @Author: Zzceaon
 * @Date: 2020-08-09 22:30:13
 * @LastEditTime: 2020-08-09 22:30:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\react-hooks-demo\index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { MyComponent } from './demo'

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)