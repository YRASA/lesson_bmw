import React from 'react';
import Link from 'next/link'
import Router from 'next/router'

export default () => {
  function gotoA() {
    Router.push("/a")
  }
  function gotoB() {
    Router.push("/b")
  }
  return (
    <>
      <div><h2>首页</h2></div>
      <div><Link href="/a"><a>Zzceaon-A</a></Link></div>
      <div><Link href="/b"><a>Zzceaon-B</a></Link></div>
      {/* <div><button onClick={() => {Router.push("/a")}}>Zzceaon-A</button></div> */}
      {/* <div><button onClick={() => {Router.push("/b")}}>Zzceaon-A</button></div> */}
      <div><button onClick={gotoA}>Zzceaon-A</button></div>
      <div><button onClick={gotoB}>Zzceaon-B</button></div>
    </>
  )
}