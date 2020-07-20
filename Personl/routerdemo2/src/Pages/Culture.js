/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 23:46:36
 * @LastEditTime: 2020-07-21 00:11:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\routerdemo2\src\Pages\Culture.js
 */ 
import React from 'react';
import { Route, Link } from 'react-router-dom'
import Store from './culture/store'
import Club from './culture/club'
import Part from './culture/part'
import Art from './culture/art'

function Culture() {
  let routerConfig = [
    {
      path: "/culture/store/",
      title: "生活方式商店",
      component: Store
    },
    {
      path: "/culture/club/",
      title: "AMR车手俱乐部",
      component: Club
    },
    {
      path: "/culture/art/",
      title: "生活的艺术",
      component: Art
    },
    {
      path: "/culture/part/",
      title: "配件",
      component: Part
    }
  ]
  return (
    <div>
      <div className="topNav">
        <ul>
          {
            routerConfig.map((item, index) => {
              return (
                <li><Link to={item.path}>{item.title}</Link></li>
              )
            })
          }
        </ul>
      </div>
      <div className="Content">
        <div>
          <h3>商店与生活方式</h3>
        </div>
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

export default Culture