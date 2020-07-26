/*
 * @Author: Zzceaon
 * @Date: 2020-07-26 17:52:09
 * @LastEditTime: 2020-07-26 18:22:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\Next\demo3\pages\header.js
 */ 
import Myheader from '../components/myheader'
import '../static/test.css'
import { Button } from 'antd'

function Header() {
  return (
    <>
      <Myheader />
      <div>Zzceaon</div>
      <div><Button>我是按钮</Button></div>
    </>
  )
}

export default Header