/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 22:45:48
 * @LastEditTime: 2020-07-20 23:06:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\RouterDemo\demo2\src\Pages\model.js
 */ 
import React from 'react';
import { Route, Link } from 'react-router-dom'
import DBX from './model/DBXPage'
import VANTAGE from './model/vantagePage'
import DB11 from './model/DB11Page'
import DBS from './model/DBSPage'
import VALKYRIE from './model/valkyriePage'

function Model() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/model/dbx">DBX</Link></li>
          <li><Link to="/model/vantage">全新VANTAGE</Link></li>
          <li><Link to="/model/db11">DB11</Link></li>
          <li><Link to="/model/dbs">DBS SUPERLEGGERA</Link></li>
          <li><Link to="/model/valkyrie">阿斯顿马丁"战神"(ASTON MARTIN VALKYRIE)</Link></li>
        </ul>
      </div>
      <div className="modelContent">
        <div>
          <h3>车型</h3>
        </div>
        <Route path="/model/dbx/" component={DBX} />
        <Route path="/model/vantage/" component={VANTAGE} />
        <Route path="/model/db11/" component={DB11} />
        <Route path="/model/dbs/" component={DBS} />
        <Route path="/model/valkyrie/" component={VALKYRIE} />
      </div>
    </div>
  )
}

export default Model