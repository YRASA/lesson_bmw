/*
 * @Author: Zzceaon
 * @Date: 2020-07-25 22:15:21
 * @LastEditTime: 2020-07-26 13:24:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\Next\demo3\pages\xiaojiejie.js
 */ 
import { withRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import './mock/data'

// 用到withRouter后才能把getInitialProps请求到的东西写在这
const Xiaojiejie = ({router, list}) => {  //只有使用了withRouter这里才有router
  return (
    <>
      <div>{router.query.name}来为我服务了</div>
      <div>{list}</div>
      <Link href="/"><a>返回首页</a></Link>
    </>
  )
}
Xiaojiejie.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios('/data').then((res) => {
      console.log("远程数据结果: ", res)
      resolve(res.data)
    })
  })
  return await promise
}

export default withRouter(Xiaojiejie)