/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 23:32:31
 * @LastEditTime: 2020-07-20 23:44:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\RouterDemo\demo2\src\Pages\culture.js
 */ 
import React from 'react';
import { Route, Link } from 'react-router-dom'
import Part from './culture/part'
import Club from './culture/club'
import Art from './culture/art'
import Store from './culture/store'

function Culture() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/culture/store">生活方式商店</Link></li>
          <li><Link to="/culture/club">AMR车手俱乐部</Link></li>
          <li><Link to="/culture/art">生活的艺术</Link></li>
          <li><Link to="/culture/part">配件</Link></li>
        </ul>
      </div>
      <div className="cultureContent">
        <div>
          <h3>商店与生活方式</h3>
        </div>
        <Route path="/culture/store/" component={Store} />
        <Route path="/culture/club/" component={Club} />
        <Route path="/culture/art/" component={Art} />
        <Route path="/culture/part/" component={Part} />
      </div>
    </div>
  )
}

export default Culture