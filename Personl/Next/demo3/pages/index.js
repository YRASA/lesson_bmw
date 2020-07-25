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
        <Link href={{pathname: "/xiaojiejie", query: {name: "结衣"}}}><a>选择结衣</a></Link>
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