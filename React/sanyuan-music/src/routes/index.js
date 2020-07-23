/*
 * @Author: Zzceaon
 * @Date: 2020-07-21 10:23:37
 * @LastEditTime: 2020-07-22 10:43:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\sanyuan-music\src\routes\index.js
 */ 
// 二级路由
// /path Component 放在相应的地方<Route />
// 嵌套
import React from 'react';
import { Redirect } from 'react-router-dom'
import Recommend from '../application/Recommend'
import BlankLayout from '../layouts/BlankLayout'
import HomeLayout from '../layouts/HomeLayout'

export default [{
    component: BlankLayout,
    routes: [
      {
        path: '/',
        component: HomeLayout,
        routes: [
          {
            path: '/',
            exact: true,
            render: () => <Redirect to="/recommend" />
          },
          {
            path: '/recommend',
            component: Recommend
          },
          // {
          //   path: '/singers',
          //   component: SingersComponent
          // }.component{
          //   path: '/rank',
          //   component: RankComponent
          // }
        ]
      }
    ]
}]