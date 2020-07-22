/*
 * @Author: Zzceaon
 * @Date: 2020-07-21 21:01:37
 * @LastEditTime: 2020-07-21 21:27:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\HookDemo\demo1\src\Example3.js
 */ 
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
  useEffect(() => {
    console.log('useEffect=>进入Index页面')
    return () => {  // 解绑
      console.log('退出Index页面')
    }
  }, [])
  return <h2>Zzceaon</h2>
}
function List() {
  useEffect(() => {  // 只要状态变化就会解绑
    console.log('useEffect=>进入List页面')
  })
  return <h2>List-Page</h2>
}
function Example() {
  const [ count, setCount ] = useState(0)
  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`)
    return () => {
      console.log("============")
    }
  }, [count])
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {setCount(count + 1)}}>Click me</button>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list/">列表页</Link></li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
      </Router>
    </div>
  )
}
 
export default Example;