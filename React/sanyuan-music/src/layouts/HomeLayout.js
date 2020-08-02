/*
 * @Author: Zzceaon
 * @Date: 2020-07-22 10:24:22
 * @LastEditTime: 2020-07-27 12:12:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\sanyuan-music\src\layouts\HomeLayout.js
 */ 
import React from 'react';
import { renderRoutes } from 'react-router-config'
import { Top, Tab, TabItem } from './HomeLayout.style'
import { NavLink } from 'react-router-dom'

function Home(props) {
  const { route } = props
  return (
    <>
      <Top>
        <span className="iconfont menu">&#xe62f;</span>
        <span className="title">Musik</span>
        <span className="iconfont search">&#xe621;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected">
          <TabItem><span>推荐</span></TabItem>
        </NavLink>
        <NavLink to="/singers" activeClassName="selected">
          <TabItem><span>歌手</span></TabItem>
        </NavLink>
        <NavLink to="/rank" activeClassName="selected">
          <TabItem><span>排行榜</span></TabItem>
        </NavLink>
      </Tab>
      {renderRoutes(route.routes)}
    </>
  )
}

export default React.memo(Home)