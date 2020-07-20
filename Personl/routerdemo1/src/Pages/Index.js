/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 13:25:17
 * @LastEditTime: 2020-07-20 13:54:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\routerdemo1\src\Pages\Index.js
 */ 
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
    this.props.history.push("/home/")
  }
  render() { 
    return (
      <div>
        <h2>Zzceaon</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}><Link to={"/list/" + item.cid}>{item.title}</Link></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
 
export default Index;