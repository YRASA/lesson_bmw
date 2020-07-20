/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 17:12:27
 * @LastEditTime: 2020-07-21 00:26:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\routerdemo2\src\AppRouter.js
 */ 
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/Index'
import Model from './Pages/Model'
import Culture from './Pages/Culture'

function AppRouter() {
  let routerConfig = [
    {
      path: "/",
      title: "Aston Martin 世界",
      exact: false,
      component: Index
    },
    {
      path: "/model/",
      title: "车型",
      exact: false,
      component: Model
    },
    {
      path: "/culture/",
      title: "商店与生活方式",
      exact: false,
      component: Culture
    }
  ]
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>Aston Martin</h3>
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
        <div className="rightMain">
          {
            routerConfig.map((item, index) => {
              return (
                <Route key={index} path={item.path} exact={item.exact} component={item.component} />
              )
            })
          }
        </div>
      </div>
    </Router>
  )
}

export default AppRouter