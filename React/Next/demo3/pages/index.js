/*
 * @Author: Zzceaon
 * @Date: 2020-07-25 22:14:54
 * @LastEditTime: 2020-07-25 23:52:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\Next\demo3\pages\index.js
 */ 
import React from 'react';
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  // routeChangeStart
  // routeChangeComplete
  // beforeHistoryChange
  // routeChangeError 404不算Error
  // hashChangeStart
  // hashChangeComplete
  Router.events.on('routeChangeStart', (...args) => {
    console.log('1.routeChangeStart -> 路由开始变化, 参数为: ', ...args)
  })
  Router.events.on('routeChangeComplete', (...args) => {
    console.log('2.routeChangeComplete -> 路由变化结束, 参数为: ', ...args)
  })
  Router.events.on('beforeHistoryChange', (...args) => {
    console.log('3.beforeHistoryChange -> 参数为: ', ...args)
  })
  Router.events.on('routeChangeError', (...args) => {
    console.log('4.routeChangeError -> 路由发生错误, 参数为: ', ...args)
  })
  Router.events.on('hashChangeStart', (...args) => {
    console.log('5.hashChangeStart -> 参数为: ', ...args)
  })
  Router.events.on('hashChangeComplete', (...args) => {
    console.log('6.hashChangeComplete -> 参数为: ', ...args)
  })
  function gotoShenXue() {
    Router.push({
      pathname: "/xiaojiejie",
      query: {name: "深雪"}
    })
  }
  function gotoJieYi() {
    Router.push("/xiaojiejie?name=结衣")
  }
  return (
    <>
      <div><h2>首页</h2></div>
      <div>
        <Link href="/xiaojiejie?name=深雪"><a>选择深雪</a></Link>
        <br/>
        {/* href的第一个{}为jsx语法 */}
        <Link href={{pathname: "/xiaojiejie", query:{name: "结衣"}}}><a>选择结衣</a></Link>
      </div>
      <div>
        <button onClick={gotoShenXue}>选深雪</button>
        <br/>
        <button onClick={gotoJieYi}>选结衣</button>
      </div>
      <div>
        {/* hash */}
        <Link href="#zzceaon"><a>选Zzceaon</a></Link>
      </div>
    </>
  )
}

export default Home