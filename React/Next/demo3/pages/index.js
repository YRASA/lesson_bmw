/*
 * @Author: Zzceaon
 * @Date: 2020-07-25 22:14:54
 * @LastEditTime: 2020-07-25 22:31:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\Next\demo3\pages\index.js
 */ 
import React from 'react';
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
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
    </>
  )
}

export default Home