/*
 * @Author: Zzceaon
 * @Date: 2020-07-25 22:34:45
 * @LastEditTime: 2020-07-25 22:42:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\Next\demo3\pages\xiaojiejie.js
 */ 
import { withRouter } from 'next/router'
import Link from 'next/link'

const Xiaojiejie = ({router}) => {
  return (
    <>
      <div>{router.query.name}来为我服务了</div>
      <Link href="/"><a>返回首页</a></Link>
    </>
  )
}

export default withRouter(Xiaojiejie)