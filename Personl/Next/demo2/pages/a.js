/*
 * @Author: Zzceaon
 * @Date: 2020-07-25 22:03:40
 * @LastEditTime: 2020-07-25 22:08:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\Next\demo2\pages\a.js
 */ 
import Link from 'next/link'

export default () => (
  <>
    <h2>Zzceaon-B Page</h2>
    <Link href="/">
      <a>
        <span>返回首页</span>
        <span>Icon</span>
      </a>
    </Link>
  </>
)