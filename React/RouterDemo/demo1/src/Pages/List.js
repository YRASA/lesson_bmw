/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 13:05:58
 * @LastEditTime: 2020-07-20 13:16:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\RouterDemo\demo1\src\Pages\List.js
 */ 
import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    console.log(this.props)
    let tempId = this.props.match.params.id
    this.setState({id:tempId})
  }
  render() { 
    return (
    <h2>List-page->{this.state.id}</h2>
    )
  }
}
 
export default List;