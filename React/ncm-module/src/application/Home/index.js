/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 10:21:20
 * @LastEditTime: 2020-08-01 14:27:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\application\Home\index.js
 */ 
import React from 'react';
import { renderRoutes } from 'react-router-config'
import { Top, Tab, TabItem } from './style'
import { NavLink } from 'react-router-dom'  // 利用NavLink进行路由跳转

function Home(props) {
  const { route } = props
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe64d;</span>
        <span className="title">Musik</span>
        <span className="iconfont search">&#xe72e;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected"><TabItem><span>推荐</span></TabItem></NavLink>
        <NavLink to="/singers" activeClassName="selected"><TabItem><span>歌手</span></TabItem></NavLink>
        <NavLink to="/rank" activeClassName="selected"><TabItem><span>排行榜</span></TabItem></NavLink>
      </Tab>
      { renderRoutes(route.routes) }
    </div>
  )
}

export default React.memo(Home)