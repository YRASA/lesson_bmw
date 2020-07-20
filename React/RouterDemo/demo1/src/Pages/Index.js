/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 13:04:43
 * @LastEditTime: 2020-07-20 13:54:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\RouterDemo\demo1\src\Pages\Index.js
 */ 
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {cid:123, title:'123'},
        {cid:456, title:'456'},
        {cid:789, title:'789'}
      ]
    }
    // 重定向方案二
    this.props.history.push("/home/")
  }
  render() { 
    return (
      <div>
        {/* 重定向方案一  */}
        {/* <Redirect to="/home/" /> */}
        <h2>Zzceaon</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  <Link Link to={'/list/' + item.cid}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
 
export default Index;