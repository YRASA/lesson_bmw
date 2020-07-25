/*
 * @Author: Zzceaon
 * @Date: 2020-07-25 21:20:50
 * @LastEditTime: 2020-07-25 21:44:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\Next\demo2\pages\a.js
 */ 
import Link from 'next/link'

export default () => (
  <>
    <h2>Zzceaon-A Page</h2>
    <Link href="/" >
      <a>
        <span>返回首页</span>
        <span>Icon</span>
      </a>
    </Link>
  </>
)