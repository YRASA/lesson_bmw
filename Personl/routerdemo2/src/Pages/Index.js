/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 17:12:03
 * @LastEditTime: 2020-07-21 00:24:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\routerdemo2\src\Pages\Index.js
 */ 
import React from 'react';
import { Route, Link } from 'react-router-dom'
import Story from './world/story'
import Car from './world/car'
import Magazine from './world/magazine'

function Index() {
  let routerConfig = [
    {
      path: "/world/story/",
      title: "品牌故事",
      component: Story
    },
    {
      path: "/world/car/",
      title: "赛车",
      component: Car
    },
    {
      path: "/world/magazine/",
      title: "杂志",
      component: Magazine
    }
  ]
  return (
    <div>
      <div className="topNav">
        <ul>
          {
            routerConfig.map((item, index) => {
              return (
                <li key={index}><Link to={item.path}>{item.title}</Link></li>
              )
            })
          }
        </ul>
      </div>
      <div className="Content">
        <h3>Aston Martin 世界</h3>
        {
          routerConfig.map((item, index) => {
            return (
              <Route key={index} path={item.path} component={item.component} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Index