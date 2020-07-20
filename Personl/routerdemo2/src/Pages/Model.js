/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 23:05:26
 * @LastEditTime: 2020-07-21 00:25:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\routerdemo2\src\Pages\Model.js
 */ 
import React from 'react';
import { Route, Link } from 'react-router-dom'
import DBX from './model/DBXPage'
import DB11 from './model/DB11Page'
import DBS from './model/DBSPage'
import VANTAGE from './model/vantagePage'
import VALKYRIE from './model/valkyriePage'

function Model() {
  let routerConfig = [
    {
      path: "/model/dbx/",
      title: "DBX",
      component: DBX
    },
    {
      path: "/model/vantage/",
      title: "全新VANTAGE",
      component: VANTAGE
    },
    {
      path: "/model/db11/",
      title: "DB11",
      component: DB11
    },
    {
      path: "/model/dbs/",
      title: "DBS SUPERLEGGERA",
      component: DBS
    },
    {
      path: "/model/valkyrie/",
      title: '阿斯顿马丁"战神"(ASTON MARTIN VALKYRIE)',
      component: VALKYRIE
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
          <h3>车型</h3>
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

export default Model