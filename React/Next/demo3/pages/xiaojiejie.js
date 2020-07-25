/*
 * @Author: Zzceaon
 * @Date: 2020-07-25 22:15:21
 * @LastEditTime: 2020-07-25 22:22:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\Next\demo3\pages\xiaojiejie.js
 */ 
import { withRouter } from 'next/router'
import Link from 'next/link'

const Xiaojiejie = ({router}) => {  //只有使用了withRouter这里才有router
  return (
    <>
      <div>{router.query.name}来为我服务了</div>
      <Link href="/"><a>返回首页</a></Link>
    </>
  )
}

export default withRouter(Xiaojiejie)