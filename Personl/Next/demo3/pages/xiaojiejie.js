/*
 * @Author: Zzceaon
 * @Date: 2020-07-25 22:34:45
 * @LastEditTime: 2020-07-26 13:35:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\Next\demo3\pages\xiaojiejie.js
 */ 
import { withRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import './mock/data'

const Xiaojiejie = ({router, list}) => {
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
    axios.get('/data').then((res) => {
      console.log("远程数据结果: ", res)
      resolve(res.data)
    })
  })
  return await promise
}

export default withRouter(Xiaojiejie)