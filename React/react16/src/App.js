/*
 * @Author: Zzceaon
 * @Date: 2020-09-22 07:54:23
 * @LastEditTime: 2020-09-22 08:24:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\react16\src\App.js
 */
import React, { Suspense, createRef } from 'react'
import ReqDemo from './ReqDemo.js'
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import './App.css'

Sentry.init({
  dsn: 'https://8ffc4f660db24926a26166a36537de6d@o451105.ingest.sentry.io/5436543',
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
})
// state => isLoading true => didMount req 成功 isLoading false
function App() {
  const ref = createRef()
  // 必须要等Suspense执行完成, 组件挂载完成才能拿到子组件
  setTimeout(() => {
    console.log(ref.current)
  }, 6000)
  return (
    <div>
      {/* fallback(未加载完成显示) */}
      {/* catch() {XXX} */}
      <Suspense fallback={<h2>正在加载中...</h2>}>
        {/* throw Promise */}
        {/* 错误监控 sentry */}
        {/* 加载完成显示 */}
        {/* 子组件拿不到key 普通方式传ref也拿不到 className拿得到 */}
        <ReqDemo key={123} className={'foo'} ref={ref} />
      </Suspense>
    </div>
  )
}

export default App