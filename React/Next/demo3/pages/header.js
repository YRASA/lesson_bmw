/*
 * @Author: Zzceaon
 * @Date: 2020-07-26 17:52:57
 * @LastEditTime: 2020-07-26 18:17:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\Next\demo3\pages\header.js
 */ 
import Myheader from '../components/myheader'
import '../static/test.css'
import { Button } from 'antd'

//Next.js css import  style jsx  antd css import
function Header() {
  return (
    <>
      {/* 全局 */}
      <Myheader />
      <div>Zzceaon</div>
      <div><Button>我是按钮</Button></div>
    </>
  )
}

export default Header