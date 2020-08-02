/*
 * @Author: Zzceaon
 * @Date: 2020-07-21 10:23:37
 * @LastEditTime: 2020-07-29 19:50:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\sanyuan-music\src\routes\index.js
 */ 
// 二级路由
// /path Component 放在相应的地方<Route />
// 嵌套
import React, { lazy, Suspense, Component } from 'react';
import { Redirect } from 'react-router-dom'
// import Recommend from '../application/Recommend'
import BlankLayout from '../layouts/BlankLayout'
import HomeLayout from '../layouts/HomeLayout'

const RecommendComponent = lazy(() => import("../application/Recommend"))
const SingersComponent = lazy(() => import("../application/Singers"))
const SingerComponent = lazy(() => import("../application/Singer"));
const SearchComponent = lazy(() => import("./../application/Search/"));

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}>
      </Component>
    </Suspense>
  )
}

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
            component: SuspenseComponent(RecommendComponent)
          },
          {
            path: '/singers',
            component: SuspenseComponent(SingersComponent),
            key: "Singers",
            routes: [
              {
                path: "/singers/:id",
                component: SuspenseComponent(SingerComponent)
              }
            ]
          },
          {
            path: "/search",
            exact: true,  // 设置为true: 因为后端要以/search来搜索
            key: "search",
            component: SuspenseComponent(SearchComponent)
          }
          // {
          //   path: '/rank',
          //   component: RankComponent
          // }
        ]
      }
    ]
}]