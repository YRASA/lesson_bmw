/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 13:25:22
 * @LastEditTime: 2020-07-20 13:34:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\routerdemo1\src\Pages\List.js
 */ 
import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    let tempId = this.props.match.params.id
    this.setState({id: tempId})
  }
  render() { 
    return (
      <h2>List-Page->{this.state.id}</h2>
    )
  }
}
 
export default List;