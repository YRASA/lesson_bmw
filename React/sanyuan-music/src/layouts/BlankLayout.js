/*
 * @Author: Zzceaon
 * @Date: 2020-07-21 10:52:15
 * @LastEditTime: 2020-07-21 10:53:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\sanyuan-music\src\layouts\BlankLayout.js
 */ 
import React from 'react';
import { renderRoutes } from 'react-router-config'

const Layout = ({route}) => <>{renderRoutes(route.routes)}</>

export default Layout