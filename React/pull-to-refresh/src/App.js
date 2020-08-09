/*
 * @Author: Zzceaon
 * @Date: 2020-08-05 14:48:15
 * @LastEditTime: 2020-08-05 19:33:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\pull-to-refresh\src\App.js
 */
import React, { useEffect, useRef, useState } from 'react'
import pullToRefresh from './pullDown'
import styled, { css } from 'styled-components'
import './App.css'

// 标签模板
function foo(...args) {
  console.log(args)
  let str = 'insert here=>'
  str += args[0][0]
  str += args[1]
  str += args[0][1]
  str += args[2]
  str += args[0][2]
  return str
}
let res = foo`i am a ${18} age, i am a boy ${19} age.`
console.log(res)
const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    /* css: 聚合 */
    background: white;
    color: black;
  `}
`
const { init } = pullToRefresh()
function App() {
  const [isPrimary, setIsPrimary] = useState(false)
  const bodyRef = useRef()
  const contentRef = useRef()
  const ptrRef = useRef()
  useEffect(() => {
    init({
      bodyEl: bodyRef.current,
      contentEl: contentRef.current,
      ptrEl: ptrRef.current,
      loadingFunction: () => new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 3000)
      })
    }, [])
  })
  return (
    <div ref={bodyRef} className="body-wrap">
      {/* ptr-wrap: 移动 */}
      <div ref={ptrRef} className="ptr-wrap">
        {/* loading: 动画 */}
        <div className="loading"></div>
      </div>
      <header ref={contentRef} className="content-wrap">
      <Button
        primary={isPrimary}
        onClick={() => {
        setIsPrimary(!isPrimary)
      }}>按钮</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
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
